import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent implements OnInit {
  @Input() title = '';
  titleLetters: string[] = [];

  ngOnInit(): void {
    // Split title into individual letters
    this.titleLetters = this.title.split('');
  }
}
