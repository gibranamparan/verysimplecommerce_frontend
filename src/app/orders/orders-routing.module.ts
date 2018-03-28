import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Custom made components
import { AddProductComponent } from './add-product/add-product.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { PurchasesHistoryComponent } from './purchases-history/purchases-history.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component'

//Custom Guards
import { AuthGuard } from '../auth/guards/auth.guard';
import { BuyerGuard } from '../auth/guards/buyer.guard';

const routes: Routes = [
  {path:'order/add-product/:id', component: AddProductComponent, canActivate: [BuyerGuard]},
  {path:'order/order-summary', component: OrderSummaryComponent, canActivate: [BuyerGuard]},
  {path:'order/order-success', component: OrderSuccessComponent, canActivate: [BuyerGuard]},
  {path:'order/purchases-history', component: PurchasesHistoryComponent, canActivate: [AuthGuard]},
  {path:'order/purchase-details/:id', component: PurchaseDetailsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
