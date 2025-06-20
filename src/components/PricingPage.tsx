import React, { useState } from 'react';
import { CheckCircle, Star, ArrowRight, Calculator, Clock, Award, DollarSign, Users, Building } from 'lucide-react';

const PricingPage: React.FC = () => {
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
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      bestFor: "Küçük konut projeleri",
      deliveryTime: "2-3 hafta"
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
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      bestFor: "Orta ölçekli projeler",
      deliveryTime: "4-6 hafta"
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
      icon: <Star className="w-8 h-8 text-purple-600" />,
      bestFor: "Büyük ölçekli projeler",
      deliveryTime: "8-12 hafta"
    }
  ];

  const pricingFactors = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Proje Büyüklüğü",
      description: "Metrekare ve karmaşıklık seviyesi fiyatı etkiler"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Hizmet Kapsamı",
      description: "Tasarım, uygulama ve denetim hizmetleri"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Teslim Süresi",
      description: "Acil projeler için ek ücret alınabilir"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-600" />,
      title: "Malzeme Seçimi",
      description: "Lüks malzemeler ek maliyet oluşturur"
    }
  ];

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Fiyatlandırma <span className="text-yellow-400">Paketleri</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Projenizin büyüklüğüne ve ihtiyaçlarınıza uygun esnek fiyatlandırma seçenekleri ile 
            bütçenize uygun çözümler sunuyoruz.
          </p>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fiyatlandırma <span className="text-blue-600">Faktörleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fiyatlarımızı etkileyen temel faktörler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="flex justify-center mb-4">{factor.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{factor.title}</h3>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hizmet <span className="text-blue-600">Paketleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İhtiyaçlarınıza uygun paketi seçin, özel projeler için kişiselleştirilmiş teklif alın
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingPackages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  pkg.popular ? 'ring-2 ring-blue-500 transform scale-105 border-blue-500' : 'border-gray-200'
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
                  <div className="text-sm text-gray-500 mb-4">
                    <div>En uygun: {pkg.bestFor}</div>
                    <div>Teslim süresi: {pkg.deliveryTime}</div>
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
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Payment Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ödeme <span className="text-blue-600">Planları</span>
            </h2>
            <p className="text-xl text-gray-600">
              Esnek ödeme seçenekleri ile bütçenize uygun çözümler
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Standart Plan</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Proje başlangıcında %30</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Tasarım aşamasında %30</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Uygulama aşamasında %30</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Proje tamamlandığında %10</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 text-center border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Esnek Plan</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Proje başlangıcında %20</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Aylık %15 ödeme</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Proje tamamlandığında %20</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Kredi kartı ile ödeme</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Plan</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Proje başlangıcında %50</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Proje tamamlandığında %50</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>%5 indirim avantajı</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Öncelikli hizmet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage; 