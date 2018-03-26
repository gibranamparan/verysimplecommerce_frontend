import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { BuyerGuard } from '../auth/guards/buyer.guard';

const routes: Routes = [
  {path:'order/', component: AddProductComponent, canActivate: [BuyerGuard], canActivateChild: [BuyerGuard]},
  {path:'order/add-product/:id', component: AddProductComponent},
  {path:'order/order-summary', component: OrderSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
