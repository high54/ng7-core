import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromAuthPages from './core/auth/pages';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'authentication' },
  {
    path: 'authentication',
    component: fromAuthPages.AppLoginComponent
  },
  {
    path: '**',
    loadChildren: './core/errors/errors.module#ErrorsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
