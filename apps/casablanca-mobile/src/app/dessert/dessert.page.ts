import { Component } from '@angular/core';
import { FeatureDessert } from '@ice-cafe-casablanca/feature-dessert';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dessert',
  templateUrl: 'dessert.page.html',
  styleUrls: ['dessert.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FeatureDessert],
})
export class DessertPage {}