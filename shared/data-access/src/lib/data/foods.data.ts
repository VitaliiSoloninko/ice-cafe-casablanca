import { Product } from '@ice-cafe-casablanca/domain';

export const FOOD_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'ATLANTICO SANDWICH',
    description: 'Thunfisch, Tomaten, Zwiebeln, Oliven, Pommes',
    price: 760 / 100,
    image: 'assets/images/food/ATLANTICO.jpg',
  },
  {
    id: 2,
    name: 'POULET SANDWICH',
    description: 'Hähnchenbrustfilet, Pommes',
    price: 850 / 100,
    image: 'assets/images/food/POULET.jpg',
  },
  {
    id: 3,
    name: 'ORIENTAL SANDWICH',
    description: 'Hackfleisch, Paprikasoße',
    price: 870 / 100,
    image: 'assets/images/food/ORIENTAL.jpg',
  },
  {
    id: 4,
    name: 'POMMES',
    description: '',
    price: 500 / 100,
    image: 'assets/images/food/POMMES.jpg',
  },
];
