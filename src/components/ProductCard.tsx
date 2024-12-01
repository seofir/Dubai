import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types/product';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.nameHe}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-right">{product.nameHe}</h2>
        <p className="text-gray-600 mb-4 text-right">{product.descriptionHe}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={() => addToCart(product, 20)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
          >
            <ShoppingCart size={20} />
            <span>הוסף לסל</span>
          </button>
          <span className="text-lg font-bold">₪{product.price}</span>
        </div>
      </div>
    </div>
  );
};