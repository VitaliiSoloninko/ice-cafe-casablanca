import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'ice',
        loadComponent: () => import('./ice/ice.page').then((m) => m.IcePage),
      },
      {
        path: 'drinks',
        loadComponent: () =>
          import('./drinks/drinks.page').then((m) => m.DrinksPage),
      },
      {
        path: '',
        redirectTo: 'ice',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
