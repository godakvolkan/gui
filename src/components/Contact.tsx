import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ArrowRight, 
  Send, 
  CheckCircle, 
  Star,
  Users,
  Award,
  Calendar,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Building,
  Car,
  Train,
  Bus
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [activeTab, setActiveTab] = useState('contact');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Lütfen gerekli alanları doldurun.');
      return;
    }
    
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      subject: '', 
      projectType: '', 
      budget: '', 
      timeline: '', 
      message: '' 
    });
  };

  const openWhatsApp = () => {
    const message = "Merhaba, mimarlık hizmetleriniz hakkında bilgi almak istiyorum.";
    const phoneNumber = "905380811715";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Telefon",
      details: ["+90 (538) 081 17 15", "+90 (555) 765 43 21"],
      action: "Hemen Ara",
      color: "blue"
    },
    {
      icon: <Mail className="w-8 h-8 text-green-600" />,
      title: "E-posta",
      details: ["231118058@samsun.edu.tr", "mimar.tuna@gmail.com"],
      action: "E-posta Gönder",
      color: "green"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: "WhatsApp",
      details: ["+90 (538) 081 17 15", "7/24 Hızlı Yanıt"],
      action: "WhatsApp'ta Yaz",
      color: "green"
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      title: "Ofis",
      details: ["Çankaya Mahallesi", "Mimarlık Sokak No:15"],
      action: "Yol Tarifi Al",
      color: "red"
    }
  ];

  const socialMedia = [
    { icon: <Instagram className="w-6 h-6" />, name: "Instagram", url: "https://www.instagram.com/gdk_vlkn/", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { icon: <Twitter className="w-6 h-6" />, name: "Twitter", url: "https://x.com/gdk_vlkn", color: "bg-blue-400" },
    { icon: <Youtube className="w-6 h-6" />, name: "YouTube", url: "https://www.youtube.com/@VOLKANGODAK", color: "bg-red-600" },
    { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", url: "#", color: "bg-blue-700" },
    { icon: <Facebook className="w-6 h-6" />, name: "Facebook", url: "#", color: "bg-blue-600" }
  ];

  const transportation = [
    { icon: <Car className="w-5 h-5" />, name: "Araç", time: "5 dk", distance: "1.2 km" },
    { icon: <Bus className="w-5 h-5" />, name: "Otobüs", time: "15 dk", line: "Hat 123" },
    { icon: <Train className="w-5 h-5" />, name: "Metro", time: "8 dk", station: "Kızılay" }
  ];

  const quickFAQ = [
    {
      question: "Proje süreci ne kadar sürer?",
      answer: "Proje türüne göre 2-8 hafta arasında değişir."
    },
    {
      question: "Ücretsiz danışmanlık veriyor musunuz?",
      answer: "Evet, ilk görüşme ücretsizdir."
    },
    {
      question: "Uzaktan çalışma yapıyor musunuz?",
      answer: "Evet, online görüşme ve proje takibi yapıyoruz."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Bize <span className="text-yellow-300">Ulaşın</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Hayalinizdeki projeyi gerçeğe dönüştürmek için buradayız. 
            Hemen iletişime geçin, ücretsiz danışmanlık alın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp'ta Yaz
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Ücretsiz Danışmanlık
            </button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              İletişim <span className="text-blue-600">Yöntemleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Size en uygun yöntemle iletişime geçin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex justify-center mb-6">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <div className="space-y-2 mb-6">
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <button className={`bg-${method.color}-600 hover:bg-${method.color}-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'contact'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  İletişim Formu
                </button>
                <button
                  onClick={() => setActiveTab('info')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'info'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Bilgiler
                </button>
                <button
                  onClick={() => setActiveTab('faq')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'faq'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  S.S.S
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            {activeTab === 'contact' && (
              <>
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">Proje Talebi Formu</h3>
                    
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Ad Soyad *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Adınız ve soyadınız"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Telefon *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="0555 123 45 67"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            E-posta *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="ornek@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Proje Türü
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Seçiniz</option>
                            <option value="ev-tasarimi">Ev Tasarımı</option>
                            <option value="ic-mimarlik">İç Mimarlık</option>
                            <option value="ofis-tasarimi">Ofis Tasarımı</option>
                            <option value="restoran">Restoran Tasarımı</option>
                            <option value="diger">Diğer</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Bütçe Aralığı
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Seçiniz</option>
                            <option value="50k-100k">50.000 - 100.000 TL</option>
                            <option value="100k-250k">100.000 - 250.000 TL</option>
                            <option value="250k-500k">250.000 - 500.000 TL</option>
                            <option value="500k+">500.000 TL+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Zaman Çizelgesi
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Seçiniz</option>
                            <option value="acil">Acil (1-2 ay)</option>
                            <option value="normal">Normal (3-6 ay)</option>
                            <option value="uzun">Uzun Vadeli (6+ ay)</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Konu
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Proje konusu"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Proje Detayları *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          placeholder="Projeniz hakkında detayları yazın..."
                        ></textarea>
                      </div>
                      
                      <button
                        onClick={handleSubmit}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-lg"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Proje Talebini Gönder
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contact Info Sidebar */}
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Hızlı İletişim</h4>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">+90 (538) 081 17 15</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-700">231118058@samsun.edu.tr</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-purple-600 mr-3" />
                        <span className="text-gray-700">Pzt-Cmt: 09:00-18:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Sosyal Medya</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {socialMedia.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className={`${social.color} text-white p-3 rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-300`}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Info Tab */}
            {activeTab === 'info' && (
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Office Info */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">Ofis Bilgileri</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Building className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900">Adres</div>
                          <div className="text-gray-600">
                            Çankaya Mahallesi, Mimarlık Sokak No:15<br />
                            Çankaya / Ankara - Türkiye
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="w-6 h-6 text-green-600 mr-4 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900">Çalışma Saatleri</div>
                          <div className="text-gray-600">
                            Pazartesi - Cuma: 09:00 - 18:00<br />
                            Cumartesi: 09:00 - 14:00<br />
                            Pazar: Kapalı
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Award className="w-6 h-6 text-purple-600 mr-4 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900">Sertifikalar</div>
                          <div className="text-gray-600">
                            ISO 9001:2015 Kalite Yönetimi<br />
                            ISO 14001:2015 Çevre Yönetimi<br />
                            TMMOB Mimarlar Odası Üyesi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Transportation */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">Ulaşım</h3>
                    
                    <div className="space-y-4">
                      {transportation.map((transport, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <div className="text-blue-600 mr-3">{transport.icon}</div>
                            <div>
                              <div className="font-semibold text-gray-900">{transport.name}</div>
                              <div className="text-sm text-gray-600">
                                {transport.time} • {transport.distance || transport.line || transport.station}
                              </div>
                            </div>
                          </div>
                          <div className="text-blue-600 font-semibold">{transport.time}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Park Yeri</h4>
                      <p className="text-gray-600 text-sm">
                        Ofisimizin önünde ücretsiz park yeri bulunmaktadır.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Sık Sorulan Sorular</h3>
                  
                  <div className="space-y-6">
                    {quickFAQ.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Daha Fazla Soru?</h4>
                    <p className="text-gray-600 mb-4">
                      Aradığınız cevabı bulamadıysanız, bizimle iletişime geçin.
                    </p>
                    <button 
                      onClick={openWhatsApp}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp'ta Sor
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bizi <span className="text-blue-600">Ziyaret Edin</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ofisimizi ziyaret etmek için haritayı kullanın
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Harita Entegrasyonu</h3>
              <p className="text-gray-500">Google Maps veya başka bir harita servisi buraya entegre edilecek</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Projenizi <span className="text-yellow-300">Başlatalım</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Hayalinizdeki projeyi gerçeğe dönüştürmek için hemen iletişime geçin. 
            Ücretsiz danışmanlık ve fiyat teklifi alın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp'ta Yaz
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Ücretsiz Danışmanlık
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;