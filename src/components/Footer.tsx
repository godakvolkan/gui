import React from 'react';
import { Link } from 'react-router-dom';
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

  const footerLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Projeler', path: '/projeler' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'İletişim', path: '/iletisim' }
  ];

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Türk Mimar</h3>
            <p className="text-gray-400 dark:text-gray-300">
              Yenilikçi ve sürdürülebilir mimari çözümlerle geleceğin mekanlarını tasarlıyoruz. Estetik ve fonksiyonelliği bir araya getirerek hayallerinizi gerçeğe dönüştürüyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 dark:text-gray-300 hover:text-yellow-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bize Ulaşın</h3>
            <p className="text-gray-400 dark:text-gray-300 mb-4">info@turkmimar.com</p>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 dark:text-gray-300 ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 dark:border-gray-600 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Türk Mimar. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;