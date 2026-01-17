import { Component, input } from '@angular/core';
import { CafeImage } from '@ice-cafe-casablanca/domain';

@Component({
  selector: 'lib-image-item',
  standalone: true,
  templateUrl: './image-item.component.html',
  styleUrl: './image-item.component.scss',
})
export class ImageItemComponent {
  image = input<CafeImage>();
}
