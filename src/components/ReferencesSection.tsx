import React, { useState } from 'react';
import { Building, Star, Award, TrendingUp, Users, Globe, Quote, ChevronLeft, ChevronRight, CheckCircle, MapPin, Calendar, DollarSign } from 'lucide-react';

const ReferencesSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Enhanced client logos with real company names
  const clientLogos = [
    {
      name: "Kale Group",
      logo: "https://via.placeholder.com/200x100/1e40af/ffffff?text=Kale+Group",
      category: "İnşaat sektörü"
    },
    {
      name: "Emlak Konut",
      logo: "https://via.placeholder.com/200x100/059669/ffffff?text=Emlak+Konut",
      category: "Gayrimenkul"
    },
    {
      name: "Tekfen Holding",
      logo: "https://via.placeholder.com/200x100/dc2626/ffffff?text=Tekfen+Holding",
      category: "Holding"
    },
    {
      name: "Çimsa",
      logo: "https://via.placeholder.com/200x100/7c3aed/ffffff?text=Çimsa",
      category: "Çimento"
    },
    {
      name: "VakıfBank",
      logo: "https://via.placeholder.com/200x100/ea580c/ffffff?text=VakıfBank",
      category: "Bankacılık"
    },
    {
      name: "Türk Telekom",
      logo: "https://via.placeholder.com/200x100/be185d/ffffff?text=Türk+Telekom",
      category: "Telekomünikasyon"
    },
    {
      name: "Garanti BBVA",
      logo: "https://via.placeholder.com/200x100/0891b2/ffffff?text=Garanti+BBVA",
      category: "Bankacılık"
    },
    {
      name: "Sabancı Holding",
      logo: "https://via.placeholder.com/200x100/16a34a/ffffff?text=Sabancı+Holding",
      category: "Holding"
    }
  ];

  // Enhanced success stories
  const successStories = [
    {
      title: "Villa Botanica",
      client: "Özel Müşteri",
      description: "Modern mimari çizgiler ve doğal malzemelerle tasarlanmış lüks villa projesi.",
      metrics: { area: "450 m²", duration: "6 Ay", budget: "₺2.5M", satisfaction: "5/5" },
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
      features: ["Sürdürülebilir Tasarım", "Akıllı Ev Sistemi", "Bahçe Tasarımı"],
      location: "Bodrum, Muğla"
    },
    {
      title: "Teknokent Ofis Binası",
      client: "Teknokent A.Ş.",
      description: "Teknoloji firmaları için tasarlanmış modern ofis kompleksi.",
      metrics: { area: "12.000 m²", duration: "18 Ay", budget: "₺15M", satisfaction: "5/5" },
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      features: ["Yeşil Bina Sertifikası", "Esnek Çalışma Alanları", "Teknoloji Altyapısı"],
      location: "Ankara, Türkiye"
    },
    {
      title: "Kültür Merkezi",
      client: "İstanbul Büyükşehir Belediyesi",
      description: "Şehrin kültürel yaşamına katkı sağlayacak çok fonksiyonlu kültür ve sanat merkezi.",
      metrics: { area: "8.500 m²", duration: "24 Ay", budget: "₺8.5M", satisfaction: "5/5" },
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
      features: ["Konser Salonu", "Sergi Alanları", "Kütüphane"],
      location: "İstanbul, Türkiye"
    },
    {
      title: "Seaside Restaurant",
      client: "Özel Müşteri",
      description: "Deniz manzaralı restoran tasarımı. Açık ve kapalı alanları birleştiren modern konsept.",
      metrics: { area: "750 m²", duration: "4 Ay", budget: "₺1.2M", satisfaction: "5/5" },
      image: "/images/en-iyi-restoranlar-2.png",
      features: ["Deniz Manzarası", "Açık Alan", "Modern Mutfak"],
      location: "Çeşme, İzmir"
    },
    {
      title: "İlkokul Binası",
      client: "Bursa İl Milli Eğitim Müdürlüğü",
      description: "Çocuk dostu tasarımı ile öne çıkan modern ilkokul binası projesi.",
      metrics: { area: "4.200 m²", duration: "12 Ay", budget: "₺3.5M", satisfaction: "5/5" },
      image: "https://images.unsplash.com/photo-1562075775-649f2a67e54f?w=400&h=300&fit=crop",
      features: ["Çocuk Dostu Tasarım", "Spor Salonu", "Kütüphane"],
      location: "Bursa, Türkiye"
    },
    {
      title: "Lüks Otel Projesi",
      client: "Turizm Yatırımcısı",
      description: "5 yıldızlı lüks otel projesi. Modern konfor ve geleneksel mimarinin mükemmel uyumu.",
      metrics: { area: "15.000 m²", duration: "30 Ay", budget: "₺25M", satisfaction: "5/5" },
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      features: ["5 Yıldızlı Standart", "Spa Merkezi", "Restoran"],
      location: "Kapadokya, Nevşehir"
    }
  ];

  // Customer testimonials
  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      position: "CEO, Kale Group",
      content: "Türk Mimar ile çalışmak gerçekten profesyonel bir deneyimdi. Projemizi zamanında ve bütçe dahilinde tamamladılar. Kesinlikle tavsiye ederim.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ayşe Demir",
      position: "Proje Müdürü, Emlak Konut",
      content: "Sürdürülebilir tasarım anlayışları ve modern yaklaşımları ile beklentilerimizi aştılar. Gelecekteki projelerimizde de birlikte çalışmayı umuyoruz.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b780?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mehmet Kaya",
      position: "Genel Müdür, Tekfen Holding",
      content: "Kaliteli işçilik ve yaratıcı tasarım çözümleri ile projemizi hayata geçirdiler. Müşteri memnuniyeti odaklı yaklaşımları takdire şayan.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const achievements = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      number: "150+",
      label: "Tamamlanan Proje",
      description: "Başarıyla tamamlanan proje sayısı",
      color: "blue"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      number: "25+",
      label: "Ödül",
      description: "Ulusal ve uluslararası ödüller",
      color: "yellow"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      number: "₺500M+",
      label: "Proje Değeri",
      description: "Toplam proje değeri",
      color: "green"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      number: "500+",
      label: "Mutlu Müşteri",
      description: "Memnun müşteri sayısı",
      color: "purple"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Referanslarımız ve <span className="text-blue-600">Başarılarımız</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Güvenilir ortaklarımız ve başarıyla tamamladığımız projeler
          </p>
        </div>

        {/* Enhanced Client Logos */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Güvenilir <span className="text-blue-600">Ortaklarımız</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {clientLogos.map((client, index) => (
              <div key={index} className="group relative animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-gray-100 dark:border-gray-600">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-16 w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-110"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/200x100/1e40af/ffffff?text=${encodeURIComponent(client.name)}`;
                    }}
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                  {client.name}
                </div>
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.category}
                </div>
              </div>
            ))}
          </div>
          
          {/* Floating decoration elements */}
          <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
          <div className="absolute top-1/3 right-10 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Enhanced Success Stories */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Başarı <span className="text-blue-600">Hikayeleri</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {story.metrics.satisfaction}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {story.location}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{story.title}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{story.client}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{story.description}</p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {story.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 text-gray-500 mr-2" />
                      <div>
                        <div className="text-gray-500 dark:text-gray-400">Alan</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{story.metrics.area}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                      <div>
                        <div className="text-gray-500 dark:text-gray-400">Süre</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{story.metrics.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 text-gray-500 mr-2" />
                      <div>
                        <div className="text-gray-500 dark:text-gray-400">Bütçe</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{story.metrics.budget}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-gray-500 mr-2" />
                      <div>
                        <div className="text-gray-500 dark:text-gray-400">Memnuniyet</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{story.metrics.satisfaction}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Müşteri <span className="text-blue-600">Görüşleri</span>
          </h3>
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <Quote className="w-12 h-12 text-blue-600" />
              </div>
              
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-6">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonials[currentTestimonial].position}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial 
                          ? 'bg-blue-600' 
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Achievements */}
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Başarı <span className="text-blue-600">Metriklerimiz</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-blue-600 mb-2">{achievement.label}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Awards Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center group">
              <Award className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-2">Ödüller</h3>
              <p className="text-blue-100">Ulusal ve uluslararası ödüllerle tanınan kalitemiz</p>
            </div>
            <div className="text-center group">
              <Globe className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-2">Uluslararası</h3>
              <p className="text-blue-100">Dünya standartlarında hizmet kalitesi</p>
            </div>
            <div className="text-center group">
              <Star className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-2">Mükemmellik</h3>
              <p className="text-blue-100">Her projede mükemmellik hedefi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection; 