import { Component } from '@angular/core';
import { FeatureIce } from '@ice-cafe-casablanca/feature-ice';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-ice',
  templateUrl: 'ice.page.html',
  styleUrls: ['ice.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FeatureIce],
})
export class IcePage {}
