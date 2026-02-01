import { Routes } from '@angular/router';
import { ListForm } from '../list-form/list-form';
import { authGuardGuard } from '../service/auth-guard-guard';
import { Login } from '../login/login';

export const routes: Routes = [
    {
        path: 'list-details',
        canActivate: [authGuardGuard],
        component: ListForm
    },
    {
        path: 'login',
        component: Login
    }
];
