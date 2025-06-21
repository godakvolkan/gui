import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Palette, 
  FileText, 
  Hammer, 
  CheckCircle, 
  Home, 
  Clock, 
  Users, 
  Award, 
  ArrowRight,
  Calendar,
  Target,
  Eye,
  Download,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  Building,
  Car,
  Lightbulb,
  Settings,
  BarChart3,
  FileCheck,
  Camera,
  Video,
  Smartphone,
  Monitor,
  Tablet,
  Box,
  Sparkles,
  MessageCircle,
  Play,
  Pause,
  SkipForward,
  SkipBack
} from 'lucide-react';

const ProcessPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedProject, setSelectedProject] = useState('residential');
  const [isPlaying, setIsPlaying] = useState(false);
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

    const element = document.getElementById('process-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const openWhatsApp = () => {
    const message = "Merhaba, proje süreci hakkında bilgi almak istiyorum.";
    const phoneNumber = "905380811715";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const navigateToContact = () => {
    const element = document.getElementById('iletisim');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const processSteps = [
    {
      id: 0,
      icon: <MessageSquare className="w-12 h-12" />,
      title: "İlk Görüşme & Analiz",
      description: "Projenizi dinliyor, ihtiyaçlarınızı anlıyor ve vizyonunuzu paylaşıyoruz.",
      duration: "1-2 Gün",
      gradient: "from-blue-500 to-blue-600",
      details: [
        "Ücretsiz danışmanlık ve proje analizi",
        "Müşteri ihtiyaçları ve beklentileri belirleme",
        "Bütçe planlaması ve finansal analiz",
        "Zaman çizelgesi ve proje takvimi oluşturma",
        "Mevcut alan analizi ve ölçümler"
      ],
      deliverables: [
        "Detaylı proje özeti ve kapsam belgesi",
        "Bütçe tahmini ve ödeme planı",
        "Zaman çizelgesi ve kilometre taşları",
        "İhtiyaç analizi raporu"
      ],
      team: ["Proje Müdürü", "Mimar", "Müşteri İlişkileri"],
      tools: ["Proje Yönetim Yazılımı", "3D Tarayıcı", "Ölçüm Cihazları"],
      risks: ["Bütçe aşımı", "Zaman gecikmesi", "Beklenti uyumsuzluğu"],
      solutions: ["Detaylı analiz", "Şeffaf iletişim", "Düzenli raporlama"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
    },
    {
      id: 1,
      icon: <Palette className="w-12 h-12" />,
      title: "Konsept Tasarım & Görselleştirme",
      description: "Hayalinizi kağıda döküyor, 3D görselleştirmeler ile projenizi canlandırıyoruz.",
      duration: "1-2 Hafta",
      gradient: "from-purple-500 to-purple-600",
      details: [
        "Konsept eskizler ve mood board hazırlama",
        "3D görselleştirme ve render çalışmaları",
        "Malzeme ve renk paleti seçimi",
        "Mobilya ve dekorasyon önerileri",
        "Aydınlatma ve akustik tasarımı"
      ],
      deliverables: [
        "Konsept çizimler ve eskizler",
        "3D renderlar ve animasyonlar",
        "Malzeme ve renk önerileri",
        "Mobilya ve dekorasyon kataloğu"
      ],
      team: ["Baş Mimar", "İç Mimar", "3D Görselleştirici", "Renk Uzmanı"],
      tools: ["AutoCAD", "SketchUp", "3ds Max", "V-Ray", "Photoshop"],
      risks: ["Tasarım değişiklikleri", "Müşteri onayı gecikmesi"],
      solutions: ["Hızlı revizyon", "Düzenli sunumlar", "Müşteri geri bildirimi"],
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      icon: <FileText className="w-12 h-12" />,
      title: "Teknik Proje & Detaylandırma",
      description: "Detaylı teknik çizimler, hesaplamalar ve uygulama projeleri hazırlıyoruz.",
      duration: "2-3 Hafta",
      gradient: "from-green-500 to-green-600",
      details: [
        "Teknik çizimler ve detay planları",
        "Yapı hesapları ve statik analizler",
        "Malzeme listesi ve maliyet hesaplaması",
        "Ruhsat projeleri ve yasal belgeler",
        "Elektrik, su, ısıtma sistemleri tasarımı"
      ],
      deliverables: [
        "Teknik projeler ve çizimler",
        "Hesaplama raporları ve analizler",
        "Ruhsat dosyası ve yasal belgeler",
        "Malzeme listesi ve maliyet analizi"
      ],
      team: ["Proje Mimarı", "Statik Mühendisi", "Tesisat Mühendisi", "Teknik Çizer"],
      tools: ["AutoCAD", "Revit", "SAP2000", "Excel", "Proje Yönetim"],
      risks: ["Teknik zorluklar", "Ruhsat gecikmesi", "Maliyet artışı"],
      solutions: ["Uzman ekip", "Önceden planlama", "Alternatif çözümler"],
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      icon: <Hammer className="w-12 h-12" />,
      title: "Uygulama & İnşaat Yönetimi",
      description: "Projenizi hayata geçiriyor, kaliteli işçilik ile inşaat sürecini yönetiyoruz.",
      duration: "Projeye Göre (2-12 Ay)",
      gradient: "from-orange-500 to-orange-600",
      details: [
        "İnşaat denetimi ve kalite kontrolü",
        "Zaman yönetimi ve ilerleme takibi",
        "Maliyet kontrolü ve bütçe yönetimi",
        "Alt yüklenici koordinasyonu",
        "Güvenlik ve çevre yönetimi"
      ],
      deliverables: [
        "İnşaat raporları ve ilerleme belgeleri",
        "Kalite kontrol raporları",
        "İlerleme fotoğrafları ve videolar",
        "Maliyet raporları ve ödeme planları"
      ],
      team: ["Şantiye Şefi", "Mühendis", "Kalite Kontrol Uzmanı", "Güvenlik Uzmanı"],
      tools: ["Proje Yönetim Yazılımı", "Drone", "Kalite Kontrol Cihazları", "Mobil Uygulamalar"],
      risks: ["Hava koşulları", "Malzeme gecikmesi", "İşçi sorunları"],
      solutions: ["Esnek planlama", "Yedek tedarikçiler", "Uzman ekip"],
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Kontrol & Test Süreçleri",
      description: "Tüm detayları kontrol ediyor, güvenlik ve kalite testleri yapıyoruz.",
      duration: "1-2 Hafta",
      gradient: "from-green-500 to-green-600",
      details: [
        "Kalite kontrolü ve standart kontrolü",
        "Güvenlik testleri ve sertifikasyon",
        "Enerji verimliliği testleri",
        "Akustik ve termal testler",
        "Son kontroller ve düzeltmeler"
      ],
      deliverables: [
        "Test raporları ve sertifikalar",
        "Kalite belgeleri ve standart onayları",
        "Güvenlik sertifikaları",
        "Enerji verimliliği belgesi"
      ],
      team: ["Kalite Kontrol Uzmanı", "Test Mühendisi", "Güvenlik Uzmanı", "Sertifikasyon Uzmanı"],
      tools: ["Test Cihazları", "Kalite Kontrol Yazılımı", "Ölçüm Cihazları", "Raporlama Sistemi"],
      risks: ["Test başarısızlığı", "Sertifikasyon gecikmesi"],
      solutions: ["Önceden test", "Uzman ekip", "Hızlı düzeltme"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      icon: <Home className="w-12 h-12" />,
      title: "Teslim & Sonrası Destek",
      description: "Projenizi teslim ediyor, garanti sürecinde yanınızda oluyoruz.",
      duration: "Sürekli Destek",
      gradient: "from-blue-500 to-blue-600",
      details: [
        "Proje teslimi ve kabul süreci",
        "Kullanım kılavuzu ve eğitim",
        "Garanti belgesi ve servis anlaşması",
        "Sonraki destek ve bakım hizmetleri",
        "Müşteri memnuniyeti takibi"
      ],
      deliverables: [
        "Teslim belgeleri ve kabul raporu",
        "Kullanım kılavuzu ve bakım talimatları",
        "Garanti belgesi ve servis anlaşması",
        "Müşteri memnuniyeti raporu"
      ],
      team: ["Proje Müdürü", "Teknik Destek", "Müşteri İlişkileri", "Servis Ekibi"],
      tools: ["Müşteri Portalı", "Destek Sistemi", "Garanti Takip Sistemi", "Mobil Uygulama"],
      risks: ["Kullanım sorunları", "Garanti talepleri"],
      solutions: ["Detaylı eğitim", "7/24 destek", "Hızlı müdahale"],
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop"
    }
  ];

  const projectTypes = [
    {
      id: 'residential',
      title: 'Konut Projeleri',
      icon: <Home className="w-8 h-8" />,
      duration: '3-8 Ay',
      complexity: 'Orta',
      gradient: "from-blue-500 to-blue-600",
      examples: ['Villa Tasarımı', 'Apartman Projesi', 'Bahçe Düzenlemesi'],
      features: ['Kişiselleştirilmiş tasarım', 'Aile odaklı planlama', 'Sürdürülebilir çözümler']
    },
    {
      id: 'commercial',
      title: 'Ticari Projeler',
      icon: <Building className="w-8 h-8" />,
      duration: '6-18 Ay',
      complexity: 'Yüksek',
      gradient: "from-purple-500 to-purple-600",
      examples: ['Ofis Binaları', 'AVM Tasarımı', 'Otel Projeleri'],
      features: ['İş odaklı tasarım', 'Yüksek verimlilik', 'Modern teknolojiler']
    },
    {
      id: 'public',
      title: 'Kamu Projeleri',
      icon: <Shield className="w-8 h-8" />,
      duration: '12-36 Ay',
      complexity: 'Çok Yüksek',
      gradient: "from-green-500 to-green-600",
      examples: ['Okul Binaları', 'Hastaneler', 'Kültür Merkezleri'],
      features: ['Toplumsal fayda', 'Uzun ömürlü tasarım', 'Erişilebilirlik']
    }
  ];

  const stats = [
    { number: "500+", label: "Tamamlanan Proje", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "98%", label: "Müşteri Memnuniyeti", icon: <Heart className="w-6 h-6" /> },
    { number: "12", label: "Yıllık Deneyim", icon: <Clock className="w-6 h-6" /> },
    { number: "25+", label: "Uzman Ekip", icon: <Users className="w-6 h-6" /> }
  ];

  const currentStep = processSteps[activeStep];

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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6 animate-fade-in">
            <Settings className="w-4 h-4 text-yellow-300 mr-2" />
            <span className="text-sm font-medium text-white">Proje Süreci</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Proje Sürecimiz</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            12 yıllık deneyimimizle geliştirdiğimiz sistematik yaklaşım ile projelerinizi 
            başlangıçtan bitişe kadar profesyonel bir şekilde yönetiyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={openWhatsApp}
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Süreç Hakkında Bilgi Al
            </button>
            <button 
              onClick={() => navigateToContact()}
              className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <ArrowRight className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Proje Başlat
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-200 dark:border-gray-600 animate-fade-in" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                  <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Project Types Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2 mb-6">
              <Building className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proje Türleri</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proje <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Türlerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Farklı proje türlerine özel süreçler ve yaklaşımlar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => (
              <div
                key={type.id}
                className={`group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-2 cursor-pointer animate-fade-in ${
                  selectedProject === type.id 
                    ? 'border-blue-500 dark:border-blue-400' 
                    : 'border-gray-200 dark:border-gray-600'
                }`}
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
                onClick={() => setSelectedProject(type.id)}
              >
                <div className={`mb-6 p-4 bg-gradient-to-r ${type.gradient} rounded-xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {type.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {type.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Süre:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{type.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Karmaşıklık:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{type.complexity}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Özellikler:</h4>
                  <ul className="space-y-1">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Steps Section */}
      <section id="process-section" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-6">
              <Target className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Süreç Adımları</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proje <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Sürecimiz</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              6 aşamalı sistematik yaklaşımımız ile projelerinizi başarıyla tamamlıyoruz
            </p>
          </div>

          {/* Process Controls */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-600">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <SkipBack className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <SkipForward className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="relative mb-16">
            <div className="flex justify-between items-center">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                      index === activeStep
                        ? `bg-gradient-to-r ${step.gradient} text-white shadow-lg`
                        : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                    }`}
                  >
                    {step.icon}
                  </button>
                  <div className="mt-2 text-center">
                    <div className={`text-sm font-medium ${
                      index === activeStep 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">
                      {step.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Timeline line */}
            <div className="absolute top-8 left-8 right-8 h-0.5 bg-gray-200 dark:bg-gray-600 -z-10"></div>
          </div>

          {/* Current Step Details */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-600 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className={`inline-flex items-center bg-gradient-to-r ${currentStep.gradient} text-white p-4 rounded-2xl mb-6`}>
                  {currentStep.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {currentStep.title}
                </h3>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {currentStep.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Detaylar:</h4>
                    <ul className="space-y-2">
                      {currentStep.details.map((detail, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Teslim Edilenler:</h4>
                    <ul className="space-y-2">
                      {currentStep.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <FileCheck className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ekip:</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      {currentStep.team.map((member, index) => (
                        <li key={index} className="flex items-center">
                          <Users className="w-3 h-3 text-blue-500 mr-2" />
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Araçlar:</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      {currentStep.tools.map((tool, index) => (
                        <li key={index} className="flex items-center">
                          <Settings className="w-3 h-3 text-purple-500 mr-2" />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">Hemen Başlayın</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Projenizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Hayata Geçirelim</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            12 yıllık deneyimimizle geliştirdiğimiz sistematik süreç ile projenizi 
            başarıyla tamamlayalım. Ücretsiz danışmanlık hizmetimizden yararlanın.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openWhatsApp}
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              WhatsApp'ta Yaz
            </button>
            <button 
              onClick={() => navigateToContact()}
              className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Hemen Ara
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage; 