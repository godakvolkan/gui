import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Award, Sparkles, Zap, Target, Users, Building, Heart, Star, MapPin, Clock, Shield, Lightbulb, TrendingUp, Globe, Home, ShoppingBag, School, Camera, Phone, Mail, MessageCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeYear, setActiveYear] = useState(2024);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const navigateToPage = (page: string) => {
    const element = document.getElementById('iletisim');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = "Merhaba, hakkınızda daha fazla bilgi almak istiyorum.";
    const phoneNumber = "905380811715";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const achievements = [
    { number: "500+", label: "Tamamlanan Proje", icon: <Building className="w-6 h-6" /> },
    { number: "12", label: "Yıllık Deneyim", icon: <Clock className="w-6 h-6" /> },
    { number: "98%", label: "Müşteri Memnuniyeti", icon: <Heart className="w-6 h-6" /> },
    { number: "25+", label: "Şehirde Hizmet", icon: <MapPin className="w-6 h-6" /> }
  ];

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Konut Projeleri",
      description: "Modern villa tasarımlarından lüks apartman projelerine kadar kapsamlı konut çözümleri",
      gradient: "from-blue-500 to-blue-600",
      projects: 250
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Ticari Projeler",
      description: "Ofis binaları, AVM'ler, oteller ve restoranlar için profesyonel tasarım hizmetleri",
      gradient: "from-purple-500 to-purple-600",
      projects: 180
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Kamu Projeleri",
      description: "Okullar, hastaneler, kültür merkezleri ve belediye binaları için sürdürülebilir tasarımlar",
      gradient: "from-green-500 to-green-600",
      projects: 70
    }
  ];

  const timeline = [
    { year: 2012, title: "Kuruluş", description: "Mimarlık ofisimizi Ankara'da kurduk" },
    { year: 2015, title: "İlk Büyük Proje", description: "5000m² konut projesi tamamlandı" },
    { year: 2018, title: "Sertifikasyon", description: "ISO 9001 ve ISO 14001 sertifikaları alındı" },
    { year: 2020, title: "Dijital Dönüşüm", description: "3D modelleme ve BIM teknolojilerine geçiş" },
    { year: 2022, title: "Ödül", description: "Mimarlık Birliği Altın Ödülü kazanıldı" },
    { year: 2024, title: "Genişleme", description: "5 şehirde aktif proje yönetimi" }
  ];

  const team = [
    {
      name: "Volkan Gödek",
      role: "Kurucu & Baş Mimar",
      experience: "15+ Yıl",
      expertise: "Konut & Ticari Projeler",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Ayşe Yılmaz",
      role: "İç Mimar",
      experience: "8+ Yıl",
      expertise: "İç Mekan Tasarımı",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Mehmet Kaya",
      role: "Proje Müdürü",
      experience: "12+ Yıl",
      expertise: "Proje Yönetimi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mükemmellik",
      description: "Her projede en yüksek kalite standartlarını hedefliyoruz"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Müşteri Odaklılık",
      description: "Müşteri memnuniyeti bizim en büyük önceliğimizdir"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "İnovasyon",
      description: "Sürekli yenilikçi çözümler geliştiriyoruz"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Güvenilirlik",
      description: "Söz verdiğimiz her şeyi zamanında teslim ediyoruz"
    }
  ];

  return (
    <div className="pt-16">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-yellow-300 mr-2" />
            <span className="text-sm font-medium text-white">2012'den Beri</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Hakkımızda</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            12 yıllık deneyimimizle Türkiye'nin önde gelen mimarlık firmalarından biri olarak, 
            modern tasarım anlayışı ile geleneksel değerleri harmanlayarak yaşam kalitesini artıran mekanlar yaratıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={openWhatsApp}
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Hemen İletişime Geçin
            </button>
            <button 
              onClick={() => navigateToPage('iletisim')}
              className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <ArrowRight className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Projelerimizi İnceleyin
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced About Content */}
      <section id="about-section" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6">
                <Target className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Misyonumuz</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                12 Yıllık Deneyim ile 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Güvenilir Çözümler</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  2012 yılından bu yana Türkiye'nin dört bir yanında konut, ticari ve kamu projeleri gerçekleştiriyoruz. 
                  Modern tasarım anlayışı ile geleneksel değerleri harmanlayarak, yaşam kalitesini artıran mekanlar yaratıyoruz.
                </p>
                <p>
                  Müşteri memnuniyetini ön planda tutarak, projelerinizi başlangıçtan bitişe kadar titizlikle yönetiyoruz. 
                  Sürdürülebilir tasarım ilkeleri ve yenilikçi çözümlerle sektörde öncü konumdayız.
                </p>
                <p>
                  Her projede fonksiyonellik, estetik ve sürdürülebilirlik arasında mükemmel dengeyi kurarak, 
                  hem bugünün ihtiyaçlarını karşılayan hem de geleceğe yönelik çözümler üretiyoruz.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 my-8">
                <div className="flex items-center group">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">Lisanslı Mimarlar</span>
                </div>
                <div className="flex items-center group">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">Zamanında Teslimat</span>
                </div>
                <div className="flex items-center group">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">Kaliteli İşçilik</span>
                </div>
                <div className="flex items-center group">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">Şeffaf Fiyatlandırma</span>
                </div>
              </div>

              <button 
                onClick={() => navigateToPage('iletisim')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Hemen İletişime Geçin
                <ArrowRight className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="relative animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img 
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=800&fit=crop" 
                alt="Mimari Tasarım" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-yellow-500 mr-3" />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">Altın Ödül</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Mimarlık Birliği 2023</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full animate-float"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-purple-500/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium text-white">Başarılarımız</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">
              Sayılarla <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Başarılarımız</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              12 yıllık deneyimimizde elde ettiğimiz başarılar ve rakamlar
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                  <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-blue-100 text-sm">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-6">
              <Building className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Hizmet Alanlarımız</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Uzmanlık <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Alanlarımız</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Farklı sektörlerde kapsamlı mimarlık hizmetleri sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-600 animate-fade-in"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                <div className={`mb-6 p-4 bg-gradient-to-r ${service.gradient} rounded-xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{service.projects}+</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Tamamlanan Proje</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2 mb-6">
              <Clock className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Yolculuğumuz</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Başarı <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Yolculuğumuz</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              2012'den bugüne kadar geçirdiğimiz önemli dönüm noktaları
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600 transform hover:scale-105 transition-all duration-300 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</div>
                      <div className="text-gray-600 dark:text-gray-300">{item.description}</div>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  
                  <div className="w-1/2 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-2 mb-6">
              <Users className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Ekibimiz</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Uzman <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Ekibimiz</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Deneyimli ve yaratıcı ekibimizle projelerinizi hayata geçiriyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-600 animate-fade-in"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  />
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{member.role}</div>
                  
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {member.experience} Deneyim
                    </div>
                    <div className="flex items-center justify-center">
                      <Target className="w-4 h-4 mr-2" />
                      {member.expertise}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 backdrop-blur-sm border border-indigo-400/30 rounded-full px-6 py-2 mb-6">
              <Star className="w-4 h-4 text-indigo-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Değerlerimiz</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Temel <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Değerlerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Her projede bizi yönlendiren temel prensiplerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-200 dark:border-gray-600 animate-fade-in"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                <div className="mb-6 p-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">Hemen Başlayın</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Projenizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Hayata Geçirelim</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            12 yıllık deneyimimizle hayalinizdeki projeyi gerçeğe dönüştürmek için buradayız. 
            Ücretsiz danışmanlık hizmetimizden yararlanın.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openWhatsApp}
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              WhatsApp'ta Yaz
            </button>
            <button 
              onClick={() => navigateToPage('iletisim')}
              className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Hemen Ara
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;