import React from 'react';
import { Building, Palette, Wrench, Home, CheckCircle, Star } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Mimari Tasarım",
      description: "Konut, ticari ve kamu binaları için kapsamlı mimari tasarım hizmetleri",
      features: ["Konsept Tasarım", "Uygulama Projeleri", "Ruhsat Projeleri", "3D Görselleştirme"]
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "İç Mimarlık",
      description: "Fonksiyonel ve estetik iç mekan tasarımları",
      features: ["İç Mekan Tasarımı", "Mobilya Tasarımı", "Renk Konsulting", "Dekorasyon"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Proje Yönetimi",
      description: "Başlangıçtan bitişe kadar profesyonel proje yönetimi",
      features: ["İnşaat Denetimi", "Zaman Planlaması", "Maliyet Kontrolü", "Koordinasyon"]
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Restorasyon",
      description: "Tarihi yapıların onarımı ve yeniden işlevlendirilmesi",
      features: ["Tarihi Analiz", "Koruma Planları", "Malzeme Seçimi", "Uygulama"]
    }
  ];

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "Villa Sahibi",
      comment: "Hayal ettiğimiz evi gerçeğe dönüştürdüler. Profesyonel yaklaşımları ve kaliteli işçilikleri için teşekkürler.",
      rating: 5
    },
    {
      name: "Fatma Demir",
      role: "İşletme Sahibi",
      comment: "Restoranımızın tasarımı müthiş oldu. Hem estetik hem de fonksiyonel bir mekan yarattılar.",
      rating: 5
    },
    {
      name: "Mehmet Kaya",
      role: "Müteahhit",
      comment: "Birçok projede birlikte çalıştık. Her zaman zamanında ve kaliteli çıktılar alıyoruz.",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Services Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Hizmetlerimiz</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tasarımdan uygulamaya, başlangıçtan bitişe kadar tüm mimarlık hizmetlerini sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-white">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Müşteri <span className="text-blue-600">Görüşleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Birlikte çalıştığımız müşterilerimizin deneyimleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 