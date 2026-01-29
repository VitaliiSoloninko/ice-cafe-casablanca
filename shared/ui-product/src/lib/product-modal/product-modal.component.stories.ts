import { Product } from '@ice-cafe-casablanca/domain';
import type { Meta, StoryObj } from '@storybook/angular';
import { ProductModalComponent } from './product-modal.component';

const meta: Meta<ProductModalComponent> = {
  component: ProductModalComponent,
  title: 'UI Product/Product Modal',
  tags: ['autodocs'],
  argTypes: {
    product: {
      control: 'object',
      description: 'The current product to display',
    },
    products: {
      control: 'object',
      description: 'Array of all products for navigation',
    },
    currentIndex: {
      control: 'number',
      description: 'Current product index',
    },
    closeModal: {
      action: 'closeModal',
      description: 'Event emitted when modal is closed',
    },
    indexChange: {
      action: 'indexChange',
      description: 'Event emitted when product index changes',
    },
  },
};

export default meta;
type Story = StoryObj<ProductModalComponent>;

const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Schokoladeneis',
    description: 'Cremiges Schokoladeneis aus hochwertiger Schokolade',
    price: 3.5,
    image: 'assets/products/chocolate-ice.jpg',
  },
  {
    id: 2,
    name: 'Vanilleeis',
    description: 'Klassisches Vanilleeis mit echten Vanilleschoten',
    price: 3.0,
    image: 'assets/products/vanilla-ice.jpg',
  },
  {
    id: 3,
    name: 'Erdbeereis',
    description: 'Frisches Erdbeereis aus reifen Erdbeeren',
    price: 3.8,
    image: 'assets/products/strawberry-ice.jpg',
  },
];

export const Default: Story = {
  args: {
    product: sampleProducts[0],
    products: sampleProducts,
    currentIndex: 0,
  },
};

export const SecondProduct: Story = {
  args: {
    product: sampleProducts[1],
    products: sampleProducts,
    currentIndex: 1,
  },
};

export const LastProduct: Story = {
  args: {
    product: sampleProducts[2],
    products: sampleProducts,
    currentIndex: 2,
  },
};

export const LongDescription: Story = {
  args: {
    product: {
      id: 4,
      name: 'Premium Pistazieneis',
      description:
        'Exklusives Pistazieneis mit sizilianischen Pistazien. Hergestellt aus den besten Zutaten und mit viel Liebe zum Detail. Dieses Eis ist ein wahrer Genuss für alle Liebhaber von Pistazien und bietet ein unvergleichliches Geschmackserlebnis.',
      price: 5.5,
      image: 'assets/products/pistachio-ice.jpg',
    },
    products: sampleProducts,
    currentIndex: 0,
  },
};

export const NoProduct: Story = {
  args: {
    product: null,
    products: sampleProducts,
    currentIndex: 0,
  },
};
