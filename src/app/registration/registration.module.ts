import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingPageComponent, LoginPageComponent]
})
export class RegistrationModule { }
