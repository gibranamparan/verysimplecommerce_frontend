import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Additional from default modules
import { FormsModule } from '@angular/forms'

//Child router
import { OrdersRoutingModule } from './orders-routing.module';

//Custom made components
import { AddProductComponent } from './add-product/add-product.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

//Custom made services
import { CartLocalService } from "./cart-local.service";
import { PurchaseService } from "./purchase.service";
import { PurchasesHistoryComponent } from './purchases-history/purchases-history.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,FormsModule
  ],
  declarations: [AddProductComponent, OrderSummaryComponent, OrderSuccessComponent, PurchasesHistoryComponent, PurchaseDetailsComponent],
  providers : [
    CartLocalService, PurchaseService
  ]
})
export class OrdersModule { }
