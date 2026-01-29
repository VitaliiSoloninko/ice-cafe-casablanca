import { provideRouter } from '@angular/router';
import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  component: HeaderComponent,
  title: 'UI Layout/Header',
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      ...story(),
      providers: [provideRouter([])],
    }),
  ],
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {},
};

export const Desktop: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
