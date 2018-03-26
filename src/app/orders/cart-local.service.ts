import { Injectable } from '@angular/core';
import { Product, ProductOrder } from "../models/product";

@Injectable()
export class CartLocalService {
  private readonly itemIdentifier = "localCart"

  constructor() { }

  get localCart():Array<ProductOrder>{
    let cartStorage:Array<ProductOrder> = JSON.parse(localStorage.getItem(this.itemIdentifier))
    return cartStorage
  }

  get totalCost():number{
    let res = 0
    if(this.localCart.length){
      res = this.localCart.map(item=>item.product.price).reduce((itemA, itemB)=>{
        return itemA + itemB
      })
    }
    return res
  }

  addProduct(product:Product, qty : number){
    debugger
    let cartStorage:Array<ProductOrder> = JSON.parse(localStorage.getItem(this.itemIdentifier))
    if(!cartStorage){
      cartStorage = new Array<ProductOrder>()
    }
    cartStorage.push(new ProductOrder(qty,product))
    localStorage.setItem(this.itemIdentifier,JSON.stringify(cartStorage))

    return cartStorage
  }

  clearCart(){
    let cartStorage = new Array<ProductOrder>()
    localStorage.setItem(this.itemIdentifier,JSON.stringify(cartStorage))
    return cartStorage
  }

  removeCart(){
    localStorage.removeItem(this.itemIdentifier)
  }
}
