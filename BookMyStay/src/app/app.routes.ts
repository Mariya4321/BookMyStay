import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule) },
  { path: '**', redirectTo: '' }
];
