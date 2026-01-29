import { Product } from '@ice-cafe-casablanca/domain';
import type { Meta, StoryObj } from '@storybook/angular';
import { ProductItemComponent } from './product-item.component';

const meta: Meta<ProductItemComponent> = {
  component: ProductItemComponent,
  title: 'UI Product/Product Item',
  tags: ['autodocs'],
  argTypes: {
    product: {
      control: 'object',
      description: 'The product to display',
    },
  },
};

export default meta;
type Story = StoryObj<ProductItemComponent>;

const sampleProduct: Product = {
  id: 1,
  name: 'Schokoladeneis',
  description: 'Cremiges Schokoladeneis aus hochwertiger Schokolade',
  price: 3.5,
  image: 'assets/images/ice/chocolate.jpeg',
};

export const Default: Story = {
  args: {
    product: sampleProduct,
  },
};

export const Vanilla: Story = {
  args: {
    product: {
      id: 2,
      name: 'Vanilleeis',
      description: 'Klassisches Vanilleeis mit echten Vanilleschoten',
      price: 3.0,
      image: 'assets/images/ice/vanilla.jpeg',
    },
  },
};

export const Strawberry: Story = {
  args: {
    product: {
      id: 3,
      name: 'Erdbeereis',
      description: 'Frisches Erdbeereis aus reifen Erdbeeren',
      price: 3.8,
      image: 'assets/images/ice/strawberry.jpeg',
    },
  },
};

export const ExpensiveProduct: Story = {
  args: {
    product: {
      id: 4,
      name: 'Premium Pistazieneis',
      description: 'Exklusives Pistazieneis mit sizilianischen Pistazien',
      price: 5.5,
      image: 'assets/images/ice/pistachio.jpeg',
    },
  },
};

export const LongName: Story = {
  args: {
    product: {
      id: 5,
      name: 'Außergewöhnliches Schokoladen-Nuss-Karamell-Eis mit Sahne',
      description:
        'Eine außergewöhnliche Kombination aus Schokolade, gerösteten Nüssen und cremigem Karamell',
      price: 4.5,
      image: 'assets/images/ice/hagelnut.jpeg',
    },
  },
};
