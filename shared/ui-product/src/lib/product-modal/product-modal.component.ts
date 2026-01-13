import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  input,
  Output,
} from '@angular/core';
import { Product } from '@ice-cafe-casablanca/domain';

@Component({
  selector: 'lib-product-modal',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss',
})
export class ProductModalComponent {
  product = input<Product | null>(null);
  products = input<Product[]>([]);
  currentIndex = input<number>(0);

  @Output() closeModal = new EventEmitter<void>();
  @Output() indexChange = new EventEmitter<number>();

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.previousProduct();
    } else if (event.key === 'ArrowRight') {
      this.nextProduct();
    }
  }

  onClose() {
    this.closeModal.emit();
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
