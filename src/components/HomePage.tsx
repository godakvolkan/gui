import React from 'react';
import { ChevronDown, Building, Palette, Wrench, Home, Star, ArrowRight, MapPin, Eye, CheckCircle, Award, Users, Clock } from 'lucide-react';

type PageType = 'ana-sayfa' | 'hakkimizda' | 'projeler' | 'hizmetler' | 'iletisim' | 'sertifikalar' | 'surec' | 'fiyatlandirma' | 'sss' | 'wedding-discount';

interface HomePageProps {
  navigateToPage: (page: PageType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateToPage }) => {
  const stats = [
    { number: "150+", label: "Tamamlanan Proje" },
    { number: "12", label: "Yıllık Deneyim" },
    { number: "25+", label: "Ödül" },
    { number: "500+", label: "Mutlu Müşteri" }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Villa Botanica",
      category: "Konut",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      location: "Bodrum, Muğla",
      area: "450 m²"
    },
    {
      id: 2,
      title: "Teknokent Ofis Binası",
      category: "Ticari",
      image: "https://images.unsplash.com/photo-1565792715-8f7c5dee2c53?w=800&h=600&fit=crop",
      location: "Ankara, Türkiye",
      area: "12.000 m²"
    },
    {
      id: 3,
      title: "Kültür Merkezi",
      category: "Kamu",
      image: "https://images.unsplash.com/photo-1570896756434-23d7f02d6b4c?w=800&h=600&fit=crop",
      location: "İstanbul, Türkiye",
      area: "8.500 m²"
    }
  ];

  const services = [
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: "Mimari Tasarım",
      description: "Konut, ticari ve kamu binaları için kapsamlı mimari tasarım hizmetleri",
      features: ["Konsept Tasarım", "Uygulama Projeleri", "3D Görselleştirme", "Ruhsat Projeleri"]
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-600" />,
      title: "İç Mimarlık",
      description: "Fonksiyonel ve estetik iç mekan tasarımları",
      features: ["İç Mekan Tasarımı", "Mobilya Tasarımı", "Renk Konsulting", "Dekorasyon"]
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "Proje Yönetimi",
      description: "Başlangıçtan bitişe kadar profesyonel proje yönetimi",
      features: ["İnşaat Denetimi", "Zaman Planlaması", "Maliyet Kontrolü", "Koordinasyon"]
    },
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Restorasyon",
      description: "Tarihi yapıların onarımı ve yeniden işlevlendirilmesi",
      features: ["Tarihi Analiz", "Koruma Planları", "Malzeme Seçimi", "Uygulama"]
    }
  ];

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "Villa Sahibi",
      comment: "Hayal ettiğimiz evi gerçeğe dönüştürdüler. Profesyonel yaklaşımları ve kaliteli işçilikleri için teşekkürler. Her aşamada bizi bilgilendirdiler ve sonuç mükemmel oldu.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Fatma Demir",
      role: "İşletme Sahibi",
      comment: "Restoranımızın tasarımı müthiş oldu. Hem estetik hem de fonksiyonel bir mekan yarattılar. Müşterilerimiz çok beğeniyor ve işimiz %40 arttı.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mehmet Kaya",
      role: "Müteahhit",
      comment: "Birçok projede birlikte çalıştık. Her zaman zamanında ve kaliteli çıktılar alıyoruz. Güvenilir ortaklarımız arasında ilk sırada yer alıyorlar.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = "Merhaba, mimarlık hizmetleriniz hakkında bilgi almak istiyorum.";
    const phoneNumber = "905380811715";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Öne Çıkan <span className="text-blue-600">Projelerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Başarıyla tamamladığımız projelerden öne çıkan örnekler
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      Detayları Gör
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
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

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('projeler')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
            >
              Tüm Projeleri Görüntüle
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Profesyonel <span className="text-blue-600">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tasarımdan uygulamaya, başlangıçtan bitişe kadar tüm mimarlık hizmetlerini sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-blue-50">
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

          {/* Extra Services Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kalite Garantisi</h3>
                <p className="text-gray-600">Her projede en yüksek kalite standartlarını garanti ediyoruz</p>
              </div>
              <div className="text-center">
                <Clock className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Zamanında Teslimat</h3>
                <p className="text-gray-600">Projelerinizi belirlenen sürede tamamlıyoruz</p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Müşteri Memnuniyeti</h3>
                <p className="text-gray-600">%100 müşteri memnuniyeti hedefiyle çalışıyoruz</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('hizmetler')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
            >
              Hizmetlerimizi Keşfedin
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
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
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Projenizi Hayata Geçirmeye Hazır mısınız?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Hayalinizdeki projeyi gerçeğe dönüştürmek için bizimle iletişime geçin. 
            Ücretsiz danışmanlık için hemen randevu alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('iletisim')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Hemen İletişime Geçin
            </button>
            <button 
              onClick={() => scrollToSection('projeler')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Projelerimizi İnceleyin
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 