import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ROUTE_CONTACT,
  ROUTE_DESERT,
  ROUTE_DRINK,
  ROUTE_FOOD,
  ROUTE_ICE,
} from '@ice-cafe-casablanca/domain';

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
  menuItems: MenuItem[] = [
    {
      name: 'Eis',
      link: ROUTE_ICE,
    },
    {
      name: 'Getränke',
      link: ROUTE_DRINK,
    },
    {
      name: 'Nachtisch',
      link: ROUTE_DESERT,
    },
    {
      name: 'Essen',
      link: ROUTE_FOOD,
    },
    {
      name: 'Kontakte',
      link: ROUTE_CONTACT,
    },
  ];
}
