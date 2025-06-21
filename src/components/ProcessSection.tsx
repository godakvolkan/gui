import React, { useState, useEffect } from 'react';
import { MessageSquare, Palette, FileText, Hammer, CheckCircle, Home, ArrowRight, Clock, Users, Shield, Zap, Sparkles } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
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

    const element = document.getElementById('process-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const processSteps = [
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "İlk Görüşme",
      description: "Projenizi dinliyor, ihtiyaçlarınızı anlıyor ve vizyonunuzu paylaşıyoruz.",
      duration: "1-2 Gün",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      darkBgGradient: "from-blue-900/20 to-blue-800/20",
      details: ["Ücretsiz danışmanlık", "İhtiyaç analizi", "Bütçe planlaması", "Zaman çizelgesi"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Konsept Tasarım",
      description: "Hayalinizi kağıda döküyor, 3D görselleştirmeler ile projenizi canlandırıyoruz.",
      duration: "1-2 Hafta",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      darkBgGradient: "from-purple-900/20 to-purple-800/20",
      details: ["Konsept eskizler", "3D görselleştirme", "Malzeme seçimi", "Renk paleti"]
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Teknik Proje",
      description: "Detaylı teknik çizimler, hesaplamalar ve uygulama projeleri hazırlıyoruz.",
      duration: "2-3 Hafta",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      darkBgGradient: "from-green-900/20 to-green-800/20",
      details: ["Teknik çizimler", "Yapı hesapları", "Malzeme listesi", "Ruhsat projeleri"]
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "Uygulama",
      description: "Projenizi hayata geçiriyor, kaliteli işçilik ile inşaat sürecini yönetiyoruz.",
      duration: "Projeye Göre",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      darkBgGradient: "from-orange-900/20 to-orange-800/20",
      details: ["İnşaat denetimi", "Kalite kontrolü", "Zaman yönetimi", "Maliyet takibi"]
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Kontrol ve Test",
      description: "Tüm detayları kontrol ediyor, güvenlik ve kalite testleri yapıyoruz.",
      duration: "1 Hafta",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      darkBgGradient: "from-emerald-900/20 to-emerald-800/20",
      details: ["Kalite kontrolü", "Güvenlik testleri", "Enerji verimliliği", "Son kontroller"]
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Teslim ve Garanti",
      description: "Projenizi teslim ediyor, garanti sürecinde yanınızda oluyoruz.",
      duration: "Sürekli",
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100",
      darkBgGradient: "from-indigo-900/20 to-indigo-800/20",
      details: ["Proje teslimi", "Kullanım kılavuzu", "Garanti belgesi", "Sonraki destek"]
    }
  ];

  return (
    <section id="process-section" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating process icons */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-400/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-purple-400/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-400/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/4 w-14 h-14 bg-orange-400/10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(147,51,234,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(147,51,234,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Animated badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Çalışma Sürecimiz</span>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Proje <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Sürecimiz</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Başlangıçtan bitişe kadar şeffaf ve profesyonel çalışma sürecimiz
          </p>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="w-full h-full bg-gradient-to-b from-purple-200 via-blue-200 to-green-200 dark:from-purple-700 dark:via-blue-700 dark:to-green-700 rounded-full animate-pulse"></div>
          </div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} animate-fade-in`}
                style={{animationDelay: `${0.6 + index * 0.1}s`}}
              >
                {/* Enhanced Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 bg-gradient-to-br ${step.gradient} rounded-full border-4 border-white dark:border-gray-800 shadow-lg transition-all duration-500 transform ${activeStep === index ? 'scale-125' : 'scale-100'}`}>
                    {activeStep === index && (
                      <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div 
                    className={`group relative bg-gradient-to-br ${step.bgGradient} dark:${step.darkBgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${activeStep === index ? 'ring-2 ring-purple-400 ring-opacity-50' : ''}`}
                  >
                    {/* Step number */}
                    <div className={`absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {index + 1}
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3`}>
                        <div className="text-white">
                          {step.icon}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                        <div className="flex items-center text-sm text-purple-600 dark:text-purple-400 font-medium">
                          <Clock className="w-4 h-4 mr-1" />
                          {step.duration}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300 group/item">
                          <div className={`w-2 h-2 bg-gradient-to-r ${step.gradient} rounded-full mr-3 group-hover/item:scale-150 transition-transform duration-300`}></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Process Summary */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl animate-fade-in" style={{animationDelay: '1.2s'}}>
          <div className="text-center mb-8">
            <Zap className="w-12 h-12 mx-auto mb-4 text-purple-200" />
            <h3 className="text-3xl font-bold">Süreç Özeti</h3>
            <p className="text-purple-100 mt-2">Profesyonel yaklaşımımızın temel taşları</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-purple-100 text-sm">Adım Süreç</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold mb-2">%100</div>
              <div className="text-purple-100 text-sm">Şeffaflık</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-100 text-sm">İletişim</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold mb-2">5 Yıl</div>
              <div className="text-purple-100 text-sm">Garanti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 