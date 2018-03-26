import { Component, OnInit } from '@angular/core';
import { CartLocalService } from "../cart-local.service";
import { Product, ProductOrder } from '../../models/product'

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  get cart():Array<ProductOrder>{
    return this._cartLocalService.localCart
  }

  get totalCost():number{
    return this._cartLocalService.totalCost
  }
  constructor(private _cartLocalService:CartLocalService) { }

  ngOnInit() {
  }

  clearCart(){
    this._cartLocalService.clearCart()
  }
}
