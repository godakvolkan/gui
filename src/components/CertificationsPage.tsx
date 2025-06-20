import React from 'react';
import { Award, Shield, CheckCircle, Star, FileText, Users, Building, Globe } from 'lucide-react';

const CertificationsPage: React.FC = () => {
  const certifications = [
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "ISO 9001:2015",
      description: "Kalite Yönetim Sistemi",
      year: "2023",
      status: "Aktif",
      details: "Müşteri memnuniyetini artırmak ve sürekli iyileştirme sağlamak için kalite yönetim sistemi uyguluyoruz."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "ISO 14001:2015",
      description: "Çevre Yönetim Sistemi",
      year: "2023",
      status: "Aktif",
      details: "Çevreye duyarlı tasarım ve sürdürülebilir mimari çözümler için çevre yönetim sistemi uyguluyoruz."
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-600" />,
      title: "TMMOB Üyeliği",
      description: "Türk Mühendis ve Mimar Odaları Birliği",
      year: "2012",
      status: "Aktif",
      details: "Mesleki standartları korumak ve geliştirmek için TMMOB üyesi olarak çalışıyoruz."
    },
    {
      icon: <Star className="w-12 h-12 text-purple-600" />,
      title: "Mimarlık Lisansı",
      description: "Türkiye Cumhuriyeti Lisansı",
      year: "2012",
      status: "Aktif",
      details: "Resmi mimarlık lisansı ile yasal yetkiye sahip olarak hizmet veriyoruz."
    },
    {
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: "Mimarlar Odası",
      description: "İstanbul Mimarlar Odası Üyeliği",
      year: "2012",
      status: "Aktif",
      details: "Mesleki etik kurallara uygun olarak İstanbul Mimarlar Odası üyesiyiz."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-indigo-600" />,
      title: "İSG Belgesi",
      description: "İş Sağlığı ve Güvenliği",
      year: "2023",
      status: "Aktif",
      details: "Çalışanlarımızın ve müşterilerimizin güvenliği için İSG standartlarını uyguluyoruz."
    }
  ];

  const achievements = [
    {
      icon: <Building className="w-16 h-16 text-blue-600" />,
      title: "12+ Yıllık Deneyim",
      description: "Sektörde 12 yılı aşkın deneyimimizle güvenilir çözümler sunuyoruz."
    },
    {
      icon: <Award className="w-16 h-16 text-yellow-600" />,
      title: "25+ Ödül",
      description: "Ulusal ve uluslararası mimarlık ödülleri ile tanınan kalitemiz."
    },
    {
      icon: <Globe className="w-16 h-16 text-green-600" />,
      title: "Uluslararası Standartlar",
      description: "Dünya standartlarında hizmet kalitesi ve profesyonellik."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Sertifikalar ve <span className="text-yellow-400">Beldelendirmeler</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Profesyonel standartlarımızı ve kalite güvencemizi gösteren belgelerimiz ile 
            müşterilerimize güvenilir hizmet sunuyoruz.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Aktif <span className="text-blue-600">Sertifikalarımız</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kalite, çevre ve güvenlik standartlarımızı gösteren belgelerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50">
                <div className="flex items-center justify-between mb-6">
                  {cert.icon}
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                    {cert.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <p className="text-sm text-gray-500 mb-4">{cert.details}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Alınma Tarihi: {cert.year}</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Başarılarımız ve <span className="text-blue-600">Deneyimimiz</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">{achievement.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">12+</div>
                <div className="text-blue-100">Yıllık Deneyim</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">6</div>
                <div className="text-blue-100">Aktif Sertifika</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">%100</div>
                <div className="text-blue-100">Uyumluluk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Kalite <span className="text-blue-600">Taahhüdümüz</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tüm projelerimizde en yüksek kalite standartlarını garanti ediyoruz. 
                Sertifikalarımız sadece belge değil, müşterilerimize verdiğimiz sözün 
                somut kanıtıdır.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Uluslararası kalite standartları</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Sürekli iyileştirme süreçleri</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Çevreye duyarlı tasarım</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Güvenlik önceliği</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" 
                alt="Kalite Standartları" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-yellow-500 mr-3" />
                  <div>
                    <div className="font-bold text-gray-900">ISO Sertifikalı</div>
                    <div className="text-sm text-gray-600">Kalite Garantisi</div>
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

export default CertificationsPage; 