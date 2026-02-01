import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  title = input('');
}
