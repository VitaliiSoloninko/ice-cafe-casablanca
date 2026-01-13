import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
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
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}
