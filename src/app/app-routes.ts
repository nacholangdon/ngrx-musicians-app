import { Routes } from '@angular/router';
import { provideBandsFeature } from './bands/store/bands';
import { provideMusiciansFeature } from './musicians/store/musicians';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'musicians',
  },
  {
    path: 'musicians',
    loadComponent: () =>
      import('./musicians/musicians.component').then(
        (c) => c.MusiciansComponent
      ),
    providers: [provideMusiciansFeature()],
  },
  {
    path: 'bands',
    loadComponent: () =>
      import('./bands/bands.component').then((c) => c.BandsComponent),
    providers: [provideBandsFeature()],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'musicians',
  },
];
