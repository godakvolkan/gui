import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Genel Sorular",
      questions: [
        {
          question: "Bir mimari proje ne kadar sürede tamamlanır?",
          answer: "Proje süresi projenin büyüklüğüne ve karmaşıklığına göre değişir. Küçük konut projeleri 2-4 hafta, büyük ticari projeler 2-6 ay sürebilir. Detaylı süre planlaması ilk görüşmede belirlenir."
        },
        {
          question: "Fiyatlandırma nasıl yapılır?",
          answer: "Fiyatlandırma proje alanı, karmaşıklığı ve hizmet kapsamına göre belirlenir. Metrekare başına veya sabit paket fiyatları sunuyoruz. Ücretsiz danışmanlık sonrası net fiyat teklifi veriyoruz."
        },
        {
          question: "Hangi bölgelerde hizmet veriyorsunuz?",
          answer: "Türkiye'nin tüm illerinde hizmet veriyoruz. İstanbul, Ankara, İzmir gibi büyük şehirlerde ofislerimiz bulunmakta, diğer illerde de proje bazlı çalışmalar yapıyoruz."
        }
      ]
    },
    {
      category: "Teknik Sorular",
      questions: [
        {
          question: "3D görselleştirme hizmeti veriyor musunuz?",
          answer: "Evet, tüm projelerimizde profesyonel 3D görselleştirme hizmeti sunuyoruz. Bu sayede projenizi tamamlanmadan önce detaylı olarak görebilir ve gerekli değişiklikleri yapabilirsiniz."
        },
        {
          question: "Ruhsat projeleri de hazırlıyor musunuz?",
          answer: "Evet, ruhsat projeleri hazırlama konusunda uzmanız. Belediye ve ilgili kurumlarla gerekli tüm işlemleri yürütüyor, projenizin onay sürecini hızlandırıyoruz."
        },
        {
          question: "İnşaat denetimi hizmeti veriyor musunuz?",
          answer: "Evet, inşaat denetimi hizmeti sunuyoruz. Projenizin başlangıçtan bitişe kadar kaliteli ve güvenli bir şekilde tamamlanması için sürekli denetim yapıyoruz."
        }
      ]
    },
    {
      category: "Hizmet Detayları",
      questions: [
        {
          question: "Revizyon hakkı var mı?",
          answer: "Evet, tüm paketlerimizde revizyon hakkı bulunmaktadır. Başlangıç paketinde 1, Profesyonel pakette 3, Premium pakette sınırsız revizyon hakkı sunuyoruz."
        },
        {
          question: "Garanti süresi ne kadar?",
          answer: "Tüm projelerimizde 5 yıl garanti süresi sunuyoruz. Bu süre içinde ortaya çıkabilecek herhangi bir sorun için ücretsiz destek sağlıyoruz."
        },
        {
          question: "Uzaktan çalışma yapabiliyor musunuz?",
          answer: "Evet, modern teknolojiler sayesinde uzaktan çalışma yapabiliyoruz. Video konferans, online paylaşım platformları ve dijital araçlarla projelerinizi yönetebiliyoruz."
        }
      ]
    },
    {
      category: "Ödeme ve Finans",
      questions: [
        {
          question: "Ödeme koşulları nasıl?",
          answer: "Proje başlangıcında %30, tasarım aşamasında %30, uygulama aşamasında %30, proje tamamlandığında %10 ödeme planı sunuyoruz. Özel projeler için farklı ödeme planları da mümkün."
        },
        {
          question: "Kredi kartı ile ödeme yapabiliyor muyum?",
          answer: "Evet, kredi kartı ile ödeme seçeneği sunuyoruz. Taksitli ödeme imkanı da mevcuttur. Detaylar için bizimle iletişime geçebilirsiniz."
        },
        {
          question: "Fiyat teklifiniz ne kadar süre geçerli?",
          answer: "Fiyat tekliflerimiz 30 gün geçerlidir. Bu süre içinde projeye başlamanız durumunda teklif edilen fiyat geçerli olur."
        }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: "E-posta",
      description: "info@mimariofis.com",
      responseTime: "24 saat içinde"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Telefon",
      description: "+90 555 123 45 67",
      responseTime: "Hemen"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "WhatsApp",
      description: "+90 555 123 45 67",
      responseTime: "2 saat içinde"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <HelpCircle className="w-20 h-20" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Sık Sorulan <span className="text-yellow-400">Sorular</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Müşterilerimizin en çok merak ettiği sorular ve detaylı cevapları. 
            Aradığınız cevabı bulamadıysanız bizimle iletişime geçin.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 3 + faqIndex;
                  return (
                    <div key={faqIndex} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        {openIndex === globalIndex ? (
                          <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        )}
                      </button>
                      
                      {openIndex === globalIndex && (
                        <div className="px-8 pb-6">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Başka Sorularınız mı <span className="text-blue-600">Var?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Aradığınız cevabı bulamadıysanız, bizimle iletişime geçin. 
              Uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{method.description}</p>
                <p className="text-sm text-gray-600">Yanıt süresi: {method.responseTime}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ücretsiz Danışmanlık</h3>
            <p className="text-blue-100 mb-6">
              Projeniz hakkında detaylı bilgi almak için ücretsiz danışmanlık hizmetimizden yararlanın.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center">
              Hemen İletişime Geçin
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sık Sorulan <span className="text-blue-600">Sorular</span> Hakkında
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Müşterilerimizin en çok merak ettiği konuları derledik. Bu sayede 
                hem zaman kazanabilir hem de projeniz hakkında daha net bilgi edinebilirsiniz.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Güncel ve doğru bilgiler</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Detaylı ve anlaşılır cevaplar</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Hızlı erişim imkanı</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Sürekli güncellenen içerik</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" 
                alt="FAQ" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <div className="font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Destek Hizmeti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage; 