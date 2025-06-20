import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Heart, MessageCircle, Share2, Eye } from 'lucide-react';

const SocialMediaSection: React.FC = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop",
      likes: 1247,
      comments: 89,
      caption: "Bodrum Villa Projesi - Modern tasarım ve doğal malzemelerin mükemmel uyumu 🏡✨ #mimari #villa #bodrum"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1565792715-8f7c5dee2c53?w=400&h=400&fit=crop",
      likes: 2156,
      comments: 156,
      caption: "Teknokent Ofis Kompleksi - Sürdürülebilir tasarım ve akıllı sistemler 🏢💡 #ofis #teknoloji #sürdürülebilir"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1570896756434-23d7f02d6b4c?w=400&h=400&fit=crop",
      likes: 1893,
      comments: 234,
      caption: "Kültür Merkezi - Modern performans salonları ve sergi alanları 🎭🎨 #kültür #mimari #sanat"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop",
      likes: 3421,
      comments: 298,
      caption: "Lüks Konut Projesi - Yaşam kalitesini artıran tasarım çözümleri 🏠🌟 #konut #lüks #tasarım"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
      likes: 1678,
      comments: 145,
      caption: "İç Mimarlık Projesi - Fonksiyonel ve estetik mekan tasarımı 🎨🏡 #içmimarlık #tasarım #mekan"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=400&fit=crop",
      likes: 2987,
      comments: 267,
      caption: "Restoran Tasarımı - Gastronomi ve mimarinin buluşması 🍽️✨ #restoran #gastronomi #tasarım"
    }
  ];

  const socialStats = [
    { platform: "Instagram", followers: "12.5K", posts: "450+", engagement: "8.2%" },
    { platform: "Facebook", followers: "8.3K", posts: "320+", engagement: "6.1%" },
    { platform: "LinkedIn", followers: "5.7K", posts: "180+", engagement: "4.8%" },
    { platform: "Twitter", followers: "3.2K", posts: "890+", engagement: "5.3%" }
  ];

  const recentProjects = [
    {
      title: "Villa Botanica",
      location: "Bodrum, Muğla",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=200&fit=crop",
      views: 15420,
      shares: 234
    },
    {
      title: "Teknokent Ofis",
      location: "Ankara, Türkiye",
      image: "https://images.unsplash.com/photo-1565792715-8f7c5dee2c53?w=300&h=200&fit=crop",
      views: 12890,
      shares: 189
    },
    {
      title: "Kültür Merkezi",
      location: "İstanbul, Türkiye",
      image: "https://images.unsplash.com/photo-1570896756434-23d7f02d6b4c?w=300&h=200&fit=crop",
      views: 18760,
      shares: 312
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sosyal <span className="text-blue-600">Medya</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projelerimizi ve günlük çalışmalarımızı sosyal medyada takip edin
          </p>
        </div>

        {/* Social Media Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {socialStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">{stat.followers}</div>
              <div className="text-gray-600 mb-1">{stat.platform} Takipçi</div>
              <div className="text-sm text-gray-500">
                {stat.posts} gönderi • %{stat.engagement} etkileşim
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feed */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Instagram className="w-8 h-8 text-pink-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              Instagram <span className="text-blue-600">Feed</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post) => (
              <div key={post.id} className="relative group cursor-pointer">
                <img 
                  src={post.image} 
                  alt="Instagram Post"
                  className="w-full h-48 object-cover rounded-lg group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Heart className="w-5 h-5 mr-1" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 mr-1" />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="#" 
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram'da Takip Et
            </a>
          </div>
        </div>

        {/* Recent Project Shares */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Son <span className="text-blue-600">Proje Paylaşımları</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="relative mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                    Yeni
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.location}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{project.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Share2 className="w-4 h-4 mr-1" />
                    <span>{project.shares}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Sosyal Medyada Bizi Takip Edin</h3>
            <p className="text-blue-100">
              En son projelerimizi, tasarım trendlerini ve günlük çalışmalarımızı kaçırmayın
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <a href="#" className="bg-white bg-opacity-20 rounded-lg p-6 text-center hover:bg-opacity-30 transition-all duration-300">
              <Instagram className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold">Instagram</div>
              <div className="text-sm text-blue-100">@mimari_ofis</div>
            </a>
            
            <a href="#" className="bg-white bg-opacity-20 rounded-lg p-6 text-center hover:bg-opacity-30 transition-all duration-300">
              <Facebook className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold">Facebook</div>
              <div className="text-sm text-blue-100">Mimari Ofis</div>
            </a>
            
            <a href="#" className="bg-white bg-opacity-20 rounded-lg p-6 text-center hover:bg-opacity-30 transition-all duration-300">
              <Linkedin className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold">LinkedIn</div>
              <div className="text-sm text-blue-100">Mimari Ofis</div>
            </a>
            
            <a href="#" className="bg-white bg-opacity-20 rounded-lg p-6 text-center hover:bg-opacity-30 transition-all duration-300">
              <Twitter className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold">Twitter</div>
              <div className="text-sm text-blue-100">@mimari_ofis</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection; 