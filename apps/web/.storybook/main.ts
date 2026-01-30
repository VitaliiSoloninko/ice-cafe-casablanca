import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/app/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../../shared/**/src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../../features/src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],
  addons: [],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  staticDirs: [{ from: '../../../shared/assets/src/lib', to: '/assets' }],
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
