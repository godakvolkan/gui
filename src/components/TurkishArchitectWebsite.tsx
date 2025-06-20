import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Award, Users, Calendar, ArrowRight, MessageCircle, Home, Building, Palette, Wrench, CheckCircle, Star, Eye, Clock } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  location: string;
  area: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const TurkishArchitectWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('ana-sayfa');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('tümü');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Villa Botanica",
      category: "konut",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      description: "Modern mimari çizgiler ve doğal malzemelerle tasarlanmış lüks villa projesi. Sürdürülebilir tasarım ilkeleri gözetilerek hazırlanmıştır.",
      year: "2024",
      location: "Bodrum, Muğla",
      area: "450 m²"
    },
    {
      id: 2,
      title: "Teknokent Ofis Binası",
      category: "ticari",
      image: "https://images.unsplash.com/photo-1565792715-8f7c5dee2c53?w=800&h=600&fit=crop",
      description: "Teknoloji firmaları için tasarlanmış modern ofis kompleksi. Esnek çalışma alanları ve yeşil bina sertifikası.",
      year: "2024",
      location: "Ankara, Türkiye",
      area: "12.000 m²"
    },
    {
      id: 3,
      title: "Kültür Merkezi",
      category: "kamu",
      image: "https://images.unsplash.com/photo-1570896756434-23d7f02d6b4c?w=800&h=600&fit=crop",
      description: "Şehrin kültürel yaşamına katkı sağlayacak çok fonksiyonlu kültür ve sanat merkezi projesi.",
      year: "2023",
      location: "İstanbul, Türkiye",
      area: "8.500 m²"
    },
    {
      id: 4,
      title: "Seaside Restaurant",
      category: "ticari",
      image: "https://images.unsplash.com/photo-1582267746897-6b3df7c78b45?w=800&h=600&fit=crop",
      description: "Deniz manzaralı restoran tasarımı. Açık ve kapalı alanları birleştiren modern konsept.",
      year: "2023",
      location: "Çeşme, İzmir",
      area: "750 m²"
    },
    {
      id: 5,
      title: "Zen Residence",
      category: "konut",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      description: "Minimalist tasarım felsefesi ile hazırlanmış modern konut projesi.",
      year: "2023",
      location: "Antalya, Türkiye",
      area: "320 m²"
    },
    {
      id: 6,
      title: "İlkokul Binası",
      category: "kamu",
      image: "https://images.unsplash.com/photo-1581345018842-391516e0ecbf?w=800&h=600&fit=crop",
      description: "Çocuk dostu tasarımı ile öne çıkan modern ilkokul binası projesi.",
      year: "2022",
      location: "Bursa, Türkiye",
      area: "4.200 m²"
    }
  ];

  const services: Service[] = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Mimari Tasarım",
      description: "Konut, ticari ve kamu binaları için kapsamlı mimari tasarım hizmetleri",
      features: ["Konsept Tasarım", "Uygulama Projeleri", "Ruhsat Projeleri", "3D Görselleştirme"]
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "İç Mimarlık",
      description: "Fonksiyonel ve estetik iç mekan tasarımları",
      features: ["İç Mekan Tasarımı", "Mobilya Tasarımı", "Renk Konsulting", "Dekorasyon"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Proje Yönetimi",
      description: "Başlangıçtan bitişe kadar profesyonel proje yönetimi",
      features: ["İnşaat Denetimi", "Zaman Planlaması", "Maliyet Kontrolü", "Koordinasyon"]
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Restorasyon",
      description: "Tarihi yapıların onarımı ve yeniden işlevlendirilmesi",
      features: ["Tarihi Analiz", "Koruma Planları", "Malzeme Seçimi", "Uygulama"]
    }
  ];

  const stats = [
    { number: "150+", label: "Tamamlanan Proje" },
    { number: "12", label: "Yıllık Deneyim" },
    { number: "25+", label: "Ödül" },
    { number: "500+", label: "Mutlu Müşteri" }
  ];

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "Villa Sahibi",
      comment: "Hayal ettiğimiz evi gerçeğe dönüştürdüler. Profesyonel yaklaşımları ve kaliteli işçilikleri için teşekkürler.",
      rating: 5
    },
    {
      name: "Fatma Demir",
      role: "İşletme Sahibi",
      comment: "Restoranımızın tasarımı müthiş oldu. Hem estetik hem de fonksiyonel bir mekan yarattılar.",
      rating: 5
    },
    {
      name: "Mehmet Kaya",
      role: "Müteahhit",
      comment: "Birçok projede birlikte çalıştık. Her zaman zamanında ve kaliteli çıktılar alıyoruz.",
      rating: 5
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['ana-sayfa', 'hakkimizda', 'projeler', 'hizmetler', 'iletisim'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const filteredProjects = activeCategory === 'tümü' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Lütfen gerekli alanları doldurun.');
      return;
    }
    
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const openWhatsApp = () => {
    const message = "Merhaba, mimarlık hizmetleriniz hakkında bilgi almak istiyorum.";
    const phoneNumber = "905551234567"; // WhatsApp numarası
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              MIMAR STUDIO
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'ana-sayfa', label: 'Ana Sayfa' },
                { id: 'hakkimizda', label: 'Hakkımızda' },
                { id: 'projeler', label: 'Projeler' },
                { id: 'hizmetler', label: 'Hizmetler' },
                { id: 'iletisim', label: 'İletişim' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors font-medium ${
                    activeSection === item.id 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'ana-sayfa', label: 'Ana Sayfa' },
                { id: 'hakkimizda', label: 'Hakkımızda' },
                { id: 'projeler', label: 'Projeler' },
                { id: 'hizmetler', label: 'Hizmetler' },
                { id: 'iletisim', label: 'İletişim' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-gray-700 w-full text-left hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* WhatsApp Float Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={24} />
      </button>

      {/* Hero Section */}
      <section id="ana-sayfa" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hayallerinizi
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Gerçeğe Dönüştürüyoruz
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Modern mimari çözümler ile yaşam alanlarınızı yeniden tasarlıyoruz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projeler')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Projelerimizi İnceleyin
            </button>
            <button 
              onClick={() => scrollToSection('iletisim')}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              İletişime Geçin
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                12 Yıllık Deneyim ile 
                <span className="text-blue-600"> Güvenilir Çözümler</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                2012 yılından bu yana Türkiye'nin dört bir yanında konut, ticari ve kamu projeleri gerçekleştiriyoruz. 
                Modern tasarım anlayışı ile geleneksel değerleri harmanlayarak, yaşam kalitesini artıran mekanlar yaratıyoruz.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Müşteri memnuniyetini ön planda tutarak, projelerinizi başlangıçtan bitişe kadar titizlikle yönetiyoruz. 
                Sürdürülebilir tasarım ilkeleri ve yenilikçi çözümlerle sektörde öncü konumdayız.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Licenskli Mimarlar</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Zamanında Teslimat</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Kaliteli İşçilik</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Şeffaf Fiyatlandırma</span>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('iletisim')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
              >
                Hemen İletişime Geçin
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=800&fit=crop" 
                alt="Mimari Tasarım" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-yellow-500 mr-3" />
                  <div>
                    <div className="font-bold text-gray-900">Altın Ödül</div>
                    <div className="text-sm text-gray-600">Mimarlık Birliği 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projeler" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tamamladığımız <span className="text-blue-600">Projeler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her bir proje, kendine özgü hikayesi olan ve müşterilerimizin hayallerini yansıtan başarı örnekleridir.
            </p>
          </div>

          {/* Project Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'tümü', label: 'Tümü' },
              { id: 'konut', label: 'Konut' },
              { id: 'ticari', label: 'Ticari' },
              { id: 'kamu', label: 'Kamu' }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold flex items-center"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Detayları Gör
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </span>
                    <span>{project.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Profesyonel <span className="text-blue-600">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tasarımdan uygulamaya, başlangıçtan bitişe kadar tüm mimarlık hizmetlerini sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-white">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Müşteri <span className="text-blue-600">Görüşleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Birlikte çalıştığımız müşterilerimizin deneyimleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bizimle <span className="text-blue-600">İletişime Geçin</span>
            </h2>
            <p className="text-xl text-gray-600">
              Projeniz için görüşmeye hazırız. Hemen iletişime geçin!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Telefon</div>
                    <div className="text-gray-600">+90 (555) 123 45 67</div>
                    <div className="text-gray-600">+90 (555) 765 43 21</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">E-posta</div>
                    <div className="text-gray-600">info@mimarstudio.com</div>
                    <div className="text-gray-600">proje@mimarstudio.com</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Adres</div>
                    <div className="text-gray-600">
                      Çankaya Mahallesi, Mimarlık Sokak No:15<br />
                      Çankaya / Ankara - Türkiye
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Çalışma Saatleri</div>
                    <div className="text-gray-600">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi: 09:00 - 14:00
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp ile İletişim
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mesaj Gönderin</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0555 123 45 67"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Proje konusu"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Projeniz hakkında detayları yazın..."
                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  Mesajı Gönder
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                MIMAR STUDIO
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Modern mimari çözümler ile hayallerinizi gerçeğe dönüştürüyoruz. 
                12 yıllık deneyimimiz ile güvenilir ve kaliteli hizmet sunuyoruz.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
                <button 
                  onClick={openWhatsApp}
                  className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2">
                {['Ana Sayfa', 'Hakkımızda', 'Projeler', 'Hizmetler', 'İletişim'].map((item, index) => (
                  <li key={index}>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <div className="space-y-3 text-gray-400">
                <div>+90 (555) 123 45 67</div>
                <div>info@mimarstudio.com</div>
                <div>Çankaya, Ankara</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mimar Studio. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
                <span className="text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded-full">
                  {selectedProject.year}
                </span>
              </div>
              
              <p className="text-gray-600 text-lg mb-6">{selectedProject.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"><strong>Konum:</strong> {selectedProject.location}</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"><strong>Alan:</strong> {selectedProject.area}</span>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('iletisim')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
              >
                Benzer Proje İsteyin
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TurkishArchitectWebsite; 