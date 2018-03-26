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

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,FormsModule
  ],
  declarations: [AddProductComponent, OrderSummaryComponent, OrderSuccessComponent],
  providers : [
    CartLocalService
  ]
})
export class OrdersModule { }
