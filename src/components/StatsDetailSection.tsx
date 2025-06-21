import React, { useState, useEffect } from 'react';
import { TrendingUp, Building, Users, Award, Clock, DollarSign, MapPin, Star, CheckCircle, Globe, BarChart3, Target, Zap, Trophy } from 'lucide-react';

const StatsDetailSection: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState<{[key: string]: number}>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const targetValues = {
      totalProjects: 150,
      completedProjects: 142,
      ongoingProjects: 8,
      successRate: 94.7,
      totalCustomers: 500,
      satisfiedCustomers: 485,
      satisfactionRate: 97,
      repeatCustomers: 156,
      totalValue: 500,
      avgProjectValue: 3.3,
      yearlyGrowth: 25,
      profitability: 18,
      provinces: 32,
      activeRegions: 7,
      internationalProjects: 12,
      offices: 3
    };

    Object.entries(targetValues).forEach(([key, target]) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedValues(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 30);
    });
  };

  const detailedStats = [
    {
      category: "Proje Performansı",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-blue-500 to-blue-600",
      stats: [
        { label: "Toplam Proje", value: "150+", icon: <Building className="w-6 h-6" />, color: "text-blue-600", key: "totalProjects" },
        { label: "Tamamlanan", value: "142", icon: <CheckCircle className="w-6 h-6" />, color: "text-green-600", key: "completedProjects" },
        { label: "Devam Eden", value: "8", icon: <Clock className="w-6 h-6" />, color: "text-orange-600", key: "ongoingProjects" },
        { label: "Başarı Oranı", value: "%94.7", icon: <TrendingUp className="w-6 h-6" />, color: "text-purple-600", key: "successRate" }
      ]
    },
    {
      category: "Müşteri Memnuniyeti",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-500 to-green-600",
      stats: [
        { label: "Toplam Müşteri", value: "500+", icon: <Users className="w-6 h-6" />, color: "text-blue-600", key: "totalCustomers" },
        { label: "Memnun Müşteri", value: "485", icon: <Star className="w-6 h-6" />, color: "text-yellow-600", key: "satisfiedCustomers" },
        { label: "Memnuniyet Oranı", value: "%97", icon: <TrendingUp className="w-6 h-6" />, color: "text-green-600", key: "satisfactionRate" },
        { label: "Tekrar Müşteri", value: "156", icon: <Users className="w-6 h-6" />, color: "text-purple-600", key: "repeatCustomers" }
      ]
    },
    {
      category: "Finansal Performans",
      icon: <DollarSign className="w-8 h-8" />,
      gradient: "from-purple-500 to-purple-600",
      stats: [
        { label: "Toplam Proje Değeri", value: "₺500M+", icon: <DollarSign className="w-6 h-6" />, color: "text-green-600", key: "totalValue" },
        { label: "Ortalama Proje Değeri", value: "₺3.3M", icon: <TrendingUp className="w-6 h-6" />, color: "text-blue-600", key: "avgProjectValue" },
        { label: "Yıllık Büyüme", value: "%25", icon: <TrendingUp className="w-6 h-6" />, color: "text-green-600", key: "yearlyGrowth" },
        { label: "Karlılık Oranı", value: "%18", icon: <DollarSign className="w-6 h-6" />, color: "text-purple-600", key: "profitability" }
      ]
    },
    {
      category: "Coğrafi Dağılım",
      icon: <MapPin className="w-8 h-8" />,
      gradient: "from-orange-500 to-orange-600",
      stats: [
        { label: "Hizmet Verilen İl", value: "32", icon: <MapPin className="w-6 h-6" />, color: "text-blue-600", key: "provinces" },
        { label: "Aktif Bölge", value: "7", icon: <MapPin className="w-6 h-6" />, color: "text-green-600", key: "activeRegions" },
        { label: "Uluslararası Proje", value: "12", icon: <Globe className="w-6 h-6" />, color: "text-purple-600", key: "internationalProjects" },
        { label: "Ofis Sayısı", value: "3", icon: <Building className="w-6 h-6" />, color: "text-orange-600", key: "offices" }
      ]
    }
  ];

  const performanceMetrics = [
    {
      title: "Proje Tamamlama Süresi",
      current: 85,
      target: 90,
      unit: "gün",
      trend: "up",
      icon: <Clock className="w-8 h-8" />,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Müşteri Memnuniyeti",
      current: 97,
      target: 95,
      unit: "%",
      trend: "up",
      icon: <Star className="w-8 h-8" />,
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Bütçe Uyumu",
      current: 92,
      target: 90,
      unit: "%",
      trend: "up",
      icon: <DollarSign className="w-8 h-8" />,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Kalite Skoru",
      current: 96,
      target: 95,
      unit: "%",
      trend: "up",
      icon: <Award className="w-8 h-8" />,
      gradient: "from-purple-500 to-purple-600"
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
    <section id="stats-section" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating numbers */}
        <div className="absolute top-20 left-10 text-6xl font-bold text-blue-400/10 animate-float">150+</div>
        <div className="absolute top-40 right-20 text-4xl font-bold text-purple-400/10 animate-float" style={{animationDelay: '1s'}}>500+</div>
        <div className="absolute bottom-20 left-1/4 text-5xl font-bold text-green-400/10 animate-float" style={{animationDelay: '2s'}}>97%</div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/6 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Animated badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6 animate-fade-in">
            <BarChart3 className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Performans Metrikleri</span>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Detaylı <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">İstatistikler</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            12 yıllık deneyimimizin sayılarla özeti ve performans metriklerimiz
          </p>
        </div>

        {/* Enhanced Detailed Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {detailedStats.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in"
              style={{animationDelay: `${0.6 + categoryIndex * 0.1}s`}}
            >
              {/* Category header with gradient */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="flex items-center justify-between group/item">
                    <div className="flex items-center">
                      <div className={`${stat.color} mr-3 group-hover/item:scale-110 transition-transform duration-300`}>
                        {stat.icon}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white text-lg">
                      {stat.key && animatedValues[stat.key] !== undefined 
                        ? stat.value.includes('₺') 
                          ? `₺${animatedValues[stat.key]}M+`
                          : stat.value.includes('%')
                            ? `%${animatedValues[stat.key]}`
                            : `${animatedValues[stat.key]}+`
                        : stat.value
                      }
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Performance Metrics */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white mb-16 shadow-2xl animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="text-center mb-8">
            <Target className="w-12 h-12 mx-auto mb-4 text-blue-200" />
            <h3 className="text-3xl font-bold">Performans Metrikleri</h3>
            <p className="text-blue-100 mt-2">Hedeflerimizi aşan başarılarımız</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="group text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${metric.gradient} rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                  <div className="text-white">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">{metric.current}{metric.unit}</div>
                <div className="text-blue-100 mb-2 text-sm">{metric.title}</div>
                <div className="flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 mr-1 text-green-300" />
                  <span className="text-sm text-blue-200">Hedef: {metric.target}{metric.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Yearly Growth Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl mb-16 animate-fade-in" style={{animationDelay: '1.2s'}}>
          <div className="text-center mb-8">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Yıllık <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Büyüme</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                Proje Sayısı
              </h4>
              <div className="space-y-3">
                {yearlyGrowth.map((year, index) => (
                  <div key={index} className="group flex items-center">
                    <span className="w-16 text-sm text-gray-600 dark:text-gray-400">{year.year}</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3 mx-4 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 transform origin-left group-hover:scale-y-110"
                        style={{ width: `${(year.projects / 60) * 100}%` }}
                      ></div>
                    </div>
                    <span className="w-12 text-sm font-semibold text-gray-900 dark:text-white">{year.projects}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                Gelir (Milyon ₺)
              </h4>
              <div className="space-y-3">
                {yearlyGrowth.map((year, index) => (
                  <div key={index} className="group flex items-center">
                    <span className="w-16 text-sm text-gray-600 dark:text-gray-400">{year.year}</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3 mx-4 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000 transform origin-left group-hover:scale-y-110"
                        style={{ width: `${(year.revenue / 80) * 100}%` }}
                      ></div>
                    </div>
                    <span className="w-12 text-sm font-semibold text-gray-900 dark:text-white">{year.revenue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Key Achievements */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in" style={{animationDelay: '1.4s'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">25+ Ödül</h4>
            <p className="text-gray-600 dark:text-gray-300">Ulusal ve uluslararası mimarlık ödülleri</p>
          </div>
          
          <div className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in" style={{animationDelay: '1.6s'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">15+ Uzman</h4>
            <p className="text-gray-600 dark:text-gray-300">Deneyimli mimar ve mühendis kadrosu</p>
          </div>
          
          <div className="group bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in" style={{animationDelay: '1.8s'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">3 Ofis</h4>
            <p className="text-gray-600 dark:text-gray-300">İstanbul, Ankara ve İzmir'de ofisler</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsDetailSection; 