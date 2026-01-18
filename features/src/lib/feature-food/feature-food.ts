import { Component, OnInit, inject } from '@angular/core';
import { FOOD_PRODUCTS } from '@ice-cafe-casablanca/data-access';
import { Product } from '@ice-cafe-casablanca/domain';
import {
  FooterComponent,
  HeaderComponent,
  TitleComponent,
} from '@ice-cafe-casablanca/ui-layout';
import {
  ProductListComponent,
  ProductModalComponent,
} from '@ice-cafe-casablanca/ui-product';
import { SeoService } from '@ice-cafe-casablanca/util-seo';

@Component({
  selector: 'lib-feature-food',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    ProductListComponent,
    ProductModalComponent,
  ],
  templateUrl: './feature-food.html',
  styleUrl: './feature-food.scss',
})
export class FeatureFood implements OnInit {
  private readonly seoService = inject(SeoService);

  foodProducts: Product[] = [];
  selectedProductIndex: number | null = null;

  ngOnInit(): void {
    this.foodProducts = FOOD_PRODUCTS;
    this.setSeo();
  }

  private setSeo(): void {
    this.seoService.setSeo({
      title: 'Essen – Ice Cafe Casablanca',
      description:
        'Leckeres Essen im Ice Cafe Casablanca. Frische Gerichte, hochwertige Produkte, hausgemachte Atmosphäre.',
      keywords: 'Essen, Food, Ice Cafe Casablanca, Gerichte, Café',
    });
  }

  onProductClick(product: Product): void {
    this.selectedProductIndex = this.foodProducts.findIndex(
      (p) => p.id === product.id,
    );
  }

  onCloseModal(): void {
    this.selectedProductIndex = null;
  }

  onIndexChange(newIndex: number): void {
    this.selectedProductIndex = newIndex;
  }

  get selectedProduct(): Product | null {
    return this.selectedProductIndex !== null
      ? this.foodProducts[this.selectedProductIndex]
      : null;
  }
}
