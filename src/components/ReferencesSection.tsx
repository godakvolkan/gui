import React from 'react';
import { Building, Star, Award, TrendingUp, Users, Globe } from 'lucide-react';

const ReferencesSection: React.FC = () => {
  const clientLogos = [
    "https://via.placeholder.com/150x80/2563eb/ffffff?text=ABC+Şirketi",
    "https://via.placeholder.com/150x80/059669/ffffff?text=XYZ+Group",
    "https://via.placeholder.com/150x80/dc2626/ffffff?text=DEF+Corp",
    "https://via.placeholder.com/150x80/7c3aed/ffffff?text=GHI+Ltd",
    "https://via.placeholder.com/150x80/ea580c/ffffff?text=JKL+Inc",
    "https://via.placeholder.com/150x80/be185d/ffffff?text=MNO+Co"
  ];

  const successStories = [
    {
      title: "Bodrum Villa Projesi",
      client: "Özel Müşteri",
      description: "450m² lüks villa projesi, 6 ayda tamamlandı. Modern tasarım ve doğal malzemeler kullanıldı.",
      metrics: {
        area: "450 m²",
        duration: "6 Ay",
        budget: "₺2.5M",
        satisfaction: "5/5"
      },
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
    },
    {
      title: "Teknokent Ofis Kompleksi",
      client: "ABC Teknoloji",
      description: "12.000m² modern ofis kompleksi, 500 çalışan kapasiteli. Sürdürülebilir tasarım ve akıllı sistemler.",
      metrics: {
        area: "12.000 m²",
        duration: "18 Ay",
        budget: "₺45M",
        satisfaction: "5/5"
      },
      image: "https://images.unsplash.com/photo-1565792715-8f7c5dee2c53?w=400&h=300&fit=crop"
    },
    {
      title: "Kültür Merkezi",
      client: "Belediye",
      description: "8.500m² kültür merkezi, modern performans salonları ve sergi alanları ile donatıldı.",
      metrics: {
        area: "8.500 m²",
        duration: "24 Ay",
        budget: "₺35M",
        satisfaction: "5/5"
      },
      image: "https://images.unsplash.com/photo-1570896756434-23d7f02d6b4c?w=400&h=300&fit=crop"
    }
  ];

  const achievements = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      number: "150+",
      label: "Tamamlanan Proje",
      description: "Başarıyla tamamlanan proje sayısı"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      number: "25+",
      label: "Ödül",
      description: "Ulusal ve uluslararası ödüller"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      number: "₺500M+",
      label: "Proje Değeri",
      description: "Toplam proje değeri"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      number: "500+",
      label: "Mutlu Müşteri",
      description: "Memnun müşteri sayısı"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Referanslarımız ve <span className="text-blue-600">Başarılarımız</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Güvenilir ortaklarımız ve başarıyla tamamladığımız projeler
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Güvenilir <span className="text-blue-600">Ortaklarımız</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={logo} 
                  alt={`Client ${index + 1}`}
                  className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Başarı <span className="text-blue-600">Hikayeleri</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {story.metrics.satisfaction}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h4>
                  <p className="text-blue-600 font-medium mb-3">{story.client}</p>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Alan:</span>
                      <div className="font-semibold text-gray-900">{story.metrics.area}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Süre:</span>
                      <div className="font-semibold text-gray-900">{story.metrics.duration}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Bütçe:</span>
                      <div className="font-semibold text-gray-900">{story.metrics.budget}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Memnuniyet:</span>
                      <div className="font-semibold text-gray-900">{story.metrics.satisfaction}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Başarı <span className="text-blue-600">Metriklerimiz</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-blue-600 mb-2">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Ödüller</h3>
              <p className="text-blue-100">Ulusal ve uluslararası ödüllerle tanınan kalitemiz</p>
            </div>
            <div className="text-center">
              <Globe className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Uluslararası</h3>
              <p className="text-blue-100">Dünya standartlarında hizmet kalitesi</p>
            </div>
            <div className="text-center">
              <Star className="w-16 h-16 mx-auto mb-4" />
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