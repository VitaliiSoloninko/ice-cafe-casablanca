import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoData } from '../models/seo-data.interface';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  setSeo(data: SeoData): void {
    if (data.title) {
      this.titleService.setTitle(data.title);
    }

    if (data.description) {
      this.metaService.updateTag({
        name: 'description',
        content: data.description,
      });
    }

    if (data.keywords) {
      this.metaService.updateTag({
        name: 'keywords',
        content: data.keywords,
      });
    }

    if (data.canonicalUrl) {
      this.setCanonicalUrl(data.canonicalUrl);
    }

    this.setOpenGraphTags(data);
  }

  /* Set Open Graph meta tags for social media sharing */
  private setOpenGraphTags(data: SeoData): void {
    if (data.title) {
      this.metaService.updateTag({
        property: 'og:title',
        content: data.title,
      });
    }

    if (data.description) {
      this.metaService.updateTag({
        property: 'og:description',
        content: data.description,
      });
    }

    if (data.ogImage) {
      this.metaService.updateTag({
        property: 'og:image',
        content: data.ogImage,
      });
    }

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }

  /* Set canonical URL to avoid duplicate content issues */
  private setCanonicalUrl(url: string): void {
    // Remove existing canonical link if any
    const existingLink = document.querySelector('link[rel="canonical"]');
    if (existingLink) {
      existingLink.remove();
    }

    // Create and append new canonical link
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }

  /* Reset meta tags to default values */
  resetSeo(): void {
    this.titleService.setTitle('Ice Cafe Casablanca');
    this.metaService.updateTag({
      name: 'description',
      content:
        'Ice Cafe Casablanca — Eiscreme, Desserts, Getränke. Gemütliches Café, frische Zutaten.',
    });
  }
}
