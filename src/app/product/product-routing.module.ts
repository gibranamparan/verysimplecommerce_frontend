import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Custom made components
import { ProductComponent } from './product.component'
import { ProductEditComponent } from './product-edit/product-edit.component'

//Route guards
import { AuthGuard } from '../auth/guards/auth.guard'
import { AdminGuard } from '../auth/guards/admin.guard'

const routes: Routes = [
  { path: "products", component: ProductComponent, canActivate: [AuthGuard] },
  { path: "products/edit/:id", component: ProductEditComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
