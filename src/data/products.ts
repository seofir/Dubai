import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Dubai Gold Chocolate Box',
    nameHe: 'מארז שוקולד דובאי גולד',
    price: 299,
    description: 'Luxury Dubai chocolate box with gold dusting, perfect for special events',
    descriptionHe: 'מארז שוקולד דובאי יוקרתי עם אבקת זהב, מושלם לאירועים מיוחדים',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=800',
    weight: 500,
    inStock: true,
  },
  {
    id: '2',
    name: 'Premium Date Chocolate Collection',
    nameHe: 'קולקציית שוקולד תמרים פרימיום',
    price: 259,
    description: 'Premium chocolate filled with finest Emirates dates',
    descriptionHe: 'שוקולד פרימיום במילוי תמרים מובחרים מהאמירויות',
    image: 'https://images.unsplash.com/photo-1548907040-4d42bfc87a04?auto=format&fit=crop&q=80&w=800',
    weight: 400,
    inStock: true,
  },
  {
    id: '3',
    name: 'Luxury Assorted Pralines',
    nameHe: 'מארז פרלינים יוקרתי',
    price: 329,
    description: 'Handcrafted Dubai pralines in elegant gift box',
    descriptionHe: 'פרלינים בעבודת יד מדובאי בקופסת מתנה אלגנטית',
    image: 'https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&q=80&w=800',
    weight: 450,
    inStock: true,
  }
];