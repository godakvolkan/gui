import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Building, Home, Palette } from 'lucide-react';

// Section Components
import ReferencesSection from './ReferencesSection';
import ServicesPage from './ServicesPage';
import ValueSection from './ValueSection';
import ProcessSection from './ProcessSection';
import TeamSection from './TeamSection';
import StatsDetailSection from './StatsDetailSection';
import SocialMediaSection from './SocialMediaSection';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300 overflow-hidden">
      {/* Enhanced Hero Section with Animated Background */}
      <header className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800 dark:from-gray-800 dark:via-blue-800 dark:to-gray-700 text-white text-center py-32 px-4 transition-colors duration-300 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Buildings */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-lg animate-pulse"></div>
          <div className="absolute top-40 right-20 w-12 h-20 bg-white/10 rounded-lg animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-12 bg-white/10 rounded-lg animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Floating Icons */}
          <div className="absolute top-1/4 left-1/4 animate-bounce" style={{animationDelay: '0.5s'}}>
            <Building className="w-8 h-8 text-blue-400 opacity-30" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-bounce" style={{animationDelay: '1.5s'}}>
            <Home className="w-8 h-8 text-blue-400 opacity-30" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-bounce" style={{animationDelay: '2.5s'}}>
            <Palette className="w-8 h-8 text-blue-400 opacity-30" />
          </div>
          
          {/* Floating Particles */}
          <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-40"></div>
          <div className="absolute top-1/3 right-1/6 w-3 h-3 bg-purple-400 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-float opacity-40" style={{animationDelay: '3s'}}></div>
          
          {/* Animated Lines */}
          <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-purple-400 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Animated Badge */}
            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Türkiye'nin En İyi Mimarlık Firması 2024</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
              Modern Mimarinin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Öncüsü</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 animate-fade-in" style={{animationDelay: '0.4s'}}>
              Hayallerinizdeki mekanları, estetik ve fonksiyonellikle buluşturuyoruz. 
              <span className="block text-blue-300 mt-2">Geleceğin mimarisini bugün tasarlıyoruz.</span>
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Link 
                to="/projeler"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                Projelerimizi Keşfedin
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Tanıtım Videosu
              </button>
            </div>
            
            {/* Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">150+</div>
                <div className="text-sm text-gray-300">Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">25+</div>
                <div className="text-sm text-gray-300">Ödül</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">500+</div>
                <div className="text-sm text-gray-300">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">15+</div>
                <div className="text-sm text-gray-300">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </header>
      
      {/* Services Section */}
      <ServicesPage />
      <div className="text-center my-12">
        <Link 
          to="/hizmetler"
          className="group bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-700 dark:to-gray-600 text-white font-bold py-4 px-8 rounded-full hover:from-gray-700 hover:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center mx-auto w-fit"
        >
          Tüm Hizmetlerimizi Görün
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Other Sections */}
      <ValueSection />
      <StatsDetailSection />
      <ReferencesSection />
      <ProcessSection />
      <div className="text-center my-12">
        <Link 
          to="/surec"
          className="group bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-700 dark:to-gray-600 text-white font-bold py-4 px-8 rounded-full hover:from-gray-700 hover:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center mx-auto w-fit"
        >
          Detaylı Proje Sürecimiz
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
      <TeamSection />
      <SocialMediaSection />
    </div>
  );
};

export default HomePage; 