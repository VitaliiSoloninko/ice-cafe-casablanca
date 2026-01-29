import { provideRouter } from '@angular/router';
import type { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';

const meta: Meta<FooterComponent> = {
  component: FooterComponent,
  title: 'UI Layout/Footer',
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      ...story(),
      providers: [provideRouter([])],
    }),
  ],
};

export default meta;
type Story = StoryObj<FooterComponent>;

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
