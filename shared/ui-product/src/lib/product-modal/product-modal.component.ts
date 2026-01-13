import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '@ice-cafe-casablanca/domain';
import { ProductSliderComponent } from '../product-slider/product-slider.component';

@Component({
  selector: 'lib-product-modal',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe, ProductSliderComponent],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss',
})
export class ProductModalComponent {
  product = input<Product | null>(null);
  products = input<Product[]>([]);
  currentIndex = input<number>(0);
  indexChange = output<number>();
  closeModal = output<void>();

  onClose() {
    this.closeModal.emit();
  }

  onIndexChange(newIndex: number) {
    this.indexChange.emit(newIndex);
  }
}
