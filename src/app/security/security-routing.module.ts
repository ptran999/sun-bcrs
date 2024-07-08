/**
 * Title: security-routing.module.ts
 * Author: Professor Krasso
 * Date: 8/5/23
 */

// imports statements
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
{
    path: '', // The default path for the Security component.
    component: SecurityComponent,
    children: [
      {
        path: '',
        component: SecurityComponent,
        title: 'BCRS: Security',
      },
      {
        path: 'signin',
        component: SigninComponent,
        title: 'BCRS: Security',
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: 'BCRS: RegisterComponent'
      }


    ],
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }

