import { Route } from '@angular/router';
import { FeatureContact } from './feature-contact/feature-contact';
import { FeatureDessert } from './feature-dessert/feature-dessert';
import { FeatureDrinks } from './feature-drinks/feature-drinks';
import { FeatureFood } from './feature-food/feature-food';
import { FeatureIce } from './feature-ice/feature-ice';

export const featureIceRoutes: Route[] = [{ path: '', component: FeatureIce }];

export const featureDrinksRoutes: Route[] = [
  { path: '', component: FeatureDrinks },
];

export const featureFoodRoutes: Route[] = [
  { path: '', component: FeatureFood },
];

export const featureDessertRoutes: Route[] = [
  { path: '', component: FeatureDessert },
];

export const featureContactRoutes: Route[] = [
  { path: '', component: FeatureContact },
];
