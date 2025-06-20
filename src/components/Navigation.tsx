import React from 'react';
import { Menu, X } from 'lucide-react';

type PageType = 'ana-sayfa' | 'hakkimizda' | 'projeler' | 'hizmetler' | 'iletisim';

interface NavigationProps {
  currentPage: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  navigateToPage: (page: PageType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentPage, 
  isMenuOpen, 
  setIsMenuOpen, 
  navigateToPage
}) => (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => navigateToPage('ana-sayfa')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            MIMAR STUDIO
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'ana-sayfa', label: 'Ana Sayfa' },
              { id: 'hakkimizda', label: 'Hakkımızda' },
              { id: 'projeler', label: 'Projeler' },
              { id: 'hizmetler', label: 'Hizmetler' },
              { id: 'iletisim', label: 'İletişim' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToPage(item.id as PageType)}
                className={`transition-colors font-medium ${
                  currentPage === item.id 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { id: 'ana-sayfa', label: 'Ana Sayfa' },
              { id: 'hakkimizda', label: 'Hakkımızda' },
              { id: 'projeler', label: 'Projeler' },
              { id: 'hizmetler', label: 'Hizmetler' },
              { id: 'iletisim', label: 'İletişim' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToPage(item.id as PageType)}
                className="block px-3 py-2 text-gray-700 w-full text-left hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

export default Navigation;