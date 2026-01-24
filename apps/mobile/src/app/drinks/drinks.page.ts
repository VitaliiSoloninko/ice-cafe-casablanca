import { Component } from '@angular/core';
import { FeatureDrinks } from '@ice-cafe-casablanca/feature-drinks';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-drinks',
  templateUrl: 'drinks.page.html',
  styleUrls: ['drinks.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FeatureDrinks],
})
export class DrinksPage {}