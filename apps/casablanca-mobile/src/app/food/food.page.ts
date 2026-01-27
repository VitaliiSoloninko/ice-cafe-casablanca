import { Component } from '@angular/core';
import { FeatureFood } from '@ice-cafe-casablanca/feature-food';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-food',
  templateUrl: 'food.page.html',
  styleUrls: ['food.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FeatureFood],
})
export class FoodPage {}