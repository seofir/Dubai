import React, { useState } from 'react';
import { Crown, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Crown className="text-gold" size={32} style={{ color: '#D4AF37' }} />
            <h1 className="text-2xl md:text-3xl font-bold" style={{ color: '#D4AF37' }}>שוקולד דובאי</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 lg:gap-8">
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

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-gold transition"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="block text-gray-700 hover:text-gold transition" style={{ '--hover-color': '#D4AF37' }}>ראשי</a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-gold transition" style={{ '--hover-color': '#D4AF37' }}>המוצרים שלנו</a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-gold transition" style={{ '--hover-color': '#D4AF37' }}>הזדמנויות עסקיות</a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-gold transition" style={{ '--hover-color': '#D4AF37' }}>צור קשר</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
