import React from 'react';
import { MessageSquare, Palette, FileText, Hammer, CheckCircle, Home } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
      title: "İlk Görüşme",
      description: "Projenizi dinliyor, ihtiyaçlarınızı anlıyor ve vizyonunuzu paylaşıyoruz.",
      duration: "1-2 Gün",
      details: ["Ücretsiz danışmanlık", "İhtiyaç analizi", "Bütçe planlaması", "Zaman çizelgesi"]
    },
    {
      icon: <Palette className="w-12 h-12 text-purple-600" />,
      title: "Konsept Tasarım",
      description: "Hayalinizi kağıda döküyor, 3D görselleştirmeler ile projenizi canlandırıyoruz.",
      duration: "1-2 Hafta",
      details: ["Konsept eskizler", "3D görselleştirme", "Malzeme seçimi", "Renk paleti"]
    },
    {
      icon: <FileText className="w-12 h-12 text-green-600" />,
      title: "Teknik Proje",
      description: "Detaylı teknik çizimler, hesaplamalar ve uygulama projeleri hazırlıyoruz.",
      duration: "2-3 Hafta",
      details: ["Teknik çizimler", "Yapı hesapları", "Malzeme listesi", "Ruhsat projeleri"]
    },
    {
      icon: <Hammer className="w-12 h-12 text-orange-600" />,
      title: "Uygulama",
      description: "Projenizi hayata geçiriyor, kaliteli işçilik ile inşaat sürecini yönetiyoruz.",
      duration: "Projeye Göre",
      details: ["İnşaat denetimi", "Kalite kontrolü", "Zaman yönetimi", "Maliyet takibi"]
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Kontrol ve Test",
      description: "Tüm detayları kontrol ediyor, güvenlik ve kalite testleri yapıyoruz.",
      duration: "1 Hafta",
      details: ["Kalite kontrolü", "Güvenlik testleri", "Enerji verimliliği", "Son kontroller"]
    },
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Teslim ve Garanti",
      description: "Projenizi teslim ediyor, garanti sürecinde yanınızda oluyoruz.",
      duration: "Sürekli",
      details: ["Proje teslimi", "Kullanım kılavuzu", "Garanti belgesi", "Sonraki destek"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proje <span className="text-blue-600">Sürecimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Başlangıçtan bitişe kadar şeffaf ve profesyonel çalışma sürecimiz
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-6">
                      {step.icon}
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-blue-600 font-medium">{step.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Summary */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-blue-100">Adım Süreç</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">%100</div>
              <div className="text-blue-100">Şeffaflık</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">İletişim</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5 Yıl</div>
              <div className="text-blue-100">Garanti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 