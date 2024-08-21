import { Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {CreateStringingFormComponent} from "./Components/create-stringing-form/create-stringing-form.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'stringing/create',
    component: CreateStringingFormComponent,
    title: "Create Stringing Form"
  }
];
