import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface MenuItem {
  name: string;
  link: string;
}

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  openMenu = false;

  menuItems: MenuItem[] = [
    {
      name: 'Eis',
      link: 'ice',
    },
    {
      name: 'Getränke',
      link: 'drink',
    },
    {
      name: 'Nachtisch',
      link: 'desert',
    },
    {
      name: 'Essen',
      link: 'food',
    },
    {
      name: 'Kontakte',
      link: 'contact',
    },
  ];
}
