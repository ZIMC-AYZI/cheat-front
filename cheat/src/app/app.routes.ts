import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/core/pages/home-page/home-page.component').then((m) => m.HomePageComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('../app/core/pages/technology-details-page/technology-details-page.component').then((m) => m.TechnologyDetailsPageComponent)
  },
  {
    path: 'create',
    loadComponent: () =>
      import('../app/core/pages/article-create/article-create.component').then((m) => m.ArticleCreateComponent)
  }
];
