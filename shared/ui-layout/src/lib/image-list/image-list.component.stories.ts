import type { Meta, StoryObj } from '@storybook/angular';
import { ImageListComponent } from './image-list.component';

const meta: Meta<ImageListComponent> = {
  component: ImageListComponent,
  title: 'UI Layout/Image List',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ImageListComponent>;

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
  },
};

export const Empty: Story = {
  args: {
    images: [],
  },
};

export const SingleImage: Story = {
  args: {
    images: [mockImages[0]],
  },
};

export const TwoImages: Story = {
  args: {
    images: mockImages.slice(0, 2),
  },
};

export const ManyImages: Story = {
  args: {
    images: [
      ...mockImages,
      {
        id: 5,
        title: 'Pistachio Ice Cream',
        image: 'assets/images/ice/5.webp',
      },
      {
        id: 6,
        title: 'Mango Ice Cream',
        image: 'assets/images/ice/6.webp',
      },
    ],
  },
};
