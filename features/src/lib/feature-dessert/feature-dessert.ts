import { Component, OnInit, inject } from '@angular/core';
import { DESSERT_PRODUCTS } from '@ice-cafe-casablanca/data-access';
import { Product, SeoService } from '@ice-cafe-casablanca/domain';
import { TitleComponent } from '@ice-cafe-casablanca/ui-layout';
import {
  ProductListComponent,
  ProductModalComponent,
} from '@ice-cafe-casablanca/ui-product';

@Component({
  selector: 'lib-feature-dessert',
  standalone: true,
  imports: [TitleComponent, ProductListComponent, ProductModalComponent],
  templateUrl: './feature-dessert.html',
  styleUrl: './feature-dessert.scss',
})
export class FeatureDessert implements OnInit {
  private readonly seoService = inject(SeoService, { optional: true });

  dessertProducts: Product[] = [];
  selectedProductIndex: number | null = null;

  ngOnInit(): void {
    this.dessertProducts = DESSERT_PRODUCTS;
    this.setSeo();
  }

  private setSeo(): void {
    if (this.seoService) {
      this.seoService.setSeo({
        title: 'Desserts – Ice Cafe Casablanca',
        description:
          'Hausgemachte Desserts im Ice Cafe Casablanca. Köstliche Süßigkeiten, Torten, Kuchen. Mit Liebe zubereitet!',
        keywords:
          'Desserts, Nachtisch, Ice Cafe Casablanca, Torten, Kuchen, Süßigkeiten',
      });
    }
  }

  onProductClick(product: Product): void {
    this.selectedProductIndex = this.dessertProducts.findIndex(
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
      ? this.dessertProducts[this.selectedProductIndex]
      : null;
  }
}
