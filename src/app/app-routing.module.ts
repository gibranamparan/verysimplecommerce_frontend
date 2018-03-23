import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//components
import { ProductComponent } from './product/product.component'
import { ProductEditComponent } from './product/product-edit/product-edit.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'

//Route guards
import { AuthGuard } from './auth/guards/auth.guard'


const routes:Routes = [
  { path: 'login', component: LoginComponent } ,
  { path: "products", component: ProductComponent, canActivate: [AuthGuard] },
  { path: "products/edit/:id", component: ProductEditComponent },
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
