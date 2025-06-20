import React from 'react';
import { Building, Users, Award, CheckCircle } from 'lucide-react';

const ValueSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Değerlerimiz</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <Building className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Kalite</h3>
            <p className="text-gray-600">En yüksek kalite standartlarında projeler üretiyoruz.</p>
          </div>
          
          <div className="text-center p-6">
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Güven</h3>
            <p className="text-gray-600">Müşterilerimizle uzun vadeli güven ilişkisi kuruyoruz.</p>
          </div>
          
          <div className="text-center p-6">
            <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Yenilik</h3>
            <p className="text-gray-600">Modern teknoloji ve yaratıcı çözümler sunuyoruz.</p>
          </div>
          
          <div className="text-center p-6">
            <CheckCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sürdürülebilirlik</h3>
            <p className="text-gray-600">Çevre dostu ve sürdürülebilir tasarımlar önceliyoruz.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;