import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartLocalService } from "../cart-local.service";
import { PurchaseService } from "../purchase.service";
import { Product, ProductOrder } from '../../models/product'
import { Purchase } from '../../models/purchase'

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  purchase : Purchase

  get cart():Array<ProductOrder>{
    return this._cartLocalService.localCart
  }

  get totalCost():number{
    return this._cartLocalService.totalCost
  }
  constructor(private _cartLocalService:CartLocalService,
    private _purchaseService:PurchaseService,
    private router:Router) { }

  ngOnInit() {
  }

  clearCart(){
    this._cartLocalService.clearCart()
  }

  removeFromOrder(productID){
    this._cartLocalService.removeFromCart(productID)
  }

  orderNow(){
    this.purchase = new Purchase(this.cart)
    this._purchaseService.createPurchase(this.purchase).subscribe(
      res=>{
        console.log(res)
        debugger
        this._cartLocalService.removeCart()
        this.router.navigate(["/order/order-success"])
      },
      error => {
        debugger
        console.log(error)
      }
    )
  }
}
