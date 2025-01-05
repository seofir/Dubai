import React from 'react';
import { Crown, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Crown size={24} className="text-[#D4AF37]" aria-hidden="true" />
              <span className="text-xl font-bold">שוקולד דובאי</span>
            </div>
            <p className="text-gray-300">חוויה קולינרית יוקרתית מדובאי</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">צור קשר</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={16} aria-hidden="true" className="text-[#D4AF37]" />
                <a 
                  href="tel:0548719606" 
                  className="hover:text-[#D4AF37] transition focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                  aria-label="טלפון: 054-871-9606"
                >
                  054-871-9606
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} aria-hidden="true" className="text-[#D4AF37]" />
                <a 
                  href="mailto:ela@dubaichocolate.co.il" 
                  className="hover:text-[#D4AF37] transition focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                  aria-label="אימייל: ela@dubaichocolate.co.il"
                >
                  ela@dubaichocolate.co.il
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} aria-hidden="true" className="text-[#D4AF37]" />
                <span className="text-gray-300">קיבוץ גברעם</span>
              </div>
            </div>
          </div>
          <nav aria-label="קישורים מהירים">
            <h2 className="text-lg font-bold mb-4">קישורים מהירים</h2>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="hover:text-[#D4AF37] transition focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                >
                  אודות
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-[#D4AF37] transition focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                >
                  מוצרים
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-[#D4AF37] transition focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                >
                  הזדמנויות עסקיות
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-[#D4AF37] transition focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                >
                  צור קשר
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h2 className="text-lg font-bold mb-4">שעות פעילות</h2>
            <ul className="space-y-2 text-gray-300" aria-label="זמני פעילות">
              <li>ראשון - חמישי: 9:00 - 19:00</li>
              <li>שישי: 9:00 - 14:00</li>
              <li>שבת: סגור</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-300">
          <p>© 2024 שוקולד דובאי ישראל. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};
