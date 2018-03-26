import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenWebApi2 } from "./models/tokenWebApi2";

import { AuthService } from './auth/auth.service'
import { CartLocalService } from './orders/cart-local.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tokenData:TokenWebApi2

  constructor(private _authService:AuthService,
    private _cartLocalService:CartLocalService,
    private router:Router){ }

  get isLoggedIn():boolean{
    return this._authService.isLoggedIn;
  }

  get token():TokenWebApi2{
    return this._authService.tokenData;
  }

  get userName() : string{
    let res = ''
    if(this.token != undefined){
      res = this.token.userName;
    }
    return res;
  }
  
  get totalQty():number{
    let res = 0;
    let cart = this._cartLocalService.localCart
    if(cart.length){
      res = cart.map(item=>item.qty).reduce((itemA, itemB)=>{
        return itemA + itemB
      })
    }
    return res
  }

  ngOnInit(): void { }

  logOut(){
    this._authService.logout().subscribe(
      res=>{
        if(res){
          this.tokenData = this._authService.tokenData
          this.router.navigate(["/login"])
        }else{
          console.log("Unknown error")
        }
      },
      error=>{
        console.log(error)
      }
    )
  }

  goToSummary(){
    this.router.navigate(["/order/order-summary"])
  }
}
