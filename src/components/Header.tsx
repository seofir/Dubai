import React from 'react';
import { Crown } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Crown className="text-gold" size={32} style={{ color: '#D4AF37' }} />
            <h1 className="text-3xl font-bold" style={{ color: '#D4AF37' }}>שוקולד דובאי</h1>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <a href="#" className="text-gray-700 hover:text-gold transition" style={{ '--hover-color': '#D4AF37' }}>ראשי</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gold transition" style={{ '--hover-color': '#D4AF37' }}>המוצרים שלנו</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gold transition" style={{ '--hover-color': '#D4AF37' }}>הזדמנויות עסקיות</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gold transition" style={{ '--hover-color': '#D4AF37' }}>צור קשר</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};