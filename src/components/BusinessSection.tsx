import React from 'react';
import { Building2, Users, Package } from 'lucide-react';

export const BusinessSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">הזדמנויות עסקיות</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Building2 size={48} className="mx-auto mb-4 text-gold" style={{ color: '#D4AF37' }} />
            <h3 className="text-xl font-bold mb-4">זכיינות</h3>
            <p className="text-gray-600">הצטרפו למשפחת שוקולד דובאי כזכיין בלעדי באזורכם</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Users size={48} className="mx-auto mb-4 text-gold" style={{ color: '#D4AF37' }} />
            <h3 className="text-xl font-bold mb-4">אירועים מיוחדים</h3>
            <p className="text-gray-600">פתרונות מותאמים אישית לאירועים גדולים (מינימום 100 יחידות)</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Package size={48} className="mx-auto mb-4 text-gold" style={{ color: '#D4AF37' }} />
            <h3 className="text-xl font-bold mb-4">מתנות תאגידיות</h3>
            <p className="text-gray-600">פתרונות מתנות יוקרתיים לחברות ועסקים</p>
          </div>
        </div>
      </div>
    </div>
  );
};