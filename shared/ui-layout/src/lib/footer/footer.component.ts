import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CakeSlice,
  CupSoda,
  Hamburger,
  IceCreamCone,
  LucideAngularModule,
  MapPinned,
} from 'lucide-angular';

@Component({
  selector: 'lib-footer',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly iceCreamCone = IceCreamCone;
  readonly cupSoda = CupSoda;
  readonly cakeSlice = CakeSlice;
  readonly hamburger = Hamburger;
  readonly mapPinned = MapPinned;
}
