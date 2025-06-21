import React, { useState, useEffect } from 'react';
import { Building, Palette, Wrench, Home, CheckCircle, Star, Sparkles, Zap, Target, Users, Lightbulb, Heart, Phone, Mail } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  bgGradient: string;
  darkBgGradient: string;
  color: string;
  stats: {
    projects: number;
    experience: string;
    satisfaction: number;
  };
}

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
  project: string;
}

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services: Service[] = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Mimari Tasarım",
      description: "Konut, ticari ve kamu binaları için kapsamlı mimari tasarım hizmetleri. Modern teknolojiler ve sürdürülebilir tasarım ilkeleri ile hayalinizdeki projeleri gerçeğe dönüştürüyoruz.",
      features: ["Konsept Tasarım", "Uygulama Projeleri", "Ruhsat Projeleri", "3D Görselleştirme", "Sürdürülebilir Tasarım", "Akıllı Bina Çözümleri"],
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      darkBgGradient: "from-blue-900/20 to-blue-800/20",
      color: "text-blue-600",
      stats: { projects: 150, experience: "10+ Yıl", satisfaction: 98 }
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "İç Mimarlık",
      description: "Fonksiyonel ve estetik iç mekan tasarımları. Her detayı özenle planlanmış, yaşam kalitesini artıran mekanlar yaratıyoruz.",
      features: ["İç Mekan Tasarımı", "Mobilya Tasarımı", "Renk Konsulting", "Dekorasyon", "Aydınlatma Tasarımı", "Akustik Çözümler"],
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      darkBgGradient: "from-purple-900/20 to-purple-800/20",
      color: "text-purple-600",
      stats: { projects: 200, experience: "8+ Yıl", satisfaction: 97 }
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Proje Yönetimi",
      description: "Başlangıçtan bitişe kadar profesyonel proje yönetimi. Zamanında teslim ve bütçe kontrolü garantisi ile projelerinizi güvenle tamamlıyoruz.",
      features: ["İnşaat Denetimi", "Zaman Planlaması", "Maliyet Kontrolü", "Koordinasyon", "Kalite Kontrolü", "Risk Yönetimi"],
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      darkBgGradient: "from-green-900/20 to-green-800/20",
      color: "text-green-600",
      stats: { projects: 80, experience: "12+ Yıl", satisfaction: 99 }
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Restorasyon",
      description: "Tarihi yapıların onarımı ve yeniden işlevlendirilmesi. Kültürel mirasımızı koruyarak modern ihtiyaçlara uygun hale getiriyoruz.",
      features: ["Tarihi Analiz", "Koruma Planları", "Malzeme Seçimi", "Uygulama", "Belgeleme", "Konservasyon"],
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      darkBgGradient: "from-orange-900/20 to-orange-800/20",
      color: "text-orange-600",
      stats: { projects: 45, experience: "15+ Yıl", satisfaction: 96 }
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Ahmet Yılmaz",
      role: "Villa Sahibi",
      comment: "Hayal ettiğimiz evi gerçeğe dönüştürdüler. Profesyonel yaklaşımları ve kaliteli işçilikleri için teşekkürler. Her detay mükemmel planlanmıştı.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      project: "Villa Botanica"
    },
    {
      name: "Fatma Demir",
      role: "İşletme Sahibi",
      comment: "Restoranımızın tasarımı müthiş oldu. Hem estetik hem de fonksiyonel bir mekan yarattılar. Müşterilerimiz çok beğeniyor.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      project: "Seaside Restaurant"
    },
    {
      name: "Mehmet Kaya",
      role: "Müteahhit",
      comment: "Birçok projede birlikte çalıştık. Her zaman zamanında ve kaliteli çıktılar alıyoruz. Güvenilir bir iş ortağı.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      project: "Teknokent Ofis Binası"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "İlk Görüşme",
      description: "Projenizi dinliyor ve ihtiyaçlarınızı anlıyoruz",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Konsept Tasarım",
      description: "Hayalinizi kağıda döküyor ve 3D görselleştiriyoruz",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Detay Planlama",
      description: "Teknik detayları planlıyor ve onayınızı alıyoruz",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Uygulama",
      description: "Profesyonel ekibimizle projenizi hayata geçiriyoruz",
      icon: <Wrench className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-16">
      {/* Enhanced Services Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-orange-400/10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Animated badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Profesyonel Hizmetler</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Kapsamlı <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hizmetlerimiz</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
              Tasarımdan uygulamaya, başlangıçtan bitişe kadar tüm mimarlık hizmetlerini modern teknolojiler ve sürdürülebilir yaklaşımlarla sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Services Content */}
      <section id="services-section" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${service.bgGradient} dark:${service.darkBgGradient} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in`}
                style={{animationDelay: `${0.6 + index * 0.1}s`}}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Service Icon */}
                <div className={`mb-6 p-4 bg-gradient-to-r ${service.gradient} rounded-xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                {/* Service Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Service Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      <CheckCircle className={`w-4 h-4 ${service.color} mr-2`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Service Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{service.stats.projects}+</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Proje</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{service.stats.experience}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{service.stats.satisfaction}%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Memnuniyet</div>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6">
              <Target className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium text-white">Çalışma Sürecimiz</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">
              Nasıl <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Çalışıyoruz</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Projelerinizi başarıyla tamamlamak için izlediğimiz adımlar
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-blue-100 text-sm">{step.description}</p>
                
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/30 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-6">
              <Heart className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Müşteri Deneyimleri</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Müşteri <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Görüşleri</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Birlikte çalıştığımız müşterilerimizin deneyimleri ve başarı hikayeleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in"
                style={{animationDelay: `${1.2 + index * 0.1}s`}}
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Comment */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  "{testimonial.comment}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">{testimonial.project}</div>
                  </div>
                </div>
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
            Hayalinizdeki projeyi gerçeğe dönüştürmek için bizimle iletişime geçin. Ücretsiz danışmanlık hizmetimizden yararlanın.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Hemen Ara
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Mesaj Gönder
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 