/**
 * Title: app-routing.module.ts
 * Author: Professor Krasso
 * Date: 8/5/23
 */

// imports statements
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { ServiceComponent } from './service/service.component';
import { RegisterComponent } from './register/register.component';

// routes array with a path, component, and title for each route in the application (e.g. home, about, contact, etc.)
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'BCRS: Home' // title for the home page
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'BCRS: Home'
      },
      {
        path: 'faq',
        component: FaqComponent,
        title: 'BCRS: Faq'
      },
      {
        path: 'employee-directory',
        component: EmployeeDirectoryComponent,
        title: 'BCRS: EmployeeDirectoryComponent'
      },
      {
        path: 'service',
        component: ServiceComponent,
        title: 'BCRS: ServiceComponent'
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: 'BCRS: RegisterComponent'
      },

    ]
  },
  {
    // path for the security module (e.g. login, register, forgot password, etc.)
    path: 'security',
    loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
