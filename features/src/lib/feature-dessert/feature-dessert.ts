import { Component, OnInit } from '@angular/core';
import { DESSERT_PRODUCTS } from '@ice-cafe-casablanca/data-access';
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
  selector: 'lib-feature-dessert',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    ProductListComponent,
    ProductModalComponent,
  ],
  templateUrl: './feature-dessert.html',
  styleUrl: './feature-dessert.scss',
})
export class FeatureDessert implements OnInit {
  dessertProducts: Product[] = [];
  selectedProduct: Product | null = null;

  ngOnInit(): void {
    this.dessertProducts = DESSERT_PRODUCTS;
  }

  onProductClick(product: Product): void {
    this.selectedProduct = product;
  }

  onCloseModal(): void {
    this.selectedProduct = null;
  }
}
