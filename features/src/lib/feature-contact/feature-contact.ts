import { Component, OnInit, inject } from '@angular/core';
import { CAFE_IMAGES } from '@ice-cafe-casablanca/data-access';
import { CafeImage, SeoService } from '@ice-cafe-casablanca/domain';
import {
  CafeGalleryComponent,
  TitleComponent,
} from '@ice-cafe-casablanca/ui-layout';
import { ContactInfoComponent } from '../contact-info/contact-info';

@Component({
  selector: 'lib-feature-contact',
  standalone: true,
  imports: [TitleComponent, CafeGalleryComponent, ContactInfoComponent],
  templateUrl: './feature-contact.html',
  styleUrl: './feature-contact.scss',
})
export class FeatureContact implements OnInit {
  private readonly seoService = inject(SeoService, { optional: true });

  cafeImages: CafeImage[] = [];

  ngOnInit(): void {
    this.cafeImages = CAFE_IMAGES;
    this.setSeo();
  }

  private setSeo(): void {
    if (this.seoService) {
      this.seoService.setSeo({
        title: 'Kontakt – Ice Cafe Casablanca',
        description:
          'Kontaktieren Sie Ice Cafe Casablanca. Adresse, Telefon, Öffnungszeiten. Wir freuen uns auf Ihren Besuch in unserem gemütlichen Café!',
        keywords:
          'Kontakt, Ice Cafe Casablanca, Adresse, Telefon, Café Deutschland',
      });
    }
  }
}
