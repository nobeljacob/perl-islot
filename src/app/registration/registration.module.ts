import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RouterModule } from "@angular/router";
import { routes } from "./registration.routes";
import { AdminRegistrationComponent } from './pages/admin-registration/admin-registration.component';
import { InterviewerRegistrationComponent } from './pages/interviewer-registration/interviewer-registration.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LandingPageComponent, LoginPageComponent, AdminRegistrationComponent, InterviewerRegistrationComponent]
})
export class RegistrationModule { }
