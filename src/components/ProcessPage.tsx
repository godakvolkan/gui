import React, { useState } from 'react';
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
  Box
} from 'lucide-react';

const ProcessPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedProject, setSelectedProject] = useState('residential');

  const processSteps = [
    {
      id: 0,
      icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
      title: "İlk Görüşme & Analiz",
      description: "Projenizi dinliyor, ihtiyaçlarınızı anlıyor ve vizyonunuzu paylaşıyoruz.",
      duration: "1-2 Gün",
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
      solutions: ["Detaylı analiz", "Şeffaf iletişim", "Düzenli raporlama"]
    },
    {
      id: 1,
      icon: <Palette className="w-12 h-12 text-purple-600" />,
      title: "Konsept Tasarım & Görselleştirme",
      description: "Hayalinizi kağıda döküyor, 3D görselleştirmeler ile projenizi canlandırıyoruz.",
      duration: "1-2 Hafta",
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
      solutions: ["Hızlı revizyon", "Düzenli sunumlar", "Müşteri geri bildirimi"]
    },
    {
      id: 2,
      icon: <FileText className="w-12 h-12 text-green-600" />,
      title: "Teknik Proje & Detaylandırma",
      description: "Detaylı teknik çizimler, hesaplamalar ve uygulama projeleri hazırlıyoruz.",
      duration: "2-3 Hafta",
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
      solutions: ["Uzman ekip", "Önceden planlama", "Alternatif çözümler"]
    },
    {
      id: 3,
      icon: <Hammer className="w-12 h-12 text-orange-600" />,
      title: "Uygulama & İnşaat Yönetimi",
      description: "Projenizi hayata geçiriyor, kaliteli işçilik ile inşaat sürecini yönetiyoruz.",
      duration: "Projeye Göre (2-12 Ay)",
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
      solutions: ["Esnek planlama", "Yedek tedarikçiler", "Uzman ekip"]
    },
    {
      id: 4,
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Kontrol & Test Süreçleri",
      description: "Tüm detayları kontrol ediyor, güvenlik ve kalite testleri yapıyoruz.",
      duration: "1-2 Hafta",
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
      solutions: ["Önceden test", "Uzman ekip", "Hızlı düzeltme"]
    },
    {
      id: 5,
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Teslim & Sonrası Destek",
      description: "Projenizi teslim ediyor, garanti sürecinde yanınızda oluyoruz.",
      duration: "Sürekli Destek",
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
      solutions: ["Detaylı eğitim", "7/24 destek", "Hızlı müdahale"]
    }
  ];

  const projectTypes = [
    {
      id: 'residential',
      title: 'Konut Projeleri',
      icon: <Home className="w-8 h-8" />,
      duration: '3-8 Ay',
      complexity: 'Orta',
      examples: ['Villa Tasarımı', 'Apartman Projesi', 'Bahçe Düzenlemesi']
    },
    {
      id: 'commercial',
      title: 'Ticari Projeler',
      icon: <Building className="w-8 h-8" />,
      duration: '6-18 Ay',
      complexity: 'Yüksek',
      examples: ['Ofis Tasarımı', 'Mağaza Projesi', 'Restoran Tasarımı']
    },
    {
      id: 'industrial',
      title: 'Endüstriyel Projeler',
      icon: <Settings className="w-8 h-8" />,
      duration: '12-24 Ay',
      complexity: 'Çok Yüksek',
      examples: ['Fabrika Tasarımı', 'Depo Projesi', 'Üretim Tesisi']
    }
  ];

  const teamRoles = [
    {
      role: "Proje Müdürü",
      responsibilities: ["Proje koordinasyonu", "Müşteri iletişimi", "Zaman yönetimi"],
      experience: "10+ yıl",
      skills: ["Liderlik", "İletişim", "Planlama"]
    },
    {
      role: "Baş Mimar",
      responsibilities: ["Tasarım yönetimi", "Konsept geliştirme", "Teknik çözümler"],
      experience: "8+ yıl",
      skills: ["Tasarım", "Teknik", "Yaratıcılık"]
    },
    {
      role: "İç Mimar",
      responsibilities: ["İç mekan tasarımı", "Malzeme seçimi", "Dekorasyon"],
      experience: "5+ yıl",
      skills: ["İç tasarım", "Renk", "Malzeme"]
    },
    {
      role: "Mühendis",
      responsibilities: ["Teknik hesaplamalar", "Statik analiz", "Sistem tasarımı"],
      experience: "7+ yıl",
      skills: ["Hesaplama", "Analiz", "Teknik"]
    }
  ];

  const processFeatures = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Zamanında Teslimat",
      description: "Projelerinizi belirlenen sürede tamamlıyoruz",
      metric: "%98 Başarı"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Uzman Ekip",
      description: "Deneyimli mimar ve mühendislerden oluşan kadromuz",
      metric: "15+ Uzman"
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Kalite Garantisi",
      description: "En yüksek kalite standartlarında çalışıyoruz",
      metric: "ISO 9001"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Şeffaf İletişim",
      description: "Her aşamada sizi bilgilendiriyoruz",
      metric: "24/7 İletişim"
    }
  ];

  const technologies = [
    { name: "AutoCAD", category: "Çizim", icon: <FileText className="w-6 h-6" /> },
    { name: "SketchUp", category: "3D Modelleme", icon: <Box className="w-6 h-6" /> },
    { name: "Revit", category: "BIM", icon: <Building className="w-6 h-6" /> },
    { name: "3ds Max", category: "Render", icon: <Camera className="w-6 h-6" /> },
    { name: "V-Ray", category: "Görselleştirme", icon: <Eye className="w-6 h-6" /> },
    { name: "Photoshop", category: "Grafik", icon: <Palette className="w-6 h-6" /> }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Proje <span className="text-yellow-300">Sürecimiz</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            6 adımlık profesyonel sürecimiz ile hayalinizi gerçeğe dönüştürüyoruz. 
            Her aşamada şeffaf, güvenilir ve kaliteli hizmet sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Süreç Detayları
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Ücretsiz Danışmanlık
            </button>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              6 Adımlık <span className="text-blue-600">Profesyonel Süreç</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her proje için standartlaştırılmış, şeffaf ve güvenilir çalışma sürecimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="text-blue-600 font-semibold">{feature.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Detaylı <span className="text-blue-600">Süreç Adımları</span>
            </h2>
            <p className="text-xl text-gray-600">
              Her adımı detaylı olarak inceleyin ve sürecimizi keşfedin
            </p>
          </div>

          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {processSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(step.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                  activeStep === step.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {step.icon}
                <span className="ml-2">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Main Info */}
              <div>
                <div className="flex items-center mb-6">
                  {processSteps[activeStep].icon}
                  <div className="ml-4">
                    <h3 className="text-3xl font-bold text-gray-900">{processSteps[activeStep].title}</h3>
                    <span className="text-lg text-blue-600 font-medium">{processSteps[activeStep].duration}</span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">{processSteps[activeStep].description}</p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Süreç Detayları:</h4>
                  <ul className="space-y-3">
                    {processSteps[activeStep].details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Teslim Edilecekler:</h4>
                  <ul className="space-y-3">
                    {processSteps[activeStep].deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Additional Info */}
              <div className="space-y-8">
                {/* Team */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Ekip Üyeleri</h4>
                  <div className="space-y-2">
                    {processSteps[activeStep].team.map((member, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 text-blue-600 mr-2" />
                        {member}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Kullanılan Araçlar</h4>
                  <div className="space-y-2">
                    {processSteps[activeStep].tools.map((tool, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <Settings className="w-4 h-4 text-green-600 mr-2" />
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Risks & Solutions */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Riskler & Çözümler</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-red-600 mb-2">Riskler:</h5>
                      <ul className="space-y-1">
                        {processSteps[activeStep].risks.map((risk, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-600 mb-2">Çözümler:</h5>
                      <ul className="space-y-1">
                        {processSteps[activeStep].solutions.map((solution, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proje <span className="text-blue-600">Türleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Farklı proje türleri için özelleştirilmiş süreçler
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                  selectedProject === type.id ? 'border-blue-500' : 'border-transparent'
                }`}
                onClick={() => setSelectedProject(type.id)}
              >
                <div className="flex justify-center mb-6 text-blue-600">{type.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{type.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Süre:</span>
                    <span className="font-semibold">{type.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Karmaşıklık:</span>
                    <span className="font-semibold">{type.complexity}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Örnek Projeler:</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Roles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ekip <span className="text-blue-600">Rolleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Projenizin her aşamasında uzman ekibimiz yanınızda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamRoles.map((role, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{role.role}</h3>
                <div className="text-blue-600 font-semibold mb-4">{role.experience}</div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Sorumluluklar:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {role.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Yetenekler:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {role.skills.map((skill, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kullandığımız <span className="text-blue-600">Teknolojiler</span>
            </h2>
            <p className="text-xl text-gray-600">
              En güncel teknolojiler ile projelerinizi hayata geçiriyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-4">{tech.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                    <p className="text-gray-600">{tech.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Summary */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Süreç Özeti</h2>
            <p className="text-xl text-blue-100">
              Her aşamada şeffaf ve profesyonel yaklaşım
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-blue-100">Adım Süreç</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">%98</div>
              <div className="text-blue-100">Başarı Oranı</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">İletişim</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5 Yıl</div>
              <div className="text-blue-100">Garanti</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Projenizi Başlatın
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage; 