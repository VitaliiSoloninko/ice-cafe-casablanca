import { Component, OnInit, inject } from '@angular/core';
import { ICE_PRODUCTS } from '@ice-cafe-casablanca/data-access';
import { Product } from '@ice-cafe-casablanca/domain';
import { TitleComponent } from '@ice-cafe-casablanca/ui-layout';
import {
  ProductListComponent,
  ProductModalComponent,
} from '@ice-cafe-casablanca/ui-product';
import { SeoService } from '@ice-cafe-casablanca/util-seo';

@Component({
  selector: 'lib-feature-ice',
  standalone: true,
  imports: [TitleComponent, ProductListComponent, ProductModalComponent],
  templateUrl: './feature-ice.html',
  styleUrl: './feature-ice.scss',
})
export class FeatureIce implements OnInit {
  private readonly seoService = inject(SeoService);

  iceProducts: Product[] = [];
  selectedProductIndex: number | null = null;

  ngOnInit(): void {
    this.iceProducts = ICE_PRODUCTS;
    this.setSeo();
  }

  private setSeo(): void {
    this.seoService.setSeo({
      title: 'Eiscreme – Ice Cafe Casablanca',
      description:
        'Bestes Eis im Ice Cafe Casablanca. Frische Zutaten, große Auswahl an Geschmacksrichtungen. Probieren Sie unser hausgemachtes Eis!',
      keywords: 'Eiscreme, Eis, Ice Cafe Casablanca, Desserts, Süßigkeiten',
    });
  }

  onProductClick(product: Product): void {
    this.selectedProductIndex = this.iceProducts.findIndex(
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
      ? this.iceProducts[this.selectedProductIndex]
      : null;
  }
}
