import { Component, OnInit } from '@angular/core';
import { CAFE_IMAGES } from '@ice-cafe-casablanca/data-access';
import { CafeImage } from '@ice-cafe-casablanca/domain';
import {
  CafeGalleryComponent,
  FooterComponent,
  HeaderComponent,
  TitleComponent,
} from '@ice-cafe-casablanca/ui-layout';
import { ContactInfoComponent } from '../contact-info/contact-info';

@Component({
  selector: 'lib-feature-contact',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    CafeGalleryComponent,
    ContactInfoComponent,
  ],
  templateUrl: './feature-contact.html',
  styleUrl: './feature-contact.scss',
})
export class FeatureContact implements OnInit {
  cafeImages: CafeImage[] = [];

  ngOnInit(): void {
    this.cafeImages = CAFE_IMAGES;
  }
}
