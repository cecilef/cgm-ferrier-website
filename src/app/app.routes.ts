import {Route} from '@angular/router';
import {AboutComponent} from './about/about.component';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about'
  }/*,
  {
    path: 'about',
    component: AboutComponent
  }*/
];
