import type { Meta, StoryObj } from '@storybook/angular';
import { ImageSliderComponent } from './image-slider.component';

const meta: Meta<ImageSliderComponent> = {
  component: ImageSliderComponent,
  title: 'UI Layout/Image Slider',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ImageSliderComponent>;

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
  {
    id: 4,
    title: 'Strawberry Ice Cream',
    image: 'assets/images/ice/4.webp',
  },
];

export const Default: Story = {
  args: {
    images: mockImages,
    currentIndex: 0,
  },
};

export const MiddleImage: Story = {
  args: {
    images: mockImages,
    currentIndex: 1,
  },
};

export const LastImage: Story = {
  args: {
    images: mockImages,
    currentIndex: 3,
  },
};

export const SingleImage: Story = {
  args: {
    images: [mockImages[0]],
    currentIndex: 0,
  },
};

export const TwoImages: Story = {
  args: {
    images: mockImages.slice(0, 2),
    currentIndex: 0,
  },
};
