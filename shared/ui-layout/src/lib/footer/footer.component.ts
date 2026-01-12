import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ROUTE_CONTACT,
  ROUTE_DESERT,
  ROUTE_DRINK,
  ROUTE_FOOD,
  ROUTE_ICE,
} from '@ice-cafe-casablanca/domain';
import {
  CakeSlice,
  CupSoda,
  Hamburger,
  IceCreamCone,
  LucideAngularModule,
  LucideIconData,
  MapPinned,
} from 'lucide-angular';

export interface FooterMenuItem {
  link: string;
  icon: LucideIconData;
}

@Component({
  selector: 'lib-footer',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  menuItems: FooterMenuItem[] = [
    {
      link: ROUTE_ICE,
      icon: IceCreamCone,
    },
    {
      link: ROUTE_DRINK,
      icon: CupSoda,
    },
    {
      link: ROUTE_DESERT,
      icon: CakeSlice,
    },
    {
      link: ROUTE_FOOD,
      icon: Hamburger,
    },
    {
      link: ROUTE_CONTACT,
      icon: MapPinned,
    },
  ];
}
