import { Component, input, output } from '@angular/core';
import { CafeImage } from '@ice-cafe-casablanca/domain';
import { ImageItemComponent } from '../image-item/image-item.component';

@Component({
  selector: 'lib-image-list',
  standalone: true,
  imports: [ImageItemComponent],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.scss',
})
export class ImageListComponent {
  images = input<CafeImage[]>([]);
  imageClick = output<CafeImage>();
}
