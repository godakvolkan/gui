import React, { useState } from 'react';
import { Heart, Calendar, Gift, CheckCircle, ArrowRight, Star, Users, Home, Palette, Award } from 'lucide-react';

const WeddingDiscountPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    partnerName: '',
    email: '',
    phone: '',
    weddingDate: '',
    projectType: '',
    message: ''
  });

  const weddingServices = [
    {
      icon: <Home className="w-8 h-8 text-pink-600" />,
      title: "Ev Tasarımı",
      description: "Hayalinizdeki evi birlikte tasarlayalım",
      originalPrice: "₺40.000",
      discountedPrice: "₺30.000",
      savings: "₺10.000"
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: "İç Mimarlık",
      description: "Romantik ve fonksiyonel iç mekan tasarımı",
      originalPrice: "₺25.000",
      discountedPrice: "₺18.750",
      savings: "₺6.250"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Özel Tasarım Paketi",
      description: "Tam kapsamlı ev ve iç mimarlık hizmeti",
      originalPrice: "₺60.000",
      discountedPrice: "₺45.000",
      savings: "₺15.000"
    }
  ];

  const weddingFeatures = [
    {
      icon: <Heart className="w-6 h-6 text-pink-600" />,
      title: "Romantik Tasarım",
      description: "Aşkınızı yansıtan özel tasarım çözümleri"
    },
    {
      icon: <Gift className="w-6 h-6 text-purple-600" />,
      title: "Hediye Paketi",
      description: "Ücretsiz 3D görselleştirme ve mobilya danışmanlığı"
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      title: "Öncelikli Hizmet",
      description: "Projenizde öncelikli çalışma ve hızlı teslimat"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-600" />,
      title: "Özel İndirim",
      description: "%25 indirim ile bütçenize uygun çözümler"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    alert('Tebrikler! Özel indirim talebiniz alındı. En kısa sürede size dönüş yapacağız.');
  };

  const openWhatsApp = () => {
    const message = "Merhaba, yeni evliler için özel indirim hakkında bilgi almak istiyorum.";
    const phoneNumber = "905380811715";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 animate-bounce">
            <Heart className="w-8 h-8 text-pink-300" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse">
            <Heart className="w-6 h-6 text-purple-300" />
          </div>
          <div className="absolute bottom-10 left-20 animate-bounce delay-1000">
            <Heart className="w-4 h-4 text-pink-300" />
          </div>
          <div className="absolute bottom-20 right-10 animate-pulse delay-500">
            <Heart className="w-5 h-5 text-purple-300" />
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-20 h-20 text-pink-200" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Yeni Evlilere <span className="text-yellow-300">Özel</span>
          </h1>
          <div className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-yellow-300">%25</span> İndirim
          </div>
          <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-3xl mx-auto">
            3 ay içinde evlenen çiftlere özel mimarlık hizmetlerinde %25 indirim fırsatı!
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 inline-block">
            <p className="text-lg font-semibold">
              🎉 Evlilik tarihinizden itibaren 3 ay geçerli
            </p>
          </div>
        </div>
      </section>

      {/* Discount Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Özel <span className="text-pink-600">İndirim</span> Detayları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yeni evliler için hazırladığımız özel paketler ve avantajlar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {weddingServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border-2 border-pink-200 hover:border-pink-300 transition-all duration-300">
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-pink-600 mb-2">{service.discountedPrice}</div>
                  <div className="text-lg text-gray-500 line-through">{service.originalPrice}</div>
                  <div className="text-sm text-green-600 font-semibold mt-2">
                    {service.savings} Tasarruf!
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                  Bu Paketi Seç
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Yeni Evlilere <span className="text-pink-600">Özel</span> Avantajlar
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {weddingFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-4">
              Özel İndirim <span className="text-yellow-300">Başvurusu</span>
            </h2>
            <p className="text-xl text-pink-100">
              Evlilik belgenizi gönderin, özel indirimden yararlanın!
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adınız *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Adınız"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Eşinizin Adı *
                  </label>
                  <input 
                    type="text" 
                    name="partnerName"
                    value={formData.partnerName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Eşinizin adı"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="0555 123 45 67"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Evlilik Tarihi *
                  </label>
                  <input 
                    type="date" 
                    name="weddingDate"
                    value={formData.weddingDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proje Türü *
                  </label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Seçiniz</option>
                    <option value="ev-tasarimi">Ev Tasarımı</option>
                    <option value="ic-mimarlik">İç Mimarlık</option>
                    <option value="ozel-paket">Özel Tasarım Paketi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Proje Detayları
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Hayalinizdeki ev hakkında detayları paylaşın..."
                ></textarea>
              </div>

              <div className="bg-pink-50 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-pink-600 mt-0.5 mr-3" />
                  <div className="text-sm text-gray-700">
                    <strong>Önemli:</strong> Evlilik belgenizin kopyasını e-posta ile göndermeniz gerekmektedir. 
                    İndirim sadece evlilik tarihinden itibaren 3 ay içinde geçerlidir.
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                Özel İndirim Başvurusu Yap
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mutlu <span className="text-pink-600">Çiftler</span>
            </h2>
            <p className="text-xl text-gray-600">
              Özel indirimimizden yararlanan çiftlerin başarı hikayeleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ahmet & Ayşe</h3>
              <p className="text-gray-600 mb-4">"Hayalimizdeki evi %25 indirimle aldık!"</p>
              <div className="text-pink-600 font-semibold">₺15.000 Tasarruf</div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mehmet & Fatma</h3>
              <p className="text-gray-600 mb-4">"Mükemmel iç mimarlık hizmeti aldık."</p>
              <div className="text-pink-600 font-semibold">₺6.250 Tasarruf</div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ali & Zeynep</h3>
              <p className="text-gray-600 mb-4">"Özel paket ile tam istediğimiz gibi oldu."</p>
              <div className="text-pink-600 font-semibold">₺15.000 Tasarruf</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Hayalinizdeki Evi <span className="text-yellow-300">Birlikte</span> Tasarlayalım
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Yeni evliler için özel indirimimizden yararlanın ve hayalinizdeki evi bütçenize uygun şekilde tasarlayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Hemen Başvuru Yap
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Detaylı Bilgi Al
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingDiscountPage; 