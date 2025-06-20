import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/About';
import ProjectsPage from './components/ProjectsPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/Contact';
import CertificationsPage from './components/CertificationsPage';
import ProcessPage from './components/ProcessPage';
import PricingPage from './components/PricingPage';
import FAQPage from './components/FAQPage';
import WhatsAppButton from './components/WhatsAppButton';
import WeddingDiscountPage from './components/WeddingDiscountPage';

type PageType = 'ana-sayfa' | 'hakkimizda' | 'projeler' | 'hizmetler' | 'iletisim' | 'sertifikalar' | 'surec' | 'fiyatlandirma' | 'sss' | 'wedding-discount';

interface HomePageProps {
  navigateToPage: (page: PageType) => void;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('ana-sayfa');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToPage = (page: PageType) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'ana-sayfa':
        return <HomePage navigateToPage={navigateToPage} />;
      case 'hakkimizda':
        return <AboutPage />;
      case 'projeler':
        return <ProjectsPage />;
      case 'hizmetler':
        return <ServicesPage />;
      case 'iletisim':
        return <ContactPage />;
      case 'sertifikalar':
        return <CertificationsPage />;
      case 'surec':
        return <ProcessPage />;
      case 'fiyatlandirma':
        return <PricingPage />;
      case 'sss':
        return <FAQPage />;
      case 'wedding-discount':
        return <WeddingDiscountPage />;
      default:
        return <HomePage navigateToPage={navigateToPage} />;
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
      <WhatsAppButton />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
};

export default App;
