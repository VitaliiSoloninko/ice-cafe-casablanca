import { Product } from '@ice-cafe-casablanca/domain';
import type { Meta, StoryObj } from '@storybook/angular';
import { ProductListComponent } from './product-list.component';

const meta: Meta<ProductListComponent> = {
  component: ProductListComponent,
  title: 'UI Product/Product List',
  tags: ['autodocs'],
  argTypes: {
    products: {
      control: 'object',
      description: 'Array of products to display',
    },
    productClick: {
      action: 'productClick',
      description: 'Event emitted when a product is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<ProductListComponent>;

const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Schokoladeneis',
    description: 'Cremiges Schokoladeneis aus hochwertiger Schokolade',
    price: 3.5,
    image: 'assets/images/ice/chocolate.jpeg',
  },
  {
    id: 2,
    name: 'Vanilleeis',
    description: 'Klassisches Vanilleeis mit echten Vanilleschoten',
    price: 3.0,
    image: 'assets/images/ice/vanilla.jpeg',
  },
  {
    id: 3,
    name: 'Erdbeereis',
    description: 'Frisches Erdbeereis aus reifen Erdbeeren',
    price: 3.8,
    image: 'assets/images/ice/strawberry.jpeg',
  },
  {
    id: 4,
    name: 'Pistazieneis',
    description: 'Exklusives Pistazieneis mit sizilianischen Pistazien',
    price: 4.2,
    image: 'assets/images/ice/pistachio.jpeg',
  },
  {
    id: 5,
    name: 'Haselnusseis',
    description: 'Cremiges Haselnusseis mit gerösteten Haselnüssen',
    price: 3.6,
    image: 'assets/images/ice/hagelnut.jpeg',
  },
  {
    id: 6,
    name: 'Zitroneneis',
    description: 'Erfrischendes Zitroneneis mit frischen Zitronen',
    price: 3.2,
    image: 'assets/images/ice/mango.jpeg',
  },
];

export const Default: Story = {
  args: {
    products: sampleProducts,
  },
};

export const Empty: Story = {
  args: {
    products: [],
  },
};

export const SingleProduct: Story = {
  args: {
    products: [sampleProducts[0]],
  },
};

export const TwoProducts: Story = {
  args: {
    products: [sampleProducts[0], sampleProducts[1]],
  },
};

export const ManyProducts: Story = {
  args: {
    products: [
      ...sampleProducts,
      ...sampleProducts.map((p) => ({ ...p, id: p.id + 10 })),
      ...sampleProducts.map((p) => ({ ...p, id: p.id + 20 })),
    ],
  },
};
