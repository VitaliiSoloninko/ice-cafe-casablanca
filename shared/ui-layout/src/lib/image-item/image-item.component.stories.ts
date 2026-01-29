import type { Meta, StoryObj } from '@storybook/angular';
import { ImageItemComponent } from './image-item.component';

const meta: Meta<ImageItemComponent> = {
  component: ImageItemComponent,
  title: 'UI Layout/Image Item',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ImageItemComponent>;

export const Default: Story = {
  args: {
    image: {
      id: 1,
      title: 'Ice Cream Sundae',
      image: 'assets/images/ice/1.webp',
    },
  },
};

export const ChocolateIceCream: Story = {
  args: {
    image: {
      id: 2,
      title: 'Chocolate Ice Cream',
      image: 'assets/images/ice/2.webp',
    },
  },
};

export const Dessert: Story = {
  args: {
    image: {
      id: 3,
      title: 'Delicious Dessert',
      image: 'assets/images/desserts/1.webp',
    },
  },
};

export const Drink: Story = {
  args: {
    image: {
      id: 4,
      title: 'Fresh Drink',
      image: 'assets/images/drinks/1.webp',
    },
  },
};

export const LongTitle: Story = {
  args: {
    image: {
      id: 5,
      title: 'Premium Handcrafted Artisanal Ice Cream with Extra Toppings',
      image: 'assets/images/ice/3.webp',
    },
  },
};
