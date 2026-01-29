# Storybook Documentation

## 📚 Overview

Storybook is configured for the UI libraries of the Ice Cafe Casablanca project. It allows you to develop and test components in isolation.

## 🚀 Running Storybook

### UI Layout Components

```bash
npx nx run ui-layout:storybook
```

Opens at: http://localhost:4401

### UI Product Components

```bash
npx nx run ui-product:storybook
```

Opens at: http://localhost:4402

### Web Application

```bash
npx nx run web:storybook
```

Opens at: http://localhost:4400

## 📦 Components with Stories

### UI Layout (shared/ui-layout)

- **Header** - Site navigation menu
  - Desktop/Mobile variants
- **Footer** - Bottom menu with icons
  - Desktop/Mobile variants
- **Title** - H1 page heading
  - Examples for all pages (Eis, Getränke, Nachtisch, Essen, Kontakte)

### UI Product (shared/ui-product)

- **Product Item** - Product card
  - Default, Vanilla, Strawberry, Expensive, Long Name variants
- **Product List** - Products list
  - Empty, Single, Two Products, Many Products variants
- **Product Modal** - Product details modal window
  - Default, Second Product, Last Product, Long Description, No Product variants

## 🏗️ File Structure

```
shared/
├── ui-layout/
│   ├── .storybook/
│   │   ├── main.ts          # Storybook configuration
│   │   ├── preview.ts       # Global settings
│   │   └── tsconfig.json
│   └── src/lib/
│       ├── header/
│       │   └── header.component.stories.ts
│       ├── footer/
│       │   └── footer.component.stories.ts
│       └── title/
│           └── title.component.stories.ts
└── ui-product/
    ├── .storybook/
    │   ├── main.ts
    │   ├── preview.ts
    │   └── tsconfig.json
    └── src/lib/
        ├── product-item/
        │   └── product-item.component.stories.ts
        ├── product-list/
        │   └── product-list.component.stories.ts
        └── product-modal/
            └── product-modal.component.stories.ts
```

## 🔧 Building Static Storybook

### UI Layout

```bash
npx nx run ui-layout:build-storybook
```

Output in: `dist/storybook/ui-layout`

### UI Product

```bash
npx nx run ui-product:build-storybook
```

Output in: `dist/storybook/ui-product`

### Web

```bash
npx nx run web:build-storybook
```

Output in: `dist/storybook/web`

## 📝 Creating New Stories

1. Create a `*.stories.ts` file next to your component:

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import { YourComponent } from './your.component';

const meta: Meta<YourComponent> = {
  component: YourComponent,
  title: 'Category/Your Component',
  tags: ['autodocs'],
  argTypes: {
    // Define controls for props
    yourProp: {
      control: 'text',
      description: 'Description of prop',
    },
  },
};

export default meta;
type Story = StoryObj<YourComponent>;

export const Default: Story = {
  args: {
    yourProp: 'default value',
  },
};
```

2. The story will automatically appear in Storybook

## 🎨 Features

- ✅ Isolated component development
- ✅ Automatic component documentation
- ✅ Interactive controls for props
- ✅ View different component states
- ✅ Desktop/Mobile testing
- ✅ Support for Angular Signals and Standalone components

## 🛠️ Technologies

- **Storybook**: 10.1.11
- **@storybook/angular**: 10.1.11
- **Framework**: Angular 21
- **Builder**: Webpack 5 + SWC
- **Monorepo**: Nx 22.3.3

## 📌 Useful Commands

```bash
# Run all Storybook instances
npx nx run-many --target=storybook

# Build all Storybook instances
npx nx run-many --target=build-storybook

# Check dependencies between components
npx nx graph
```

## 🐛 Troubleshooting

### Error "@vitest/mocker not found"

```bash
npm install --save-dev @vitest/mocker @vitest/spy vitest
```

### Port already in use

Change the port in `project.json`:

```json
"storybook": {
  "options": {
    "port": 4403  // New port
  }
}
```

## 📚 Additional Resources

- [Storybook for Angular](https://storybook.js.org/docs/angular/get-started/introduction)
- [Nx Storybook Plugin](https://nx.dev/recipes/storybook)
- [Angular Components Guide](https://angular.dev/guide/components)
