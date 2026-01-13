import { Component, HostListener, input, output } from '@angular/core';
import { Product } from '@ice-cafe-casablanca/domain';

@Component({
  selector: 'lib-product-slider',
  standalone: true,
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.scss',
})
export class ProductSliderComponent {
  products = input<Product[]>([]);
  currentIndex = input<number>(0);
  indexChange = output<number>();

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.previousProduct();
    } else if (event.key === 'ArrowRight') {
      this.nextProduct();
    }
  }

  nextProduct() {
    const products = this.products();
    const currentIdx = this.currentIndex();
    if (products.length > 0 && currentIdx < products.length - 1) {
      this.indexChange.emit(currentIdx + 1);
    }
  }

  previousProduct() {
    const currentIdx = this.currentIndex();
    if (currentIdx > 0) {
      this.indexChange.emit(currentIdx - 1);
    }
  }

  get hasPrevious(): boolean {
    return this.currentIndex() > 0;
  }

  get hasNext(): boolean {
    const products = this.products();
    return this.currentIndex() < products.length - 1;
  }

  get currentPosition(): string {
    return `${this.currentIndex() + 1} / ${this.products().length}`;
  }
}
