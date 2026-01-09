import { Component, OnInit } from '@angular/core';
import { Product } from '@ice-cafe-casablanca/domain';
import {
  FooterComponent,
  HeaderComponent,
  TitleComponent,
} from '@ice-cafe-casablanca/ui-layout';
import { ProductListComponent } from '@ice-cafe-casablanca/ui-product';
import { COLD_DRINKS } from 'shared/data-access/src/lib/data/drinks.data';

@Component({
  selector: 'lib-feature-drinks',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    ProductListComponent,
  ],
  templateUrl: './feature-drinks.html',
  styleUrl: './feature-drinks.scss',
})
export class FeatureDrinks implements OnInit {
  drinksProducts: Product[] = [];

  ngOnInit(): void {
    this.drinksProducts = COLD_DRINKS;
  }

  onProductClick(product: Product): void {
    console.log('Product clicked:', product);
  }
}
