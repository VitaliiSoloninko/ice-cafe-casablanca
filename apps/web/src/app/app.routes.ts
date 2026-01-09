import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ice',
    loadComponent: () =>
      import('@ice-cafe-casablanca/feature-ice').then((m) => m.FeatureIce),
  },
  {
    path: 'drink',
    loadComponent: () =>
      import('@ice-cafe-casablanca/feature-drinks').then(
        (m) => m.FeatureDrinks,
      ),
  },
  {
    path: 'food',
    loadComponent: () =>
      import('@ice-cafe-casablanca/feature-food').then((m) => m.FeatureFood),
  },
  {
    path: 'desert',
    loadComponent: () =>
      import('@ice-cafe-casablanca/feature-dessert').then(
        (m) => m.FeatureDessert,
      ),
  },
  {
    path: '',
    redirectTo: 'ice',
    pathMatch: 'full',
  },
];
