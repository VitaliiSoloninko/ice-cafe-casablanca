import { Component, OnInit, inject } from '@angular/core';
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
import { SeoService } from '@ice-cafe-casablanca/util-seo';
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
  private readonly seoService = inject(SeoService);

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
    this.setSeo();
  }

  private setSeo(): void {
    this.seoService.setSeo({
      title: 'Getränke – Ice Cafe Casablanca',
      description:
        'Erfrischende Getränke im Ice Cafe Casablanca. Kalte und heiße Getränke, Tee, Kaffee. Perfekte Ergänzung zu Desserts!',
      keywords: 'Getränke, Drinks, Ice Cafe Casablanca, Kaffee, Tee, Limonade',
    });
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
