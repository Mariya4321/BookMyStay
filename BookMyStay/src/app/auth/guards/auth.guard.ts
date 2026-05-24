import { Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const isLoggedIn = false;
  if (isLoggedIn) return true;

  return router.parseUrl('/auth/login');
};

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private readonly router: Router) {}

  canActivate(): boolean | UrlTree {
    const isLoggedIn = false;
    if (isLoggedIn) return true;
    return this.router.parseUrl('/auth/login');
  }
}
