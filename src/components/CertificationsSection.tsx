import React from 'react';
import { Award, Shield, CheckCircle, Star, FileText, Users } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "ISO 9001:2015",
      description: "Kalite Yönetim Sistemi",
      year: "2023",
      status: "Aktif"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "ISO 14001:2015",
      description: "Çevre Yönetim Sistemi",
      year: "2023",
      status: "Aktif"
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-600" />,
      title: "TMMOB Üyeliği",
      description: "Türk Mühendis ve Mimar Odaları Birliği",
      year: "2012",
      status: "Aktif"
    },
    {
      icon: <Star className="w-12 h-12 text-purple-600" />,
      title: "Mimarlık Lisansı",
      description: "Türkiye Cumhuriyeti Lisansı",
      year: "2012",
      status: "Aktif"
    },
    {
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: "Mimarlar Odası",
      description: "İstanbul Mimarlar Odası Üyeliği",
      year: "2012",
      status: "Aktif"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-indigo-600" />,
      title: "İSG Belgesi",
      description: "İş Sağlığı ve Güvenliği",
      year: "2023",
      status: "Aktif"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sertifikalar ve <span className="text-blue-600">Beldelendirmeler</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesyonel standartlarımızı ve kalite güvencemizi gösteren belgelerimiz
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
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Alınma Tarihi: {cert.year}</span>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-gray-600">Yıllık Deneyim</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">6</div>
              <div className="text-gray-600">Aktif Sertifika</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">%100</div>
              <div className="text-gray-600">Uyumluluk</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection; 