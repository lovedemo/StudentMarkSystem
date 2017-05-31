/**
 * Created by YZ on 2017/5/31.
 */
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
export const appRoutes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',//fallback router must in the last
    redirectTo: '/login',
    pathMatch: 'full'

  }
];
