import { Component, input, output } from '@angular/core';
import { CafeImage } from '@ice-cafe-casablanca/domain';
import { ProductSliderComponent } from '@ice-cafe-casablanca/ui-product';

@Component({
  selector: 'lib-image-modal',
  standalone: true,
  imports: [ProductSliderComponent],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.scss',
})
export class ImageModalComponent {
  image = input<CafeImage | null>(null);
  images = input<CafeImage[]>([]);
  currentIndex = input<number>(0);
  indexChange = output<number>();
  closeModal = output<void>();

  onClose() {
    this.closeModal.emit();
  }

  onIndexChange(newIndex: number) {
    this.indexChange.emit(newIndex);
  }

  get imagesAsProducts() {
    return this.images().map((img) => ({
      id: img.id,
      name: img.title,
      description: '',
      price: 0,
      image: img.image,
    }));
  }
}
