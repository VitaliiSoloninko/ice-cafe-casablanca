import type { Meta, StoryObj } from '@storybook/angular';
import { TitleComponent } from './title.component';

const meta: Meta<TitleComponent> = {
  component: TitleComponent,
  title: 'UI Layout/Title',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title text to display',
    },
  },
};

export default meta;
type Story = StoryObj<TitleComponent>;

export const Default: Story = {
  args: {
    title: 'Eiscafe Casablanca',
  },
};

export const Ice: Story = {
  args: {
    title: 'Eis',
  },
};

export const Drinks: Story = {
  args: {
    title: 'Getränke',
  },
};

export const Desserts: Story = {
  args: {
    title: 'Nachtisch',
  },
};

export const Food: Story = {
  args: {
    title: 'Essen',
  },
};

export const Contact: Story = {
  args: {
    title: 'Kontakte',
  },
};
