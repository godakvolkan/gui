import React, { useState } from 'react';
import { CheckCircle, Star, ArrowRight, Calculator, Clock, Award } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const pricingPackages = [
    {
      name: "Başlangıç",
      price: "₺15.000",
      period: "başlangıç",
      description: "Küçük ölçekli projeler için ideal",
      features: [
        "Konsept tasarım",
        "3D görselleştirme (2 adet)",
        "Temel teknik çizimler",
        "Malzeme listesi",
        "1 revizyon hakkı",
        "E-posta desteği"
      ],
      popular: false,
      icon: <Calculator className="w-8 h-8 text-blue-600" />
    },
    {
      name: "Profesyonel",
      price: "₺35.000",
      period: "başlangıç",
      description: "Orta ölçekli projeler için kapsamlı çözüm",
      features: [
        "Konsept tasarım",
        "3D görselleştirme (5 adet)",
        "Detaylı teknik çizimler",
        "Malzeme ve fiyat analizi",
        "3 revizyon hakkı",
        "Proje yönetimi",
        "İnşaat denetimi",
        "Telefon desteği"
      ],
      popular: true,
      icon: <Award className="w-8 h-8 text-yellow-600" />
    },
    {
      name: "Premium",
      price: "₺75.000",
      period: "başlangıç",
      description: "Büyük ölçekli projeler için tam hizmet",
      features: [
        "Konsept tasarım",
        "3D görselleştirme (sınırsız)",
        "Tüm teknik çizimler",
        "Detaylı maliyet analizi",
        "Sınırsız revizyon",
        "Tam proje yönetimi",
        "İnşaat denetimi",
        "7/24 öncelikli destek",
        "Garanti süresi uzatma"
      ],
      popular: false,
      icon: <Star className="w-8 h-8 text-purple-600" />
    }
  ];

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fiyatlandırma <span className="text-blue-600">Paketleri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projenizin büyüklüğüne ve ihtiyaçlarınıza uygun esnek fiyatlandırma seçenekleri
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPackages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    En Popüler
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">{pkg.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                  <span className="text-gray-500">/{pkg.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handlePackageSelect(pkg.name)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Bu Paketi Seç
              </button>
            </div>
          ))}
        </div>

        {/* Custom Quote Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Özel <span className="text-blue-600">Teklif</span> Alın
              </h3>
              <p className="text-gray-600 mb-6">
                Projenizin özel ihtiyaçları için kişiselleştirilmiş fiyat teklifi alın. 
                Ücretsiz danışmanlık ve detaylı analiz sunuyoruz.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">24 saat içinde yanıt</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">Ücretsiz danışmanlık</span>
                </div>
              </div>

              {selectedPackage && (
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-800 font-medium">
                    Seçilen Paket: <span className="font-bold">{selectedPackage}</span>
                  </p>
                </div>
              )}
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0555 123 45 67"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proje Türü
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Konut Projesi</option>
                    <option>Ticari Proje</option>
                    <option>Kamu Projesi</option>
                    <option>Restorasyon</option>
                    <option>İç Mimarlık</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proje Detayları
                  </label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Projeniz hakkında detayları paylaşın..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  Ücretsiz Teklif Al
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 