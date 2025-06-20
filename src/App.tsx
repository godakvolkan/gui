import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/About';
import ProjectsPage from './components/ProjectsPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

type PageType = 'ana-sayfa' | 'hakkimizda' | 'projeler' | 'hizmetler' | 'iletisim';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('ana-sayfa');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToPage = (page: PageType) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    const message = "Merhaba, mimarlık hizmetleriniz hakkında bilgi almak istiyorum.";
    const phoneNumber = "905551234567"; // WhatsApp numarası
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'ana-sayfa':
        return <HomePage />;
      case 'hakkimizda':
        return <AboutPage />;
      case 'projeler':
        return <ProjectsPage />;
      case 'hizmetler':
        return <ServicesPage />;
      case 'iletisim':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        currentPage={currentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigateToPage={navigateToPage}
      />
      <WhatsAppButton openWhatsApp={openWhatsApp} />
      {renderCurrentPage()}
      <Footer navigateToPage={navigateToPage} openWhatsApp={openWhatsApp} />
    </div>
  );
};

export default App;
