import React from 'react';
import { CheckCircle, ArrowRight, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  const navigateToPage = (page: string) => {
    // This would typically navigate to a different page
    // For now, we'll just scroll to the contact section
    const element = document.getElementById('iletisim');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16">
      {/* About Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Hakkımızda</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              2012 yılından bu yana modern mimari çözümler sunuyoruz
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                12 Yıllık Deneyim ile 
                <span className="text-blue-600"> Güvenilir Çözümler</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                2012 yılından bu yana Türkiye'nin dört bir yanında konut, ticari ve kamu projeleri gerçekleştiriyoruz. 
                Modern tasarım anlayışı ile geleneksel değerleri harmanlayarak, yaşam kalitesini artıran mekanlar yaratıyoruz.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Müşteri memnuniyetini ön planda tutarak, projelerinizi başlangıçtan bitişe kadar titizlikle yönetiyoruz. 
                Sürdürülebilir tasarım ilkeleri ve yenilikçi çözümlerle sektörde öncü konumdayız.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Licenskli Mimarlar</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Zamanında Teslimat</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Kaliteli İşçilik</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Şeffaf Fiyatlandırma</span>
                </div>
              </div>

              <button 
                onClick={() => navigateToPage('iletisim')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
              >
                Hemen İletişime Geçin
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=800&fit=crop" 
                alt="Mimari Tasarım" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-yellow-500 mr-3" />
                  <div>
                    <div className="font-bold text-gray-900">Altın Ödül</div>
                    <div className="text-sm text-gray-600">Mimarlık Birliği 2023</div>
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

export default AboutPage;