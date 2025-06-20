import React, { useState } from 'react';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';

type PageType = 'ana-sayfa' | 'hakkimizda' | 'projeler' | 'hizmetler' | 'iletisim' | 'sertifikalar' | 'surec' | 'fiyatlandirma' | 'sss' | 'wedding-discount';

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
}) => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navigationItems = [
    { id: 'ana-sayfa', label: 'Ana Sayfa' },
    { id: 'hakkimizda', label: 'Hakkımızda' },
    { id: 'projeler', label: 'Projeler' },
    { id: 'iletisim', label: 'İletişim' }
  ];

  const servicesItems = [
    { id: 'hizmetler', label: 'Hizmetlerimiz' },
    { id: 'surec', label: 'Proje Süreci' },
    { id: 'fiyatlandirma', label: 'Fiyatlandırma' },
    { id: 'sertifikalar', label: 'Sertifikalar' },
    { id: 'sss', label: 'S.S.S' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const handlePageChange = (page: string) => {
    navigateToPage(page as PageType);
    closeMenu();
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => handlePageChange('ana-sayfa')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            MIMAR STUDIO
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id as PageType)}
                className={`transition-colors font-medium ${
                  currentPage === item.id 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className={`flex items-center transition-colors font-medium ${
                  servicesItems.some(item => currentPage === item.id)
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Hizmetler
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {servicesItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        handlePageChange(item.id as PageType);
                        toggleServices();
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        currentPage === item.id 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Special Wedding Discount Button */}
            <button
              onClick={() => handlePageChange('wedding-discount')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${
                currentPage === 'wedding-discount'
                  ? 'text-white bg-gradient-to-r from-pink-600 to-purple-600 shadow-lg'
                  : 'text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-md hover:shadow-lg transform hover:scale-105'
              }`}
            >
              <Heart className="w-4 h-4 mr-2" />
              Yeni Evlilere %25 İndirim
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id as PageType)}
                className="block px-3 py-2 text-gray-700 w-full text-left hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Services Section */}
            <div className="border-t pt-2 mt-2">
              <div className="px-3 py-2 text-sm font-medium text-gray-500">Hizmetler</div>
              {servicesItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id as PageType)}
                  className="block px-6 py-2 text-gray-700 w-full text-left hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Special Wedding Discount Button for Mobile */}
            <button
              onClick={() => handlePageChange('wedding-discount')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center ${
                currentPage === 'wedding-discount'
                  ? 'text-white bg-gradient-to-r from-pink-600 to-purple-600'
                  : 'text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'
              }`}
            >
              <Heart className="w-4 h-4 mr-2" />
              Yeni Evlilere %25 İndirim
            </button>
          </div>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {isServicesDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={toggleServices}
        />
      )}
    </nav>
  );
};

export default Navigation;