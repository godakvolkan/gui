import React from 'react';
import { Building, Users, Award, CheckCircle, Sparkles, Target, Heart, Zap } from 'lucide-react';

const ValueSection: React.FC = () => {
  const values = [
    {
      icon: <Building className="w-16 h-16" />,
      title: "Kalite",
      description: "En yüksek kalite standartlarında projeler üretiyoruz.",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      darkBgGradient: "from-blue-900/20 to-blue-800/20"
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "Güven",
      description: "Müşterilerimizle uzun vadeli güven ilişkisi kuruyoruz.",
      color: "green",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      darkBgGradient: "from-green-900/20 to-green-800/20"
    },
    {
      icon: <Award className="w-16 h-16" />,
      title: "Yenilik",
      description: "Modern teknoloji ve yaratıcı çözümler sunuyoruz.",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      darkBgGradient: "from-purple-900/20 to-purple-800/20"
    },
    {
      icon: <CheckCircle className="w-16 h-16" />,
      title: "Sürdürülebilirlik",
      description: "Çevre dostu ve sürdürülebilir tasarımlar önceliyoruz.",
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      darkBgGradient: "from-emerald-900/20 to-emerald-800/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-yellow-400/10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Animated badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Temel Değerlerimiz</span>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Değerlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Başarılı projelerin temelinde yatan değerlerimiz ve ilkelerimiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`group relative bg-gradient-to-br ${value.bgGradient} dark:${value.darkBgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in`}
              style={{animationDelay: `${0.6 + index * 0.1}s`}}
            >
              {/* Floating icon background */}
              <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Main icon */}
              <div className={`relative z-10 text-center mb-6`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Floating particles */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 animate-pulse"></div>
              <div className="absolute bottom-2 right-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          ))}
        </div>
        
        {/* Bottom decoration */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="inline-flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-full px-8 py-4 shadow-lg">
            <Target className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">Hedefimiz: Mükemmellik</span>
            <Heart className="w-6 h-6 text-red-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;