import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/projeler" element={<ProjectsPage />} />
          <Route path="/hizmetler" element={<ServicesPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/sertifikalar" element={<CertificationsPage />} />
          <Route path="/surec" element={<ProcessPage />} />
          <Route path="/fiyatlandirma" element={<PricingPage />} />
          <Route path="/sss" element={<FAQPage />} />
          <Route path="/yeni-evli-indirimi" element={<WeddingDiscountPage />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <ThemeToggle />
      <Footer />
    </div>
  );
};

export default App;
