import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, Clock, CheckCircle, ArrowRight, Sparkles, Zap, Target, Users, Building, Heart, Star, MapPin, Shield, Lightbulb, TrendingUp, Phone, Mail, MessageCircle, Search, Filter } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
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

    const element = document.getElementById('faq-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    const message = "Merhaba, SSS sayfasından yazıyorum. Sorularım var.";
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

  const faqs = [
    {
      category: "Genel Sorular",
      icon: <HelpCircle className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      questions: [
        {
          question: "Bir mimari proje ne kadar sürede tamamlanır?",
          answer: "Proje süresi projenin büyüklüğüne ve karmaşıklığına göre değişir. Küçük konut projeleri 2-4 hafta, büyük ticari projeler 2-6 ay sürebilir. Detaylı süre planlaması ilk görüşmede belirlenir.",
          tags: ["Süre", "Planlama"]
        },
        {
          question: "Fiyatlandırma nasıl yapılır?",
          answer: "Fiyatlandırma proje alanı, karmaşıklığı ve hizmet kapsamına göre belirlenir. Metrekare başına veya sabit paket fiyatları sunuyoruz. Ücretsiz danışmanlık sonrası net fiyat teklifi veriyoruz.",
          tags: ["Fiyat", "Paket"]
        },
        {
          question: "Hangi bölgelerde hizmet veriyorsunuz?",
          answer: "Türkiye'nin tüm illerinde hizmet veriyoruz. İstanbul, Ankara, İzmir gibi büyük şehirlerde ofislerimiz bulunmakta, diğer illerde de proje bazlı çalışmalar yapıyoruz.",
          tags: ["Bölge", "Hizmet"]
        }
      ]
    },
    {
      category: "Teknik Sorular",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      questions: [
        {
          question: "3D görselleştirme hizmeti veriyor musunuz?",
          answer: "Evet, tüm projelerimizde profesyonel 3D görselleştirme hizmeti sunuyoruz. Bu sayede projenizi tamamlanmadan önce detaylı olarak görebilir ve gerekli değişiklikleri yapabilirsiniz.",
          tags: ["3D", "Görselleştirme"]
        },
        {
          question: "Ruhsat projeleri de hazırlıyor musunuz?",
          answer: "Evet, ruhsat projeleri hazırlama konusunda uzmanız. Belediye ve ilgili kurumlarla gerekli tüm işlemleri yürütüyor, projenizin onay sürecini hızlandırıyoruz.",
          tags: ["Ruhsat", "Onay"]
        },
        {
          question: "İnşaat denetimi hizmeti veriyor musunuz?",
          answer: "Evet, inşaat denetimi hizmeti sunuyoruz. Projenizin başlangıçtan bitişe kadar kaliteli ve güvenli bir şekilde tamamlanması için sürekli denetim yapıyoruz.",
          tags: ["Denetim", "Kalite"]
        }
      ]
    },
    {
      category: "Hizmet Detayları",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      questions: [
        {
          question: "Revizyon hakkı var mı?",
          answer: "Evet, tüm paketlerimizde revizyon hakkı bulunmaktadır. Başlangıç paketinde 1, Profesyonel pakette 3, Premium pakette sınırsız revizyon hakkı sunuyoruz.",
          tags: ["Revizyon", "Paket"]
        },
        {
          question: "Garanti süresi ne kadar?",
          answer: "Tüm projelerimizde 5 yıl garanti süresi sunuyoruz. Bu süre içinde ortaya çıkabilecek herhangi bir sorun için ücretsiz destek sağlıyoruz.",
          tags: ["Garanti", "Destek"]
        },
        {
          question: "Uzaktan çalışma yapabiliyor musunuz?",
          answer: "Evet, modern teknolojiler sayesinde uzaktan çalışma yapabiliyoruz. Video konferans, online paylaşım platformları ve dijital araçlarla projelerinizi yönetebiliyoruz.",
          tags: ["Uzaktan", "Teknoloji"]
        }
      ]
    },
    {
      category: "Ödeme ve Finans",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      questions: [
        {
          question: "Ödeme koşulları nasıl?",
          answer: "Proje başlangıcında %30, tasarım aşamasında %30, uygulama aşamasında %30, proje tamamlandığında %10 ödeme planı sunuyoruz. Özel projeler için farklı ödeme planları da mümkün.",
          tags: ["Ödeme", "Plan"]
        },
        {
          question: "Kredi kartı ile ödeme yapabiliyor muyum?",
          answer: "Evet, kredi kartı ile ödeme seçeneği sunuyoruz. Taksitli ödeme imkanı da mevcuttur. Detaylar için bizimle iletişime geçebilirsiniz.",
          tags: ["Kredi Kartı", "Taksit"]
        },
        {
          question: "Fiyat teklifiniz ne kadar süre geçerli?",
          answer: "Fiyat tekliflerimiz 30 gün geçerlidir. Bu süre içinde projeye başlamanız durumunda teklif edilen fiyat geçerli olur.",
          tags: ["Teklif", "Süre"]
        }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "E-posta",
      description: "info@mimariofis.com",
      responseTime: "24 saat içinde",
      gradient: "from-blue-500 to-blue-600",
      action: () => window.open('mailto:info@mimariofis.com', '_blank')
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Telefon",
      description: "+90 538 081 17 15",
      responseTime: "Hemen",
      gradient: "from-green-500 to-green-600",
      action: () => window.open('tel:+905380811715', '_blank')
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      description: "+90 538 081 17 15",
      responseTime: "2 saat içinde",
      gradient: "from-purple-500 to-purple-600",
      action: openWhatsApp
    }
  ];

  const categories = ['Tümü', ...faqs.map(faq => faq.category)];

  const filteredFAQs = faqs.filter(category => 
    selectedCategory === 'Tümü' || category.category === selectedCategory
  ).map(category => ({
    ...category,
    questions: category.questions.filter(question =>
      question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(category => category.questions.length > 0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <HelpCircle className="w-4 h-4 text-yellow-300 mr-2" />
            <span className="text-sm font-medium text-white">SSS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Sık Sorulan Sorular</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Müşterilerimizin en çok merak ettiği sorular ve detaylı cevapları. 
            Aradığınız cevabı bulamadıysanız bizimle iletişime geçin.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Sorularınızı arayın..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Categories */}
      <section id="faq-section" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Sonuç Bulunamadı</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Arama kriterlerinize uygun soru bulunamadı. Farklı kelimeler deneyebilir veya bizimle iletişime geçebilirsiniz.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Tümü');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Tüm Soruları Göster
              </button>
            </div>
          ) : (
            filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16 animate-fade-in" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center bg-gradient-to-r ${category.color} text-white p-4 rounded-2xl mb-4`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {category.category}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </div>
                
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 3 + faqIndex;
                    return (
                      <div 
                        key={faqIndex} 
                        className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100 dark:border-gray-600"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300"
                        >
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {faq.question}
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {faq.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            {openIndex === globalIndex ? (
                              <ChevronUp className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                            ) : (
                              <ChevronDown className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                            )}
                          </div>
                        </button>
                        
                        {openIndex === globalIndex && (
                          <div className="px-8 pb-6 animate-slideDown">
                            <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Enhanced Contact Methods */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-6">
              <MessageSquare className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">İletişim</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Başka Sorularınız mı <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Var?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Aradığınız cevabı bulamadıysanız, bizimle iletişime geçin. 
              Uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-200 dark:border-gray-600 cursor-pointer animate-fade-in"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
                onClick={method.action}
              >
                <div className={`mb-6 p-4 bg-gradient-to-r ${method.gradient} rounded-xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{method.description}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Yanıt süresi: {method.responseTime}</p>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6">
                <Zap className="w-4 h-4 text-yellow-300 mr-2" />
                <span className="text-sm font-medium text-white">Ücretsiz Danışmanlık</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">
                Projenizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Hayata Geçirelim</span>
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Projeniz hakkında detaylı bilgi almak için ücretsiz danışmanlık hizmetimizden yararlanın. 
                Uzman ekibimiz size en uygun çözümü sunacaktır.
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
                  onClick={navigateToContact}
                  className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  <ArrowRight className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  İletişim Sayfasına Git
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage; 