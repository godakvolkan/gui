import React, { useState, useEffect } from 'react';
import { CheckCircle, Star, ArrowRight, Calculator, Clock, Award, DollarSign, Users, Building, Sparkles, Zap, Target, Heart, Shield, Lightbulb, TrendingUp, Phone, Mail, MessageCircle, Percent, Gift, ShieldCheck, Zap as ZapIcon } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('pricing-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    const message = "Merhaba, fiyatlandırma paketleri hakkında bilgi almak istiyorum.";
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

  const pricingPackages = [
    {
      name: "Başlangıç",
      price: billingCycle === 'monthly' ? "₺15.000" : "₺150.000",
      originalPrice: billingCycle === 'monthly' ? "₺18.000" : "₺180.000",
      period: billingCycle === 'monthly' ? "aylık" : "yıllık",
      description: "Küçük ölçekli projeler için ideal",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Konsept tasarım",
        "3D görselleştirme (2 adet)",
        "Temel teknik çizimler",
        "Malzeme listesi",
        "1 revizyon hakkı",
        "E-posta desteği"
      ],
      popular: false,
      icon: <Calculator className="w-8 h-8" />,
      bestFor: "Küçük konut projeleri",
      deliveryTime: "2-3 hafta",
      savings: billingCycle === 'monthly' ? "₺3.000" : "₺30.000",
      badge: "Başlangıç"
    },
    {
      name: "Profesyonel",
      price: billingCycle === 'monthly' ? "₺35.000" : "₺350.000",
      originalPrice: billingCycle === 'monthly' ? "₺42.000" : "₺420.000",
      period: billingCycle === 'monthly' ? "aylık" : "yıllık",
      description: "Orta ölçekli projeler için kapsamlı çözüm",
      gradient: "from-purple-500 to-purple-600",
      features: [
        "Konsept tasarım",
        "3D görselleştirme (5 adet)",
        "Detaylı teknik çizimler",
        "Malzeme ve fiyat analizi",
        "3 revizyon hakkı",
        "Proje yönetimi",
        "İnşaat denetimi",
        "Telefon desteği",
        "Öncelikli destek"
      ],
      popular: true,
      icon: <Award className="w-8 h-8" />,
      bestFor: "Orta ölçekli projeler",
      deliveryTime: "4-6 hafta",
      savings: billingCycle === 'monthly' ? "₺7.000" : "₺70.000",
      badge: "En Popüler"
    },
    {
      name: "Premium",
      price: billingCycle === 'monthly' ? "₺75.000" : "₺750.000",
      originalPrice: billingCycle === 'monthly' ? "₺90.000" : "₺900.000",
      period: billingCycle === 'monthly' ? "aylık" : "yıllık",
      description: "Büyük ölçekli projeler için tam hizmet",
      gradient: "from-orange-500 to-orange-600",
      features: [
        "Konsept tasarım",
        "3D görselleştirme (sınırsız)",
        "Tüm teknik çizimler",
        "Detaylı maliyet analizi",
        "Sınırsız revizyon",
        "Tam proje yönetimi",
        "İnşaat denetimi",
        "7/24 öncelikli destek",
        "Garanti süresi uzatma",
        "Özel danışmanlık"
      ],
      popular: false,
      icon: <Star className="w-8 h-8" />,
      bestFor: "Büyük ölçekli projeler",
      deliveryTime: "8-12 hafta",
      savings: billingCycle === 'monthly' ? "₺15.000" : "₺150.000",
      badge: "Premium"
    }
  ];

  const pricingFactors = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Proje Büyüklüğü",
      description: "Metrekare ve karmaşıklık seviyesi fiyatı etkiler",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Hizmet Kapsamı",
      description: "Tasarım, uygulama ve denetim hizmetleri",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Teslim Süresi",
      description: "Acil projeler için ek ücret alınabilir",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Malzeme Seçimi",
      description: "Lüks malzemeler ek maliyet oluşturur",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "5 Yıl Garanti",
      description: "Tüm projelerimizde 5 yıl garanti süresi"
    },
    {
      icon: <ZapIcon className="w-6 h-6" />,
      title: "Hızlı Teslimat",
      description: "Zamanında teslimat garantisi"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Müşteri Memnuniyeti",
      description: "%98 müşteri memnuniyet oranı"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Kalite Odaklı",
      description: "En yüksek kalite standartları"
    }
  ];

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
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
            <DollarSign className="w-4 h-4 text-yellow-300 mr-2" />
            <span className="text-sm font-medium text-white">Fiyatlandırma</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Fiyatlandırma Paketleri</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Projenizin büyüklüğüne ve ihtiyaçlarınıza uygun esnek fiyatlandırma seçenekleri ile 
            bütçenize uygun çözümler sunuyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={openWhatsApp}
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Fiyat Teklifi Al
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

      {/* Enhanced Pricing Factors */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-6">
              <Target className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Fiyat Faktörleri</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Fiyatlandırma <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Faktörleri</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Fiyatlarımızı etkileyen temel faktörler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingFactors.map((factor, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-700 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-200 dark:border-gray-600 animate-fade-in"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                <div className={`mb-6 p-4 bg-gradient-to-r ${factor.gradient} rounded-xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {factor.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {factor.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Packages */}
      <section id="pricing-section" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2 mb-6">
              <Star className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Hizmet Paketleri</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Hizmet <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Paketleri</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              İhtiyaçlarınıza uygun paketi seçin, özel projeler için kişiselleştirilmiş teklif alın
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-1 flex items-center">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Aylık
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Yıllık
                <span className="ml-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full">%20 İndirim</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingPackages.map((pkg, index) => (
              <div 
                key={index} 
                className={`group relative bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-2 animate-fade-in ${
                  pkg.popular 
                    ? 'ring-2 ring-purple-500 border-purple-500 dark:border-purple-400' 
                    : 'border-gray-200 dark:border-gray-600'
                }`}
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`mb-6 p-4 bg-gradient-to-r ${pkg.gradient} rounded-xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {pkg.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {pkg.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">{pkg.price}</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">/{pkg.period}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="flex items-center justify-center text-sm text-green-600 dark:text-green-400">
                        <Percent className="w-4 h-4 mr-1" />
                        {pkg.savings} tasarruf
                      </div>
                    )}
                  </div>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 space-y-1">
                    <div>En uygun: {pkg.bestFor}</div>
                    <div>Teslim süresi: {pkg.deliveryTime}</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handlePackageSelect(pkg.name)}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-900 dark:text-white'
                  }`}
                >
                  Bu Paketi Seç
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-2 mb-6">
              <Gift className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Avantajlarımız</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Neden <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Bizi Seçmelisiniz?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Kaliteli hizmet ve güvenilir çözümler için doğru adres
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-200 dark:border-gray-600 animate-fade-in"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                <div className="mb-6 p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {benefit.description}
                </p>
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
            <span className="text-sm font-medium text-white">Özel Teklif</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Projenizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Hayata Geçirelim</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Projenizin büyüklüğüne ve ihtiyaçlarınıza özel fiyat teklifi alın. 
            Ücretsiz danışmanlık hizmetimizden yararlanın.
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

export default PricingPage; 