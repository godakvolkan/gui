import React from 'react';
import { TrendingUp, Building, Users, Award, Clock, DollarSign, MapPin, Star, CheckCircle, Globe } from 'lucide-react';

const StatsDetailSection: React.FC = () => {
  const detailedStats = [
    {
      category: "Proje Performansı",
      stats: [
        { label: "Toplam Proje", value: "150+", icon: <Building className="w-6 h-6" />, color: "text-blue-600" },
        { label: "Tamamlanan", value: "142", icon: <CheckCircle className="w-6 h-6" />, color: "text-green-600" },
        { label: "Devam Eden", value: "8", icon: <Clock className="w-6 h-6" />, color: "text-orange-600" },
        { label: "Başarı Oranı", value: "%94.7", icon: <TrendingUp className="w-6 h-6" />, color: "text-purple-600" }
      ]
    },
    {
      category: "Müşteri Memnuniyeti",
      stats: [
        { label: "Toplam Müşteri", value: "500+", icon: <Users className="w-6 h-6" />, color: "text-blue-600" },
        { label: "Memnun Müşteri", value: "485", icon: <Star className="w-6 h-6" />, color: "text-yellow-600" },
        { label: "Memnuniyet Oranı", value: "%97", icon: <TrendingUp className="w-6 h-6" />, color: "text-green-600" },
        { label: "Tekrar Müşteri", value: "156", icon: <Users className="w-6 h-6" />, color: "text-purple-600" }
      ]
    },
    {
      category: "Finansal Performans",
      stats: [
        { label: "Toplam Proje Değeri", value: "₺500M+", icon: <DollarSign className="w-6 h-6" />, color: "text-green-600" },
        { label: "Ortalama Proje Değeri", value: "₺3.3M", icon: <TrendingUp className="w-6 h-6" />, color: "text-blue-600" },
        { label: "Yıllık Büyüme", value: "%25", icon: <TrendingUp className="w-6 h-6" />, color: "text-green-600" },
        { label: "Karlılık Oranı", value: "%18", icon: <DollarSign className="w-6 h-6" />, color: "text-purple-600" }
      ]
    },
    {
      category: "Coğrafi Dağılım",
      stats: [
        { label: "Hizmet Verilen İl", value: "32", icon: <MapPin className="w-6 h-6" />, color: "text-blue-600" },
        { label: "Aktif Bölge", value: "7", icon: <MapPin className="w-6 h-6" />, color: "text-green-600" },
        { label: "Uluslararası Proje", value: "12", icon: <Globe className="w-6 h-6" />, color: "text-purple-600" },
        { label: "Ofis Sayısı", value: "3", icon: <Building className="w-6 h-6" />, color: "text-orange-600" }
      ]
    }
  ];

  const performanceMetrics = [
    {
      title: "Proje Tamamlama Süresi",
      current: 85,
      target: 90,
      unit: "gün",
      trend: "up"
    },
    {
      title: "Müşteri Memnuniyeti",
      current: 97,
      target: 95,
      unit: "%",
      trend: "up"
    },
    {
      title: "Bütçe Uyumu",
      current: 92,
      target: 90,
      unit: "%",
      trend: "up"
    },
    {
      title: "Kalite Skoru",
      current: 96,
      target: 95,
      unit: "%",
      trend: "up"
    }
  ];

  const yearlyGrowth = [
    { year: "2019", projects: 12, revenue: 15 },
    { year: "2020", projects: 18, revenue: 22 },
    { year: "2021", projects: 25, revenue: 35 },
    { year: "2022", projects: 32, revenue: 48 },
    { year: "2023", projects: 45, revenue: 65 },
    { year: "2024", projects: 52, revenue: 78 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Detaylı <span className="text-blue-600">İstatistikler</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            12 yıllık deneyimimizin sayılarla özeti ve performans metriklerimiz
          </p>
        </div>

        {/* Detailed Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {detailedStats.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`${stat.color} mr-3`}>{stat.icon}</div>
                      <span className="text-sm text-gray-600">{stat.label}</span>
                    </div>
                    <span className="font-bold text-gray-900">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Performans Metrikleri</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{metric.current}{metric.unit}</div>
                <div className="text-blue-100 mb-2">{metric.title}</div>
                <div className="flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm">Hedef: {metric.target}{metric.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Yearly Growth Chart */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Yıllık <span className="text-blue-600">Büyüme</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Proje Sayısı</h4>
              <div className="space-y-3">
                {yearlyGrowth.map((year, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-16 text-sm text-gray-600">{year.year}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 mx-4">
                      <div 
                        className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${(year.projects / 60) * 100}%` }}
                      ></div>
                    </div>
                    <span className="w-12 text-sm font-semibold text-gray-900">{year.projects}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Gelir (Milyon ₺)</h4>
              <div className="space-y-3">
                {yearlyGrowth.map((year, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-16 text-sm text-gray-600">{year.year}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 mx-4">
                      <div 
                        className="bg-green-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${(year.revenue / 80) * 100}%` }}
                      ></div>
                    </div>
                    <span className="w-12 text-sm font-semibold text-gray-900">{year.revenue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">25+ Ödül</h4>
            <p className="text-gray-600">Ulusal ve uluslararası mimarlık ödülleri</p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">15+ Uzman</h4>
            <p className="text-gray-600">Deneyimli mimar ve mühendis kadrosu</p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <Building className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">3 Ofis</h4>
            <p className="text-gray-600">İstanbul, Ankara ve İzmir'de ofisler</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsDetailSection; 