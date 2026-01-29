import { Component, HostListener, input, output } from '@angular/core';
import { CafeImage } from '@ice-cafe-casablanca/domain';

@Component({
  selector: 'lib-image-slider',
  standalone: true,
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
})
export class ImageSliderComponent {
  images = input<CafeImage[]>([]);
  currentIndex = input<number>(0);
  indexChange = output<number>();

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.previousImage();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
    }
  }

  nextImage() {
    const images = this.images();
    const currentIdx = this.currentIndex();
    if (images.length > 0 && currentIdx < images.length - 1) {
      this.indexChange.emit(currentIdx + 1);
    }
  }

  previousImage() {
    const currentIdx = this.currentIndex();
    if (currentIdx > 0) {
      this.indexChange.emit(currentIdx - 1);
    }
  }

  get hasPrevious(): boolean {
    return this.currentIndex() > 0;
  }

  get hasNext(): boolean {
    const images = this.images();
    return this.currentIndex() < images.length - 1;
  }

  get currentPosition(): string {
    return `${this.currentIndex() + 1} / ${this.images().length}`;
  }
}
