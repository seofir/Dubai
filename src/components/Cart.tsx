import React from 'react';
import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="text-center p-8 text-gray-500">
        <p className="text-xl">הסל שלך ריק</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4 text-right">סל קניות</h2>
      {items.map((item) => (
        <div key={item.product.id} className="flex justify-between items-center border-b py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => removeFromCart(item.product.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity - 20)}
                disabled={item.quantity <= 20}
                className="text-blue-500 hover:text-blue-700 disabled:text-gray-400"
              >
                <MinusCircle size={20} />
              </button>
              <span className="w-12 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity + 20)}
                className="text-blue-500 hover:text-blue-700"
              >
                <PlusCircle size={20} />
              </button>
            </div>
          </div>
          <div className="text-right">
            <h3 className="font-bold">{item.product.nameHe}</h3>
            <p className="text-gray-600">₪{item.product.price * item.quantity}</p>
          </div>
        </div>
      ))}
      <div className="mt-6 text-right">
        <p className="text-xl font-bold">סה"כ: ₪{getTotalPrice()}</p>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full">
          המשך לתשלום
        </button>
      </div>
    </div>
  );
};