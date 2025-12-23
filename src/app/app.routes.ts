import { Routes } from '@angular/router';
import { Home } from './modules/views/main/home';

export const routes: Routes = [
       {
              redirectTo: "/home",
              pathMatch: "full",
              path: ""
       },
       {
              component: Home,
              path: "home"
       }
];
