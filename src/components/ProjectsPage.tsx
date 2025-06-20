import React, { useState } from 'react';
import { MapPin, Building, Eye, X, ArrowRight, Calendar, Users, Award, Star, Heart, Camera, Home, ShoppingBag, School, Hotel, CheckCircle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  location: string;
  area: string;
  status: string;
  budget: string;
  client: string;
  features: string[];
  gallery: string[];
}

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('tümü');
  const [imageError, setImageError] = useState<{[key: number]: boolean}>({});

  const projects: Project[] = [
    {
      id: 1,
      title: "Villa Botanica",
      category: "konut",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      description: "Modern mimari çizgiler ve doğal malzemelerle tasarlanmış lüks villa projesi. Sürdürülebilir tasarım ilkeleri gözetilerek hazırlanmıştır.",
      year: "2024",
      location: "Bodrum, Muğla",
      area: "450 m²",
      status: "Tamamlandı",
      budget: "₺2.500.000",
      client: "Özel Müşteri",
      features: ["Sürdürülebilir Tasarım", "Akıllı Ev Sistemi", "Bahçe Tasarımı", "Güneş Paneli"],
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Teknokent Ofis Binası",
      category: "ticari",
      image: "https://images.unsplash.com/photo-1565792715-8f7c5dee2c53?w=800&h=600&fit=crop",
      description: "Teknoloji firmaları için tasarlanmış modern ofis kompleksi. Esnek çalışma alanları ve yeşil bina sertifikası.",
      year: "2024",
      location: "Ankara, Türkiye",
      area: "12.000 m²",
      status: "Devam Ediyor",
      budget: "₺15.000.000",
      client: "Teknokent A.Ş.",
      features: ["Yeşil Bina Sertifikası", "Esnek Çalışma Alanları", "Ortak Kullanım Alanları", "Teknoloji Altyapısı"],
      gallery: [
        "https://images.unsplash.com/photo-1565792715-8f7c5dee2c53?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Kültür Merkezi",
      category: "kamu",
      image: "https://images.unsplash.com/photo-1570896756434-23d7f02d6b4c?w=800&h=600&fit=crop",
      description: "Şehrin kültürel yaşamına katkı sağlayacak çok fonksiyonlu kültür ve sanat merkezi projesi.",
      year: "2023",
      location: "İstanbul, Türkiye",
      area: "8.500 m²",
      status: "Tamamlandı",
      budget: "₺8.500.000",
      client: "İstanbul Büyükşehir Belediyesi",
      features: ["Konser Salonu", "Sergi Alanları", "Kütüphane", "Çok Amaçlı Salon"],
      gallery: [
        "https://images.unsplash.com/photo-1570896756434-23d7f02d6b4c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Seaside Restaurant",
      category: "ticari",
      image: "https://images.unsplash.com/photo-1582267746897-6b3df7c78b45?w=800&h=600&fit=crop",
      description: "Deniz manzaralı restoran tasarımı. Açık ve kapalı alanları birleştiren modern konsept.",
      year: "2023",
      location: "Çeşme, İzmir",
      area: "750 m²",
      status: "Tamamlandı",
      budget: "₺1.200.000",
      client: "Özel Müşteri",
      features: ["Deniz Manzarası", "Açık Alan", "Modern Mutfak", "Bar Alanı"],
      gallery: [
        "https://images.unsplash.com/photo-1582267746897-6b3df7c78b45?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Zen Residence",
      category: "konut",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      description: "Minimalist tasarım felsefesi ile hazırlanmış modern konut projesi.",
      year: "2023",
      location: "Antalya, Türkiye",
      area: "320 m²",
      status: "Tamamlandı",
      budget: "₺1.800.000",
      client: "Özel Müşteri",
      features: ["Minimalist Tasarım", "Doğal Aydınlatma", "Bahçe", "Garaj"],
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      title: "İlkokul Binası",
      category: "kamu",
      image: "https://images.unsplash.com/photo-1581345018842-391516e0ecbf?w=800&h=600&fit=crop",
      description: "Çocuk dostu tasarımı ile öne çıkan modern ilkokul binası projesi.",
      year: "2022",
      location: "Bursa, Türkiye",
      area: "4.200 m²",
      status: "Tamamlandı",
      budget: "₺3.500.000",
      client: "Bursa İl Milli Eğitim Müdürlüğü",
      features: ["Çocuk Dostu Tasarım", "Spor Salonu", "Kütüphane", "Bahçe"],
      gallery: [
        "https://images.unsplash.com/photo-1581345018842-391516e0ecbf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 7,
      title: "Lüks Otel Projesi",
      category: "ticari",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      description: "5 yıldızlı lüks otel projesi. Modern konfor ve geleneksel mimarinin mükemmel uyumu.",
      year: "2024",
      location: "Kapadokya, Nevşehir",
      area: "15.000 m²",
      status: "Devam Ediyor",
      budget: "₺25.000.000",
      client: "Turizm Yatırımcısı",
      features: ["5 Yıldızlı Standart", "Spa Merkezi", "Restoran", "Konferans Salonu"],
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 8,
      title: "Modern Apartman Kompleksi",
      category: "konut",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      description: "Sürdürülebilir yaşam konsepti ile tasarlanmış modern apartman projesi.",
      year: "2023",
      location: "İzmir, Türkiye",
      area: "25.000 m²",
      status: "Tamamlandı",
      budget: "₺18.000.000",
      client: "Gayrimenkul Geliştirici",
      features: ["Sürdürülebilir Tasarım", "Ortak Alanlar", "Güvenlik Sistemi", "Yeşil Alan"],
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 9,
      title: "Alışveriş Merkezi",
      category: "ticari",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      description: "Modern alışveriş deneyimi sunan AVM projesi. Eğlence ve alışverişi birleştiren konsept.",
      year: "2022",
      location: "Ankara, Türkiye",
      area: "45.000 m²",
      status: "Tamamlandı",
      budget: "₺35.000.000",
      client: "AVM Yatırımcısı",
      features: ["Çok Katlı AVM", "Sinema", "Restoranlar", "Otopark"],
      gallery: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
      ]
    }
  ];

  const filteredProjects = activeCategory === 'tümü' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleImageError = (projectId: number) => {
    setImageError(prev => ({ ...prev, [projectId]: true }));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'konut': return <Home className="w-5 h-5" />;
      case 'ticari': return <ShoppingBag className="w-5 h-5" />;
      case 'kamu': return <School className="w-5 h-5" />;
      default: return <Building className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Tamamlandı': return 'text-green-600 bg-green-50';
      case 'Devam Ediyor': return 'text-blue-600 bg-blue-50';
      case 'Planlama': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const navigateToPage = (page: string) => {
    const element = document.getElementById('iletisim');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16">
      {/* Projects Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-yellow-300">Projelerimiz</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Her bir proje, kendine özgü hikayesi olan ve müşterilerimizin hayallerini yansıtan başarı örnekleridir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Tüm Projeler
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Proje Talebi
            </button>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'tümü', label: 'Tümü', count: projects.length },
              { id: 'konut', label: 'Konut', count: projects.filter(p => p.category === 'konut').length },
              { id: 'ticari', label: 'Ticari', count: projects.filter(p => p.category === 'ticari').length },
              { id: 'kamu', label: 'Kamu', count: projects.filter(p => p.category === 'kamu').length }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {getCategoryIcon(category.id)}
                <span className="ml-2">{category.label}</span>
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative group">
                  {imageError[project.id] ? (
                    <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <Camera className="w-16 h-16 text-gray-400" />
                    </div>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={() => handleImageError(project.id)}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold flex items-center"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Detayları Gör
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </span>
                    <span>{project.area}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-green-600">{project.budget}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Projects Found */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Proje Bulunamadı</h3>
              <p className="text-gray-500">Seçtiğiniz kategoride henüz proje bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
                onError={() => handleImageError(selectedProject.id)}
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute top-4 left-4">
                <span className={`text-sm font-medium px-4 py-2 rounded-full ${getStatusColor(selectedProject.status)}`}>
                  {selectedProject.status}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
                <span className="text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded-full">
                  {selectedProject.year}
                </span>
              </div>
              
              <p className="text-gray-600 text-lg mb-6">{selectedProject.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"><strong>Konum:</strong> {selectedProject.location}</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"><strong>Alan:</strong> {selectedProject.area}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700"><strong>Durum:</strong> {selectedProject.status}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700"><strong>Bütçe:</strong> {selectedProject.budget}</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Proje Özellikleri:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Proje Galerisi:</h4>
                <div className="grid grid-cols-3 gap-4">
                  {selectedProject.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                      onError={() => handleImageError(selectedProject.id)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigateToPage('iletisim')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
                >
                  Benzer Proje İsteyin
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage; 