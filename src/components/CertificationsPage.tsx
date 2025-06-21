import React, { useState, useEffect } from 'react';
import { Award, Shield, CheckCircle, Star, FileText, Users, Building, Globe, Sparkles, Target, Heart, Lightbulb, TrendingUp, Mail, MessageCircle, ShieldCheck, Calendar, Clock, ArrowRight, Zap, Phone } from 'lucide-react';

const CertificationsPage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animation will be handled by CSS
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('certifications-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    const message = "Merhaba, sertifikalarınız hakkında bilgi almak istiyorum.";
    const phoneNumber = "905380811715";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const navigateToContact = () => {
    const element = document.getElementById('iletisim');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const certifications = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: "ISO 9001:2015",
      description: "Kalite Yönetim Sistemi",
      year: "2023",
      status: "Aktif",
      gradient: "from-blue-500 to-blue-600",
      details: "Müşteri memnuniyetini artırmak ve sürekli iyileştirme sağlamak için kalite yönetim sistemi uyguluyoruz.",
      benefits: ["Kalite güvencesi", "Sürekli iyileştirme", "Müşteri memnuniyeti"],
      validity: "2026'ya kadar geçerli",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "ISO 14001:2015",
      description: "Çevre Yönetim Sistemi",
      year: "2023",
      status: "Aktif",
      gradient: "from-green-500 to-green-600",
      details: "Çevreye duyarlı tasarım ve sürdürülebilir mimari çözümler için çevre yönetim sistemi uyguluyoruz.",
      benefits: ["Çevre koruması", "Sürdürülebilirlik", "Yeşil tasarım"],
      validity: "2026'ya kadar geçerli",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "TMMOB Üyeliği",
      description: "Türk Mühendis ve Mimar Odaları Birliği",
      year: "2012",
      status: "Aktif",
      gradient: "from-yellow-500 to-yellow-600",
      details: "Mesleki standartları korumak ve geliştirmek için TMMOB üyesi olarak çalışıyoruz.",
      benefits: ["Mesleki standartlar", "Etik kurallar", "Sürekli eğitim"],
      validity: "Sürekli üyelik",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop"
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Mimarlık Lisansı",
      description: "Türkiye Cumhuriyeti Lisansı",
      year: "2012",
      status: "Aktif",
      gradient: "from-purple-500 to-purple-600",
      details: "Resmi mimarlık lisansı ile yasal yetkiye sahip olarak hizmet veriyoruz.",
      benefits: ["Yasal yetki", "Resmi onay", "Güvenilirlik"],
      validity: "Sürekli lisans",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Mimarlar Odası",
      description: "İstanbul Mimarlar Odası Üyeliği",
      year: "2012",
      status: "Aktif",
      gradient: "from-red-500 to-red-600",
      details: "Mesleki etik kurallara uygun olarak İstanbul Mimarlar Odası üyesiyiz.",
      benefits: ["Mesleki etik", "Oda desteği", "Networking"],
      validity: "Sürekli üyelik",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop"
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "İSG Belgesi",
      description: "İş Sağlığı ve Güvenliği",
      year: "2023",
      status: "Aktif",
      gradient: "from-indigo-500 to-indigo-600",
      details: "Çalışanlarımızın ve müşterilerimizin güvenliği için İSG standartlarını uyguluyoruz.",
      benefits: ["İş güvenliği", "Sağlık koruması", "Risk yönetimi"],
      validity: "2026'ya kadar geçerli",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop"
    }
  ];

  const achievements = [
    {
      icon: <Building className="w-16 h-16" />,
      title: "12+ Yıllık Deneyim",
      description: "Sektörde 12 yılı aşkın deneyimimizle güvenilir çözümler sunuyoruz.",
      gradient: "from-blue-500 to-blue-600",
      number: "12+"
    },
    {
      icon: <Award className="w-16 h-16" />,
      title: "25+ Ödül",
      description: "Ulusal ve uluslararası mimarlık ödülleri ile tanınan kalitemiz.",
      gradient: "from-yellow-500 to-yellow-600",
      number: "25+"
    },
    {
      icon: <Globe className="w-16 h-16" />,
      title: "Uluslararası Standartlar",
      description: "Dünya standartlarında hizmet kalitesi ve profesyonellik.",
      gradient: "from-green-500 to-green-600",
      number: "100%"
    }
  ];

  const stats = [
    { number: "12+", label: "Yıllık Deneyim", icon: <Clock className="w-6 h-6" /> },
    { number: "6", label: "Aktif Sertifika", icon: <ShieldCheck className="w-6 h-6" /> },
    { number: "100%", label: "Uyumluluk", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "500+", label: "Tamamlanan Proje", icon: <Building className="w-6 h-6" /> }
  ];

  const qualityCommitments = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Uluslararası Kalite Standartları",
      description: "ISO standartlarına tam uyumluluk"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sürekli İyileştirme",
      description: "Kalite süreçlerinin sürekli geliştirilmesi"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Çevreye Duyarlı Tasarım",
      description: "Sürdürülebilir mimari çözümler"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Güvenlik Önceliği",
      description: "İSG standartlarına tam uyumluluk"
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
            <Award className="w-4 h-4 text-yellow-300 mr-2" />
            <span className="text-sm font-medium text-white">Sertifikalar</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Sertifikalar ve Belgelendirmeler</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Profesyonel standartlarımızı ve kalite güvencemizi gösteren belgelerimiz ile 
            müşterilerimize güvenilir hizmet sunuyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={openWhatsApp}
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Sertifikalar Hakkında Bilgi Al
            </button>
            <button 
              onClick={() => navigateToContact()}
              className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <ArrowRight className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              İletişime Geç
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-200 dark:border-gray-600 animate-fade-in" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                  <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Grid */}
      <section id="certifications-section" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-6">
              <ShieldCheck className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Aktif Sertifikalar</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Aktif <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Sertifikalarımız</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Kalite, çevre ve güvenlik standartlarımızı gösteren belgelerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-200 dark:border-gray-600 cursor-pointer animate-fade-in"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
                onClick={() => setSelectedCert(selectedCert === index ? null : index)}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 bg-gradient-to-r ${cert.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {cert.icon}
                    </div>
                  </div>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-3 py-1 rounded-full">
                    {cert.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {cert.description}
                </p>
                
                {selectedCert === index && (
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-600 rounded-xl animate-slideDown">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{cert.details}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Faydalar:</h4>
                      <ul className="space-y-1">
                        {cert.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Alınma: {cert.year}</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Geçerlilik: {cert.validity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2 mb-6">
              <Star className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Başarılarımız</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Başarılarımız ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Deneyimimiz</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Sektörde elde ettiğimiz başarılar ve kazandığımız ödüller
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group text-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-200 dark:border-gray-600 animate-fade-in"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                <div className={`mb-6 p-4 bg-gradient-to-r ${achievement.gradient} rounded-xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {achievement.number}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Quality Commitment */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-2 mb-6">
                <Target className="w-4 h-4 text-orange-400 mr-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Kalite Taahhüdü</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Kalite <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Taahhüdümüz</span>
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Tüm projelerimizde en yüksek kalite standartlarını garanti ediyoruz. 
                Sertifikalarımız sadece belge değil, müşterilerimize verdiğimiz sözün 
                somut kanıtıdır.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {qualityCommitments.map((commitment, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {commitment.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {commitment.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" 
                alt="Kalite Standartları" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-yellow-500 mr-3" />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">ISO 9001:2015</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Kalite Yönetim Sistemi</div>
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
            <span className="text-sm font-medium text-white">Güvenilir Hizmet</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Sertifikalı <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Kalite Garantisi</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Uluslararası standartlarda sertifikalı hizmet kalitemiz ile projelerinizi 
            güvenle hayata geçirelim. Ücretsiz danışmanlık hizmetimizden yararlanın.
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
              onClick={() => navigateToContact()}
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

export default CertificationsPage; 