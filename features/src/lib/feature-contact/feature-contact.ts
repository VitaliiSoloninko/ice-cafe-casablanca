import { Component, OnInit } from '@angular/core';
import { CAFE_IMAGES } from '@ice-cafe-casablanca/data-access';
import { CafeImage } from '@ice-cafe-casablanca/domain';
import {
  FooterComponent,
  HeaderComponent,
  ImageListComponent,
  ImageModalComponent,
  TitleComponent,
} from '@ice-cafe-casablanca/ui-layout';

@Component({
  selector: 'lib-feature-contact',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    ImageListComponent,
    ImageModalComponent,
  ],
  templateUrl: './feature-contact.html',
  styleUrl: './feature-contact.scss',
})
export class FeatureContact implements OnInit {
  cafeImages: CafeImage[] = [];
  selectedImageIndex: number | null = null;

  ngOnInit(): void {
    this.cafeImages = CAFE_IMAGES;
  }

  onImageClick(image: CafeImage): void {
    this.selectedImageIndex = this.cafeImages.findIndex(
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
      ? this.cafeImages[this.selectedImageIndex]
      : null;
  }
}
