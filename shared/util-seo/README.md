# Util SEO Library

SEO utility library for Ice Cafe Casablanca project. Provides services and interfaces for managing page meta tags, titles, and SEO optimization.

## Overview

This library contains tools for:

- Setting page titles
- Managing meta descriptions
- Handling Open Graph tags for social media
- Setting canonical URLs
- Managing SEO keywords

## Components

### SeoData Interface

Interface for SEO metadata:

```typescript
export interface SeoData {
  title: string; // Page title
  description: string; // Meta description
  keywords?: string; // Keywords (optional)
  canonicalUrl?: string; // Canonical URL (optional)
  ogImage?: string; // Open Graph image (optional)
}
```

### SeoService

Service for managing SEO meta tags.

#### Methods

- `setSeo(data: SeoData): void` - Set SEO meta tags for the current page
- `resetSeo(): void` - Reset meta tags to default values

## Usage

### In Feature Components

Import and inject the service:

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '@ice-cafe-casablanca/util-seo';

@Component({
  selector: 'lib-feature-ice',
  standalone: true,
  templateUrl: './feature-ice.html',
})
export class FeatureIce implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.setSeo();
  }

  private setSeo(): void {
    this.seoService.setSeo({
      title: 'Eiscreme – Ice Cafe Casablanca',
      description: 'Bestes Eis in Deutschland. Frische Zutaten, große Auswahl an Geschmacksrichtungen.',
      keywords: 'Eiscreme, Eis, Ice Cafe Casablanca, Desserts',
    });
  }
}
```

## SEO Best Practices

### 1. Meta Tags (Required)

Each page should have:

- Unique `<title>` (50-60 characters)
- Unique `<meta name="description">` (150-160 characters)

### 2. H1 Headings

- One H1 per page
- H1 should describe the page content
- Used via `<lib-title>` component

### 3. Clean URLs

Good URLs:

- `/ice`
- `/desserts`
- `/drinks`
- `/contacts`

### 4. SSR/SSG

- Angular Universal (SSR) for dynamic content
- Static Site Generation (SSG) for static content

### 5. Image SEO

All images should have `alt` attributes:

```html
<img src="ice-cream.jpg" alt="Vanille-Eis Ice Cafe Casablanca" />
```

### 6. Local SEO

Contact page should include:

- Physical address
- Phone number
- Business hours
- Future: Schema.org markup for LocalBusiness

## Architecture

```
shared/util-seo/
  src/
    lib/
      models/
        seo-data.interface.ts      # SEO data interface
      utils/
        seo.service.ts             # SEO service
    index.ts                       # Public API
```

## Dependencies

- `@angular/core`
- `@angular/platform-browser` (Title, Meta services)

## Integration

This library is used across all feature pages:

- `features/feature-ice`
- `features/feature-food`
- `features/feature-dessert`
- `features/feature-drinks`
- `features/feature-contact`

## Future Enhancements

- [ ] Schema.org structured data support
- [ ] Twitter Card meta tags
- [ ] JSON-LD for rich snippets
- [ ] Breadcrumb navigation
- [ ] Sitemap generation
- [ ] Robots.txt configuration

## Running Tests

Run `nx test util-seo` to execute the unit tests.
