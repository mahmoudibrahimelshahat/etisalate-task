import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users/user-details'
    },
    {
        title:'User Details',
        path: 'users/user-details',
        loadComponent: () => import('./components/users/user-details/user-details.component').then((e) => e.UserDetailsComponent)
    }
];
