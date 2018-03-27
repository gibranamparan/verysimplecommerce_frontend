import { Injectable } from '@angular/core';
import { Product, ProductOrder } from "../models/product";

@Injectable()
export class CartLocalService {
  private readonly itemIdentifier = "localCart"

  constructor() { }

  get localCart():Array<ProductOrder>{
    let cartStorage:Array<ProductOrder> = JSON.parse(localStorage.getItem(this.itemIdentifier))
    return (cartStorage ? cartStorage : new Array<ProductOrder>())
  }

  get totalCost():number{
    let res = 0
    if(this.localCart && this.localCart.length){
      res = this.localCart.map(item=>item.product.price).reduce((itemA, itemB)=>{
        return itemA + itemB
      })
    }
    return res
  }

  addProduct(product:Product, qty : number){
    let cartStorage:Array<ProductOrder> = JSON.parse(localStorage.getItem(this.itemIdentifier))
    if(!cartStorage){
      cartStorage = new Array<ProductOrder>()
    }
    let productFound = this.findProduct(product.productID,cartStorage)
    if(productFound){
      productFound.qty += qty
    }else{
      cartStorage.push(new ProductOrder(qty,product))
    }
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

  removeFromCart(productID){
    let cart = this.localCart
    let prod = this.findProduct(productID,cart)
    if(prod){
      cart = cart.filter(item=>item.product.productID != productID)
      localStorage.setItem(this.itemIdentifier,JSON.stringify(cart))
    }
    return cart;
  }

  findProduct(productID, cart?){
    let res = undefined
    cart = cart ? cart : this.localCart
    if(cart.length){
      res = cart.filter(item=>item.product.productID == productID)[0]
    }
    return res;
  }
}
