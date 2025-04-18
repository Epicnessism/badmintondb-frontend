import { Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {CreateStringingFormComponent} from "./Components/create-stringing-form/create-stringing-form.component";
import {LoginPageComponent} from "./Components/login-page/login-page.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'Login'
  },
  {
    path: 'stringing/create',
    component: CreateStringingFormComponent,
    title: "Create Stringing Form"
  }
];
