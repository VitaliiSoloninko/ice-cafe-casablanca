import type { Meta, StoryObj } from '@storybook/angular';
import { ProductSliderComponent } from './product-slider.component';

const meta: Meta<ProductSliderComponent> = {
  component: ProductSliderComponent,
  title: 'UI Product/Product Slider',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ProductSliderComponent>;

const mockProducts = [
  {
    id: 1,
    name: 'Vanilla Ice Cream',
    description: 'Classic vanilla ice cream',
    price: 3.5,
    image: 'assets/images/ice/vanilla.jpeg',
  },
  {
    id: 2,
    name: 'Chocolate Ice Cream',
    description: 'Rich chocolate flavor',
    price: 4.0,
    image: 'assets/images/ice/chocolate.jpeg',
  },
  {
    id: 3,
    name: 'Strawberry Ice Cream',
    description: 'Fresh strawberry ice cream',
    price: 3.75,
    image: 'assets/images/ice/strawberry.jpeg',
  },
];

export const Default: Story = {
  args: {
    products: mockProducts,
    currentIndex: 0,
  },
};

export const MiddleProduct: Story = {
  args: {
    products: mockProducts,
    currentIndex: 1,
  },
};

export const LastProduct: Story = {
  args: {
    products: mockProducts,
    currentIndex: 2,
  },
};

export const SingleProduct: Story = {
  args: {
    products: [mockProducts[0]],
    currentIndex: 0,
  },
};

export const TwoProducts: Story = {
  args: {
    products: mockProducts.slice(0, 2),
    currentIndex: 0,
  },
};

export const ExpensiveProducts: Story = {
  args: {
    products: mockProducts.map((p) => ({ ...p, price: p.price * 2 })),
    currentIndex: 0,
  },
};
