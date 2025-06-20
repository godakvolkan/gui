import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Bir mimari proje ne kadar sürede tamamlanır?",
      answer: "Proje süresi projenin büyüklüğüne ve karmaşıklığına göre değişir. Küçük konut projeleri 2-4 hafta, büyük ticari projeler 2-6 ay sürebilir. Detaylı süre planlaması ilk görüşmede belirlenir."
    },
    {
      question: "Fiyatlandırma nasıl yapılır?",
      answer: "Fiyatlandırma proje alanı, karmaşıklığı ve hizmet kapsamına göre belirlenir. Metrekare başına veya sabit paket fiyatları sunuyoruz. Ücretsiz danışmanlık sonrası net fiyat teklifi veriyoruz."
    },
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
    },
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
    },
    {
      question: "Hangi bölgelerde hizmet veriyorsunuz?",
      answer: "Türkiye'nin tüm illerinde hizmet veriyoruz. İstanbul, Ankara, İzmir gibi büyük şehirlerde ofislerimiz bulunmakta, diğer illerde de proje bazlı çalışmalar yapıyoruz."
    },
    {
      question: "Ödeme koşulları nasıl?",
      answer: "Proje başlangıcında %30, tasarım aşamasında %30, uygulama aşamasında %30, proje tamamlandığında %10 ödeme planı sunuyoruz. Özel projeler için farklı ödeme planları da mümkün."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-16 h-16 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sık Sorulan <span className="text-blue-600">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600">
            Müşterilerimizin en çok merak ettiği sorular ve detaylı cevapları
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Başka Sorularınız mı Var?
          </h3>
          <p className="text-blue-100 mb-6">
            Aradığınız cevabı bulamadıysanız, bizimle iletişime geçin. 
            Uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            İletişime Geçin
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 