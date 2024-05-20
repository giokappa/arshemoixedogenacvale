import { Product } from '../model/product.model';

export const product: Product[] = [
  {
    id: 1,
    categoryId: 1,
    name: 'მექსიკური',
    image: '../assets/1.jpg',
    total_amount: 1500,
    description: 'მექსიკურად შემწვარი კარტოფილი',
    tags: ['carne', 'grill'],
    create_at: null,
    delete_at: null,
  },
  {
    id: 2,
    categoryId: 1,
    name: 'წვადი',
    image: '../assets/2.jpg',
    total_amount: 1200,
    description: 'შაფრუზე შემწვარი ღორის ხორცი',
    tags: ['carne', 'grill'],
    create_at: null,
    delete_at: null,
  },
  {
    id: 3,
    categoryId: 3,
    name: 'ხინკალი',
    image: '../assets/3.jpg',
    total_amount: 1500,
    description: 'ქალაქური ხინკალი',
    tags: ['carne', 'grill'],
    create_at: null,
    delete_at: null,
  },
  {
    id: 4,
    categoryId: 2,
    name: 'ღვინო',
    image: '../assets/4.jpg',
    total_amount: 1500,
    description: 'ღვინო კალამი',
    tags: ['carne', 'grill'],
    create_at: null,
    delete_at: null,
  },
  {
    id: 5,
    categoryId: 3,
    name: 'იმერული ხაჭაპური',
    image: '../assets/5.jpg',
    total_amount: 1500,
    description: 'იმერული ყველით დამზადებული ხაჭაპური',
    tags: ['carne', 'grill'],
    create_at: null,
    delete_at: null,
  },
  {
    id: 6,
    categoryId: 4,
    name: 'ჩიფსი',
    image: '../assets/6.jpg',
    total_amount: 1500,
    description: 'ჩვენი საფირმო კარტოფილის ჩიფსი',
    tags: ['carne', 'grill'],
    create_at: null,
    delete_at: null,
  },
];