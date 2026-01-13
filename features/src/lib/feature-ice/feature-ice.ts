import { Component, OnInit } from '@angular/core';
import { ICE_PRODUCTS } from '@ice-cafe-casablanca/data-access';
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

@Component({
  selector: 'lib-feature-ice',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    ProductListComponent,
    ProductModalComponent,
  ],
  templateUrl: './feature-ice.html',
  styleUrl: './feature-ice.scss',
})
export class FeatureIce implements OnInit {
  iceProducts: Product[] = [];
  selectedProductIndex: number | null = null;

  ngOnInit(): void {
    this.iceProducts = ICE_PRODUCTS;
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
