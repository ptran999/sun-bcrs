/**
 * Title: app.module.ts
 * Author: Professor Krasso
 * Date: 8/5/23
 */

// imports statements
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { NavComponent } from './layouts/nav/nav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { ServiceComponent } from './service/service.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseLayoutComponent,
    NavComponent,
    FooterComponent,
    FaqComponent,
    EmployeeDirectoryComponent,
    ServiceComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
