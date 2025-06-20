import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

type PageType = 'ana-sayfa' | 'hakkimizda' | 'projeler' | 'hizmetler' | 'iletisim';

interface FooterProps {
  navigateToPage: (page: PageType) => void;
  openWhatsApp: () => void;
}

const Footer: React.FC<FooterProps> = ({ navigateToPage, openWhatsApp }) => (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              MIMAR STUDIO
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Modern mimari çözümler ile hayallerinizi gerçeğe dönüştürüyoruz. 
              12 yıllık deneyimimiz ile güvenilir ve kaliteli hizmet sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Phone className="w-5 h-5" />
              </button>
              <button className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
              <button 
                onClick={openWhatsApp}
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              {['Ana Sayfa', 'Hakkımızda', 'Projeler', 'Hizmetler', 'İletişim'].map((item, index) => {
                const pageMap: { [key: string]: PageType } = {
                  'Ana Sayfa': 'ana-sayfa',
                  'Hakkımızda': 'hakkimizda',
                  'Projeler': 'projeler',
                  'Hizmetler': 'hizmetler',
                  'İletişim': 'iletisim'
                };
                return (
                  <li key={index}>
                    <button 
                      onClick={() => navigateToPage(pageMap[item])}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-3 text-gray-400">
              <div>+90 (555) 123 45 67</div>
              <div>info@mimarstudio.com</div>
              <div>Çankaya, Ankara</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Mimar Studio. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );

export default Footer;