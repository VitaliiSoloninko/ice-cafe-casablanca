import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '@ice-cafe-casablanca/domain';

@Component({
  selector: 'lib-product-item',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() product!: Product;
}
