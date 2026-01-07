export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export type ProductCategory = 'ice' | 'food' | 'drink' | 'dessert';
