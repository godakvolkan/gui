import React, { useState } from 'react';
import { MapPin, Building, Eye, X, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  location: string;
  area: string;
}

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('tümü');

  const projects: Project[] = [
    {
      id: 1,
      title: "Villa Botanica",
      category: "konut",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      description: "Modern mimari çizgiler ve doğal malzemelerle tasarlanmış lüks villa projesi. Sürdürülebilir tasarım ilkeleri gözetilerek hazırlanmıştır.",
      year: "2024",
      location: "Bodrum, Muğla",
      area: "450 m²"
    },
    {
      id: 2,
      title: "Teknokent Ofis Binası",
      category: "ticari",
      image: "https://images.unsplash.com/photo-1565792715-8f7c5dee2c53?w=800&h=600&fit=crop",
      description: "Teknoloji firmaları için tasarlanmış modern ofis kompleksi. Esnek çalışma alanları ve yeşil bina sertifikası.",
      year: "2024",
      location: "Ankara, Türkiye",
      area: "12.000 m²"
    },
    {
      id: 3,
      title: "Kültür Merkezi",
      category: "kamu",
      image: "https://images.unsplash.com/photo-1570896756434-23d7f02d6b4c?w=800&h=600&fit=crop",
      description: "Şehrin kültürel yaşamına katkı sağlayacak çok fonksiyonlu kültür ve sanat merkezi projesi.",
      year: "2023",
      location: "İstanbul, Türkiye",
      area: "8.500 m²"
    },
    {
      id: 4,
      title: "Seaside Restaurant",
      category: "ticari",
      image: "https://images.unsplash.com/photo-1582267746897-6b3df7c78b45?w=800&h=600&fit=crop",
      description: "Deniz manzaralı restoran tasarımı. Açık ve kapalı alanları birleştiren modern konsept.",
      year: "2023",
      location: "Çeşme, İzmir",
      area: "750 m²"
    },
    {
      id: 5,
      title: "Zen Residence",
      category: "konut",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      description: "Minimalist tasarım felsefesi ile hazırlanmış modern konut projesi.",
      year: "2023",
      location: "Antalya, Türkiye",
      area: "320 m²"
    },
    {
      id: 6,
      title: "İlkokul Binası",
      category: "kamu",
      image: "https://images.unsplash.com/photo-1581345018842-391516e0ecbf?w=800&h=600&fit=crop",
      description: "Çocuk dostu tasarımı ile öne çıkan modern ilkokul binası projesi.",
      year: "2022",
      location: "Bursa, Türkiye",
      area: "4.200 m²"
    }
  ];

  const filteredProjects = activeCategory === 'tümü' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const navigateToPage = (page: string) => {
    // This would typically navigate to a different page
    // For now, we'll just scroll to the contact section
    const element = document.getElementById('iletisim');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16">
      {/* Projects Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Projelerimiz</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her bir proje, kendine özgü hikayesi olan ve müşterilerimizin hayallerini yansıtan başarı örnekleridir.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'tümü', label: 'Tümü' },
              { id: 'konut', label: 'Konut' },
              { id: 'ticari', label: 'Ticari' },
              { id: 'kamu', label: 'Kamu' }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold flex items-center"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Detayları Gör
                    </button>
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
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </span>
                    <span>{project.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
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
              </div>
              
              <button 
                onClick={() => navigateToPage('iletisim')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
              >
                Benzer Proje İsteyin
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage; 