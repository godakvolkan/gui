import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Award, Clock, DollarSign, HelpCircle, FileText, Settings } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeLinkStyle = "text-yellow-400";
  const baseLinkStyle = "text-white hover:text-yellow-400 transition-colors duration-300";

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? activeLinkStyle : baseLinkStyle;

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Dropdown menu items with icons
  const dropdownItems = [
    {
      path: '/sertifikalar',
      label: 'Sertifikalar',
      icon: <Award className="w-4 h-4" />,
      description: 'Kalite belgelerimiz'
    },
    {
      path: '/surec',
      label: 'Proje Süreci',
      icon: <Clock className="w-4 h-4" />,
      description: 'Çalışma adımlarımız'
    },
    {
      path: '/fiyatlandirma',
      label: 'Fiyatlandırma',
      icon: <DollarSign className="w-4 h-4" />,
      description: 'Hizmet ücretlerimiz'
    },
    {
      path: '/sss',
      label: 'S.S.S.',
      icon: <HelpCircle className="w-4 h-4" />,
      description: 'Sık sorulan sorular'
    }
  ];

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    // Set a 3-second timeout before closing the dropdown
    timeoutRef.current = setTimeout(() => {
      setIsSubMenuOpen(false);
    }, 3000);
  };

  const handleDropdownMouseEnter = () => {
    // Clear timeout when mouse enters dropdown
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    // Set timeout when mouse leaves dropdown
    timeoutRef.current = setTimeout(() => {
      setIsSubMenuOpen(false);
    }, 3000);
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-4 sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-white" onClick={closeMenus}>
          Türk Mimar
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={getNavLinkClass} onClick={closeMenus}>Ana Sayfa</NavLink>
          <NavLink to="/hakkimizda" className={getNavLinkClass} onClick={closeMenus}>Hakkımızda</NavLink>
          <NavLink to="/projeler" className={getNavLinkClass} onClick={closeMenus}>Projeler</NavLink>
          <NavLink to="/hizmetler" className={getNavLinkClass} onClick={closeMenus}>Hizmetler</NavLink>
          
          {/* Enhanced Dropdown Menu with Timer */}
          <div 
            className="relative" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${baseLinkStyle} flex items-center group`}
            >
              <Settings className="w-4 h-4 mr-1 group-hover:rotate-90 transition-transform duration-300" />
              Diğer 
              <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            {isSubMenuOpen && (
              <div 
                className="absolute right-0 mt-3 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl py-2 border border-gray-200 dark:border-gray-700 transition-all duration-300 transform opacity-100 scale-100"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Ek Hizmetler</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Detaylı bilgiler için tıklayın</p>
                </div>
                
                {dropdownItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
                    onClick={closeMenus}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors duration-200">
                      {item.icon}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {item.label}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {item.description}
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200 transform group-hover:translate-x-1" />
                  </NavLink>
                ))}
                
                <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-b-xl">
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    Tüm hizmetlerimizi keşfedin
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/iletisim" className={getNavLinkClass} onClick={closeMenus}>İletişim</NavLink>
          <NavLink to="/yeni-evli-indirimi" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors flex items-center" onClick={closeMenus}>
            <FileText className="w-4 h-4 mr-1" />
            Düğün İndirimi
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-700 dark:bg-gray-800 rounded-lg shadow-lg border border-gray-600 dark:border-gray-700">
          <div className="px-4 py-3 border-b border-gray-600 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-white">Ana Menü</h3>
          </div>
          
          <div className="py-2">
            <NavLink to="/" className="flex items-center px-4 py-3 text-sm text-white hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-200" onClick={closeMenus}>
              <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xs font-bold">A</span>
              </div>
              Ana Sayfa
            </NavLink>
            
            <NavLink to="/hakkimizda" className="flex items-center px-4 py-3 text-sm text-white hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-200" onClick={closeMenus}>
              <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xs font-bold">H</span>
              </div>
              Hakkımızda
            </NavLink>
            
            <NavLink to="/projeler" className="flex items-center px-4 py-3 text-sm text-white hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-200" onClick={closeMenus}>
              <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xs font-bold">P</span>
              </div>
              Projeler
            </NavLink>
            
            <NavLink to="/hizmetler" className="flex items-center px-4 py-3 text-sm text-white hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-200" onClick={closeMenus}>
              <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xs font-bold">H</span>
              </div>
              Hizmetler
            </NavLink>
          </div>
          
          <div className="px-4 py-3 border-t border-gray-600 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-white mb-2">Ek Hizmetler</h3>
            <div className="space-y-1">
              {dropdownItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700 hover:text-white transition-colors duration-200 rounded-md"
                  onClick={closeMenus}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
          
          <div className="px-4 py-3 border-t border-gray-600 dark:border-gray-700">
            <NavLink to="/iletisim" className="flex items-center px-4 py-3 text-sm text-white hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-200" onClick={closeMenus}>
              <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xs font-bold">İ</span>
              </div>
              İletişim
            </NavLink>
            
            <NavLink to="/yeni-evli-indirimi" className="flex items-center justify-center mt-3 bg-yellow-400 text-gray-900 px-4 py-3 rounded-md hover:bg-yellow-500 transition-colors font-semibold" onClick={closeMenus}>
              <FileText className="w-4 h-4 mr-2" />
              Düğün İndirimi
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;