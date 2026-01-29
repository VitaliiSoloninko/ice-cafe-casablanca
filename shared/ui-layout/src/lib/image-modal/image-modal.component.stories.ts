import type { Meta, StoryObj } from '@storybook/angular';
import { ImageModalComponent } from './image-modal.component';

const meta: Meta<ImageModalComponent> = {
  component: ImageModalComponent,
  title: 'UI Layout/Image Modal',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ImageModalComponent>;

const mockImages = [
  {
    id: 1,
    title: 'Ice Cream Sundae',
    image: 'assets/images/ice/1.webp',
  },
  {
    id: 2,
    title: 'Chocolate Ice Cream',
    image: 'assets/images/ice/2.webp',
  },
  {
    id: 3,
    title: 'Vanilla Cone',
    image: 'assets/images/ice/3.webp',
  },
];

export const Default: Story = {
  args: {
    image: mockImages[0],
    images: mockImages,
    currentIndex: 0,
  },
};

export const SecondImage: Story = {
  args: {
    image: mockImages[1],
    images: mockImages,
    currentIndex: 1,
  },
};

export const LastImage: Story = {
  args: {
    image: mockImages[2],
    images: mockImages,
    currentIndex: 2,
  },
};

export const SingleImage: Story = {
  args: {
    image: mockImages[0],
    images: [mockImages[0]],
    currentIndex: 0,
  },
};
