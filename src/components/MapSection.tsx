import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ofisimizi Ziyaret Edin</h2>
          <p className="text-gray-600">Ankara merkezde bulunan ofisimizde projenizi detaylı görüşebiliriz</p>
        </div>
        
        <div className="bg-gray-300 h-96 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-600">
              Çankaya Mahallesi, Mimarlık Sokak No:15<br />
              Çankaya / Ankara - Türkiye
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;