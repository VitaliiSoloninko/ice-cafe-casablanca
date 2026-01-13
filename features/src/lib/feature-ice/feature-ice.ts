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
  selectedProduct: Product | null = null;

  ngOnInit(): void {
    this.iceProducts = ICE_PRODUCTS;
  }

  onProductClick(product: Product): void {
    this.selectedProduct = product;
  }

  onCloseModal(): void {
    this.selectedProduct = null;
  }
}
