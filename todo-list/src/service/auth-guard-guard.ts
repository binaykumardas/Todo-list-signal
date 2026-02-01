import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ListService } from './list-service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(ListService);
  const router = inject(Router);

  if(authService.isAuthenticated()) {
    return true;
  }

  router.navigate(['/login']);

  return false;
};
