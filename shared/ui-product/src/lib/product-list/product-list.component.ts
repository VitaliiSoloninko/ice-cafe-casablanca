import { Component, input, output } from '@angular/core';
import { Product } from '@ice-cafe-casablanca/domain';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'lib-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products = input<Product[]>([]);
  productClick = output<Product>();
}
