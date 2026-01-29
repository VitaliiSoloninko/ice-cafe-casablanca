import { Component, input, output } from '@angular/core';
import { CafeImage } from '@ice-cafe-casablanca/domain';
import { ImageSliderComponent } from '../image-slider/image-slider.component';

@Component({
  selector: 'lib-image-modal',
  standalone: true,
  imports: [ImageSliderComponent],
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
}
