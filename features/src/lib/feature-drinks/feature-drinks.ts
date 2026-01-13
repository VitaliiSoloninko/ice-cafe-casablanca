import { Component, OnInit } from '@angular/core';
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
import {
  COLD_DRINKS,
  HOT_DRINKS,
  TEA,
} from 'shared/data-access/src/lib/data/drinks.data';

@Component({
  selector: 'lib-feature-drinks',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    ProductListComponent,
    ProductModalComponent,
  ],
  templateUrl: './feature-drinks.html',
  styleUrl: './feature-drinks.scss',
})
export class FeatureDrinks implements OnInit {
  drinksProducts: Product[] = [];
  hotDrinksProducts: Product[] = [];
  teaProducts: Product[] = [];
  selectedProductIndex: number | null = null;
  allProducts: Product[] = [];

  ngOnInit(): void {
    this.drinksProducts = COLD_DRINKS;
    this.hotDrinksProducts = HOT_DRINKS;
    this.teaProducts = TEA;
    this.allProducts = [
      ...this.drinksProducts,
      ...this.hotDrinksProducts,
      ...this.teaProducts,
    ];
  }

  onProductClick(product: Product): void {
    this.selectedProductIndex = this.allProducts.findIndex(
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
      ? this.allProducts[this.selectedProductIndex]
      : null;
  }
}
