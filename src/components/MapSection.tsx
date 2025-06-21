import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Loader } from '@googlemaps/js-api-loader';

const MapSection: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Buraya Google Maps API anahtarınızı ekleyin
        version: 'weekly',
        libraries: ['places']
      });

      try {
        const google = await loader.load();
        
        if (mapRef.current && !mapInstanceRef.current) {
          const samsunLocation = { lat: 41.325945, lng: 36.297144 };
          
          const map = new google.maps.Map(mapRef.current, {
            center: samsunLocation,
            zoom: 16,
            styles: [
              { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
              { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
              { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
              {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }],
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }],
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }],
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }],
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }],
              },
              {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }],
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }],
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }],
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }],
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }],
              },
              {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }],
              },
              {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }],
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }],
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }],
              },
              {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }],
              },
            ]
          });

          const marker = new google.maps.Marker({
            position: samsunLocation,
            map: map,
            title: 'Mimarlık Ofisi',
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#2563EB"/>
                  <path d="M20 8C15.58 8 12 11.58 12 16C12 22 20 30 20 30S28 22 28 16C28 11.58 24.42 8 20 8ZM20 18C18.9 18 18 17.1 18 16C18 14.9 18.9 14 20 14C21.1 14 22 14.9 22 16C22 17.1 21.1 18 20 18Z" fill="white"/>
                </svg>
              `),
              scaledSize: new google.maps.Size(40, 40),
              anchor: new google.maps.Point(20, 20)
            }
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="background-color: #1f2937; padding: 10px; max-width: 200px; border-radius: 8px; border: 1px solid #374151;">
                <h3 style="margin: 0 0 8px 0; color: #f3f4f6; font-weight: 600;">Mimarlık Ofisi</h3>
                <p style="margin: 0 0 5px 0; color: #d1d5db; font-size: 14px;">
                  Esenevler, İsmet İnönü Blv. No:14<br>
                  55200 Atakum / Samsun
                </p>
                <p style="margin: 5px 0 0 0; color: #60a5fa; font-size: 14px;">
                  📞 +90 312 123 45 67
                </p>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });

          mapInstanceRef.current = map;
        }
      } catch (error) {
        console.error('Google Maps yüklenirken hata oluştu:', error);
      }
    };

    initMap();
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-green-500/10 px-4 py-1 mb-4">
            <MapPin className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-sm font-medium text-green-400">Konum</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Bizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Ziyaret Edin</span>
          </h2>
          <p className="text-lg text-gray-400">Ofisimizi ziyaret etmek için haritayı kullanın</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div 
              ref={mapRef} 
              className="h-96 rounded-2xl shadow-2xl border border-gray-700"
              style={{ minHeight: '450px' }}
            />
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">İletişim Bilgileri</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">Adres</p>
                    <p className="text-sm text-gray-400">
                      Esenevler, İsmet İnönü Blv. No:14<br />
                      55200 Atakum / Samsun
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">Telefon</p>
                    <p className="text-sm text-gray-400">+90 312 123 45 67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">E-posta</p>
                    <p className="text-sm text-gray-400">info@mimarlikofisi.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">Çalışma Saatleri</p>
                    <p className="text-sm text-gray-400">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi: 09:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-2xl border border-blue-800">
              <h4 className="text-lg font-semibold text-blue-300 mb-3">Randevu Alın</h4>
              <p className="text-sm text-blue-400 mb-4">
                Projenizi detaylı görüşmek için ofisimize randevu alabilirsiniz.
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Randevu Al
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;