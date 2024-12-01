import React from 'react';
import { Crown, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Crown size={24} className="text-gold" style={{ color: '#D4AF37' }} />
              <span className="text-xl font-bold">שוקולד דובאי</span>
            </div>
            <p className="text-gray-400">חוויה קולינרית יוקרתית מדובאי</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">צור קשר</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:0548719606" className="hover:text-gold transition">054-871-9606</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:ela@dubaichocolate.co.il" className="hover:text-gold transition">ela@dubaichocolate.co.il</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>קיבוץ גברעם</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gold transition" style={{ '--hover-color': '#D4AF37' }}>אודות</a></li>
              <li><a href="#" className="hover:text-gold transition" style={{ '--hover-color': '#D4AF37' }}>מוצרים</a></li>
              <li><a href="#" className="hover:text-gold transition" style={{ '--hover-color': '#D4AF37' }}>הזדמנויות עסקיות</a></li>
              <li><a href="#" className="hover:text-gold transition" style={{ '--hover-color': '#D4AF37' }}>צור קשר</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">שעות פעילות</h3>
            <ul className="space-y-2 text-gray-400">
              <li>ראשון - חמישי: 9:00 - 19:00</li>
              <li>שישי: 9:00 - 14:00</li>
              <li>שבת: סגור</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 שוקולד דובאי ישראל. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};