import { Component, Input, OnInit } from '@angular/core';
import { CafeImage } from '@ice-cafe-casablanca/domain';
import { ImageListComponent } from '../image-list/image-list.component';
import { ImageModalComponent } from '../image-modal/image-modal.component';

@Component({
  selector: 'lib-cafe-gallery',
  standalone: true,
  imports: [ImageListComponent, ImageModalComponent],
  templateUrl: './cafe-gallery.html',
  styleUrl: './cafe-gallery.scss',
})
export class CafeGalleryComponent implements OnInit {
  @Input() images: CafeImage[] = [];
  @Input() title: string = 'Unsere Galerie';

  selectedImageIndex: number | null = null;

  ngOnInit(): void {}

  onImageClick(image: CafeImage): void {
    this.selectedImageIndex = this.images.findIndex(
      (img) => img.id === image.id,
    );
  }

  onCloseModal(): void {
    this.selectedImageIndex = null;
  }

  onIndexChange(newIndex: number): void {
    this.selectedImageIndex = newIndex;
  }

  get selectedImage(): CafeImage | null {
    return this.selectedImageIndex !== null
      ? this.images[this.selectedImageIndex]
      : null;
  }
}
