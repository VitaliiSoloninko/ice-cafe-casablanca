import { Route } from '@angular/router';
import { FeatureDrinks } from './feature-drinks/feature-drinks';
import { FeatureIce } from './feature-ice/feature-ice';

export const featureIceRoutes: Route[] = [{ path: '', component: FeatureIce }];

export const featureDrinksRoutes: Route[] = [
  { path: '', component: FeatureDrinks },
];
