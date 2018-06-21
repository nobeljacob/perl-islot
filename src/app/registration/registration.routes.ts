import { Route } from '@angular/router';
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AdminRegistrationComponent } from "./pages/admin-registration/admin-registration.component";
import { InterviewerRegistrationComponent } from "./pages/interviewer-registration/interviewer-registration.component";

export const routes: Route[] = [
    {
        path:'',
        component: LandingPageComponent
    },
    {
        path:'login',
        component: LoginPageComponent
    },
    {
        path:'signupInterviewer',
        component: InterviewerRegistrationComponent 
    },
   {
    path:'signupAdmin',
    component: AdminRegistrationComponent
   }
    
];