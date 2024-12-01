import React from 'react';
import { Star, Gift, AlertCircle } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';

export const PromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/90 rounded-lg p-6 shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="text-[#D4AF37]" size={28} />
            <h2 className="text-3xl font-bold">מבצע מיוחד!</h2>
            <Star className="text-[#D4AF37]" size={28} />
          </div>
          
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">שוקולד דובאי פרימיום - מהדורה מוגבלת</h3>
            
            <div className="flex justify-center items-center gap-6 my-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#D4AF37]">{formatCurrency(40)}</p>
                <p className="text-sm">ליחידה</p>
              </div>
              
              <div className="text-center border-r border-l border-gray-300 px-6">
                <Gift size={32} className="mx-auto mb-2 text-[#D4AF37]" />
                <p className="font-semibold">מינימום הזמנה:</p>
                <p className="text-xl font-bold">100 יחידות</p>
              </div>
              
              <div className="text-center">
                <p className="font-semibold">סוג אחד בלבד</p>
                <p className="text-sm">לבחירתכם</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="font-semibold">✨ איכות מעולה, טעם משובח</p>
              <p className="font-semibold">✨ אריזה מהודרת</p>
            </div>
            
            <div className="mt-6">
              <button className="bg-[#D4AF37] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#C19B20] transition">
                להזמנות ומידע נוסף
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600">
              <AlertCircle size={16} />
              <p>המלאי מוגבל | המחיר כולל מע"מ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};