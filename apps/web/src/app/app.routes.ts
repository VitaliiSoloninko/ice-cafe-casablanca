import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ice',
    loadComponent: () =>
      import('@ice-cafe-casablanca/feature-ice').then((m) => m.FeatureIce),
  },
  {
    path: '',
    redirectTo: 'ice',
    pathMatch: 'full',
  },
];
