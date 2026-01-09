import { Component, OnInit } from '@angular/core';
import { FOOD_PRODUCTS } from '@ice-cafe-casablanca/data-access';
import { Product } from '@ice-cafe-casablanca/domain';
import {
  FooterComponent,
  HeaderComponent,
  TitleComponent,
} from '@ice-cafe-casablanca/ui-layout';
import { ProductListComponent } from '@ice-cafe-casablanca/ui-product';

@Component({
  selector: 'lib-feature-food',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    ProductListComponent,
  ],
  templateUrl: './feature-food.html',
  styleUrl: './feature-food.scss',
})
export class FeatureFood implements OnInit {
  foodProducts: Product[] = [];

  ngOnInit(): void {
    this.foodProducts = FOOD_PRODUCTS;
  }

  onProductClick(product: Product): void {
    console.log('Product clicked:', product);
  }
}
