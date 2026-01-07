import { Component, OnInit } from '@angular/core';
import { ICE_PRODUCTS } from '@ice-cafe-casablanca/data-access';
import { Product } from '@ice-cafe-casablanca/domain';
import {
  FooterComponent,
  HeaderComponent,
  TitleComponent,
} from '@ice-cafe-casablanca/ui-layout';
import { ProductListComponent } from '@ice-cafe-casablanca/ui-product';

@Component({
  selector: 'lib-feature-ice',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    ProductListComponent,
  ],
  templateUrl: './feature-ice.html',
  styleUrl: './feature-ice.scss',
})
export class FeatureIce implements OnInit {
  iceProducts: Product[] = [];
  pageTitle = 'Морозиво';

  ngOnInit(): void {
    this.iceProducts = ICE_PRODUCTS;
  }

  onProductClick(product: Product): void {
    console.log('Product clicked:', product);
    // TODO: відкрити modal з деталями
  }
}
