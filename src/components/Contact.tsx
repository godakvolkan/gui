import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
  Bus,
  Sparkles,
  Zap,
  Heart,
  Target,
  Lightbulb
} from 'lucide-react';

// Form validation schema
const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Ad en az 2 karakter olmalıdır')
    .max(50, 'Ad en fazla 50 karakter olabilir')
    .required('Ad alanı zorunludur'),
  email: Yup.string()
    .email('Geçerli bir e-posta adresi giriniz')
    .required('E-posta alanı zorunludur'),
  phone: Yup.string()
    .matches(/^[0-9\s\-\+\(\)]+$/, 'Geçerli bir telefon numarası giriniz')
    .min(10, 'Telefon numarası en az 10 karakter olmalıdır')
    .required('Telefon alanı zorunludur'),
  subject: Yup.string()
    .min(5, 'Konu en az 5 karakter olmalıdır')
    .max(100, 'Konu en fazla 100 karakter olabilir'),
  projectType: Yup.string(),
  budget: Yup.string(),
  timeline: Yup.string(),
  message: Yup.string()
    .min(20, 'Mesaj en az 20 karakter olmalıdır')
    .max(1000, 'Mesaj en fazla 1000 karakter olabilir')
    .required('Mesaj alanı zorunludur')
});

// Initial form values
const initialValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: ''
};

const ContactPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (values: typeof initialValues, { setSubmitting, resetForm }: any) => {
    // Simulate form submission
    setTimeout(() => {
      console.log('Form data:', values);
      alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  const openWhatsApp = () => {
    const message = "Merhaba, mimarlık hizmetleriniz hakkında bilgi almak istiyorum.";
    const phoneNumber = "905380811715";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Telefon",
      details: ["+90 (538) 081 17 15", "+90 (555) 765 43 21"],
      action: "Hemen Ara",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      darkBgGradient: "from-blue-900/20 to-blue-800/20"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "E-posta",
      details: ["231118058@samsun.edu.tr", "mimar.tuna@gmail.com"],
      action: "E-posta Gönder",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      darkBgGradient: "from-green-900/20 to-green-800/20"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      details: ["+90 (538) 081 17 15", "7/24 Hızlı Yanıt"],
      action: "WhatsApp'ta Yaz",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      darkBgGradient: "from-green-900/20 to-green-800/20"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Ofis",
      details: ["Çankaya Mahallesi", "Mimarlık Sokak No:15"],
      action: "Yol Tarifi Al",
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100",
      darkBgGradient: "from-red-900/20 to-red-800/20"
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
      {/* Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-yellow-300 mr-2" />
            <span className="text-sm font-medium text-white">Hemen İletişime Geçin</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Bize <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Ulaşın</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Hayalinizdeki projeyi gerçeğe dönüştürmek için buradayız. 
            Hemen iletişime geçin, ücretsiz danışmanlık alın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={openWhatsApp}
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              WhatsApp'ta Yaz
            </button>
            <button className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Ücretsiz Danışmanlık
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Methods */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6">
              <Target className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">İletişim Kanalları</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              İletişim <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Yöntemleri</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Size en uygun yöntemle iletişime geçin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${method.bgGradient} dark:${method.darkBgGradient} rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in`}
                style={{animationDelay: `${0.8 + index * 0.1}s`}}
              >
                {/* Icon */}
                <div className={`mb-6 p-4 bg-gradient-to-r ${method.gradient} rounded-xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {method.title}
                </h3>
                
                <div className="space-y-2 mb-6">
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {detail}
                    </p>
                  ))}
                </div>
                
                <button className={`bg-gradient-to-r ${method.gradient} hover:from-opacity-90 hover:to-opacity-90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 w-full transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                  {method.action}
                </button>
                
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <section id="contact-section" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-600">
              <div className="flex space-x-2">
                {[
                  { id: 'contact', label: 'İletişim Formu', icon: <MessageCircle className="w-4 h-4" /> },
                  { id: 'info', label: 'Bilgiler', icon: <Building className="w-4 h-4" /> },
                  { id: 'faq', label: 'S.S.S', icon: <Heart className="w-4 h-4" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Tab Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Enhanced Contact Form */}
            {activeTab === 'contact' && (
              <>
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in">
                    <div className="flex items-center mb-8">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-4">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Proje Talebi Formu</h3>
                    </div>
                    
                    <Formik
                      initialValues={initialValues}
                      validationSchema={ContactFormSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ isSubmitting, errors, touched }) => (
                        <Form className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="group">
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Ad Soyad *
                              </label>
                              <Field
                                type="text"
                                name="name"
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md ${
                                  errors.name && touched.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                }`}
                                placeholder="Adınız ve soyadınız"
                              />
                              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="group">
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Telefon *
                              </label>
                              <Field
                                type="tel"
                                name="phone"
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md ${
                                  errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                }`}
                                placeholder="0555 123 45 67"
                              />
                              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="group">
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                E-posta *
                              </label>
                              <Field
                                type="email"
                                name="email"
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md ${
                                  errors.email && touched.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                }`}
                                placeholder="ornek@email.com"
                              />
                              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="group">
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Proje Türü
                              </label>
                              <Field
                                as="select"
                                name="projectType"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md"
                              >
                                <option value="">Seçiniz</option>
                                <option value="ev-tasarimi">Ev Tasarımı</option>
                                <option value="ic-mimarlik">İç Mimarlık</option>
                                <option value="ofis-tasarimi">Ofis Tasarımı</option>
                                <option value="restoran">Restoran Tasarımı</option>
                                <option value="diger">Diğer</option>
                              </Field>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="group">
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Bütçe Aralığı
                              </label>
                              <Field
                                as="select"
                                name="budget"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md"
                              >
                                <option value="">Seçiniz</option>
                                <option value="50k-100k">50.000 - 100.000 TL</option>
                                <option value="100k-250k">100.000 - 250.000 TL</option>
                                <option value="250k-500k">250.000 - 500.000 TL</option>
                                <option value="500k+">500.000 TL+</option>
                              </Field>
                            </div>
                            <div className="group">
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Zaman Çizelgesi
                              </label>
                              <Field
                                as="select"
                                name="timeline"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md"
                              >
                                <option value="">Seçiniz</option>
                                <option value="acil">Acil (1-2 ay)</option>
                                <option value="normal">Normal (3-6 ay)</option>
                                <option value="uzun">Uzun Vadeli (6+ ay)</option>
                              </Field>
                            </div>
                          </div>
                          
                          <div className="group">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Konu
                            </label>
                            <Field
                              type="text"
                              name="subject"
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md ${
                                errors.subject && touched.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                              }`}
                              placeholder="Proje konusu"
                            />
                            <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                          </div>
                          
                          <div className="group">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Proje Detayları *
                            </label>
                            <Field
                              as="textarea"
                              name="message"
                              rows={6}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 group-hover:shadow-md ${
                                errors.message && touched.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                              }`}
                              placeholder="Projeniz hakkında detayları yazın..."
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                          </div>
                          
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center text-lg transform hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Gönderiliyor...
                              </>
                            ) : (
                              <>
                                <Send className="w-5 h-5 mr-2" />
                                Proje Talebini Gönder
                              </>
                            )}
                          </button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>

                {/* Enhanced Contact Info Sidebar */}
                <div className="space-y-8">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center mb-6">
                      <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-3">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">Hızlı İletişim</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center group">
                        <Phone className="w-5 h-5 text-blue-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">+90 (538) 081 17 15</span>
                      </div>
                      <div className="flex items-center group">
                        <Mail className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">231118058@samsun.edu.tr</span>
                      </div>
                      <div className="flex items-center group">
                        <Clock className="w-5 h-5 text-purple-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">Pzt-Cmt: 09:00-18:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <div className="flex items-center mb-6">
                      <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mr-3">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">Sosyal Medya</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {socialMedia.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className={`${social.color} text-white p-3 rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-300 transform hover:rotate-3 shadow-lg hover:shadow-xl`}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Enhanced Info Tab */}
            {activeTab === 'info' && (
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Enhanced Office Info */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in">
                    <div className="flex items-center mb-8">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-4">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Ofis Bilgileri</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start group">
                        <Building className="w-6 h-6 text-blue-600 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Adres</div>
                          <div className="text-gray-600 dark:text-gray-300">
                            Çankaya Mahallesi, Mimarlık Sokak No:15<br />
                            Çankaya / Ankara - Türkiye
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start group">
                        <Clock className="w-6 h-6 text-green-600 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Çalışma Saatleri</div>
                          <div className="text-gray-600 dark:text-gray-300">
                            Pazartesi - Cuma: 09:00 - 18:00<br />
                            Cumartesi: 09:00 - 14:00<br />
                            Pazar: Kapalı
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start group">
                        <Award className="w-6 h-6 text-purple-600 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Sertifikalar</div>
                          <div className="text-gray-600 dark:text-gray-300">
                            ISO 9001:2015 Kalite Yönetimi<br />
                            ISO 14001:2015 Çevre Yönetimi<br />
                            TMMOB Mimarlar Odası Üyesi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Transportation */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center mb-8">
                      <div className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl mr-4">
                        <Car className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Ulaşım</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {transportation.map((transport, index) => (
                        <div key={index} className="group flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
                          <div className="flex items-center">
                            <div className="text-blue-600 mr-3 group-hover:scale-110 transition-transform duration-300">{transport.icon}</div>
                            <div>
                              <div className="font-semibold text-gray-900 dark:text-white">{transport.name}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">
                                {transport.time} • {transport.distance || transport.line || transport.station}
                              </div>
                            </div>
                          </div>
                          <div className="text-blue-600 font-semibold">{transport.time}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Park Yeri</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Ofisimizin önünde ücretsiz park yeri bulunmaktadır.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced FAQ Tab */}
            {activeTab === 'faq' && (
              <div className="lg:col-span-3">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in">
                  <div className="flex items-center mb-8">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mr-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Sık Sorulan Sorular</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {quickFAQ.map((faq, index) => (
                      <div key={index} className="group border-b border-gray-200 dark:border-gray-600 pb-6 hover:bg-gray-50 dark:hover:bg-gray-700 p-4 rounded-lg transition-all duration-300">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{faq.question}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Daha Fazla Soru?</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Aradığınız cevabı bulamadıysanız, bizimle iletişime geçin.
                    </p>
                    <button 
                      onClick={openWhatsApp}
                      className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      WhatsApp'ta Sor
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-6">
              <MapPin className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Konum</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Bizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Ziyaret Edin</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ofisimizi ziyaret etmek için haritayı kullanın
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 h-96 flex items-center justify-center border border-gray-200 dark:border-gray-600 shadow-xl">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">Harita Entegrasyonu</h3>
              <p className="text-gray-500 dark:text-gray-400">Google Maps veya başka bir harita servisi buraya entegre edilecek</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">Hemen Başlayın</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Projenizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Başlatalım</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Hayalinizdeki projeyi gerçeğe dönüştürmek için hemen iletişime geçin. 
            Ücretsiz danışmanlık ve fiyat teklifi alın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openWhatsApp}
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              WhatsApp'ta Yaz
            </button>
            <button className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <Lightbulb className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Ücretsiz Danışmanlık
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;