import React from 'react';
import { Crown, Gift, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Chocolate"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">שוקולד דובאי היוקרתי</h1>
          <p className="text-xl mb-8">חוויה קולינרית יוקרתית ישירות מדובאי לאירועים המיוחדים שלכם</p>
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <Crown size={32} className="mx-auto mb-2" />
              <p>איכות פרימיום</p>
            </div>
            <div className="text-center">
              <Gift size={32} className="mx-auto mb-2" />
              <p>אריזות מהודרות</p>
            </div>
            <div className="text-center">
              <Phone size={32} className="mx-auto mb-2" />
              <p>ליווי אישי</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button className="bg-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition" style={{ backgroundColor: '#D4AF37' }}>
              הזמינו עכשיו
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition">
              שיתוף פעולה עסקי
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};