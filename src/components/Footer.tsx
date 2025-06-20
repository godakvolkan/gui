import React from 'react';
import { Phone, Mail, MapPin, Instagram, Twitter, Youtube, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const openWhatsApp = () => {
    const message = "Merhaba, mimarlık hizmetleriniz hakkında bilgi almak istiyorum.";
    const phoneNumber = "905380811715";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const socialMedia = [
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "https://www.instagram.com/gdk_vlkn/", color: "hover:text-pink-500" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", url: "https://x.com/gdk_vlkn", color: "hover:text-blue-400" },
    { icon: <Youtube className="w-5 h-5" />, name: "YouTube", url: "https://www.youtube.com/@VOLKANGODAK", color: "hover:text-red-500" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: "#", color: "hover:text-blue-600" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", url: "#", color: "hover:text-blue-500" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Mimar Tuna</h3>
            <p className="text-gray-300 mb-6">
              Modern mimari çözümler ve sürdürülebilir tasarım anlayışı ile 
              hayalinizdeki projeleri gerçeğe dönüştürüyoruz.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+90 (538) 081 17 15</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">231118058@samsun.edu.tr</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">
                  Çankaya Mahallesi, Mimarlık Sokak No:15<br />
                  Çankaya / Ankara - Türkiye
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ana Sayfa</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Projeler</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hizmetler</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ev Tasarımı</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">İç Mimarlık</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ofis Tasarımı</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Restoran Tasarımı</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Proje Yönetimi</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Contact */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp'ta Yaz
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Mimar Tuna. Tüm hakları saklıdır. | 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-2">Gizlilik Politikası</a> | 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-2">Kullanım Şartları</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;