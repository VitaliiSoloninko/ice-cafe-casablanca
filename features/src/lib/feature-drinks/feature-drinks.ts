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
  selectedProduct: Product | null = null;

  ngOnInit(): void {
    this.drinksProducts = COLD_DRINKS;
    this.hotDrinksProducts = HOT_DRINKS;
    this.teaProducts = TEA;
  }

  onProductClick(product: Product): void {
    this.selectedProduct = product;
  }

  onCloseModal(): void {
    this.selectedProduct = null;
  }
}
