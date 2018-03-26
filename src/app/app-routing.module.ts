import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//components
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'



const routes:Routes = [
  { path: 'login', component: LoginComponent } ,
  { path: "", component: HomeComponent}
]

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
