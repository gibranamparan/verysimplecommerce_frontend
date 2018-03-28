import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PurchaseService } from "../purchase.service";
import { Purchase } from '../../models/purchase';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-purchases-history',
  templateUrl: './purchases-history.component.html',
  styleUrls: ['./purchases-history.component.css']
})
export class PurchasesHistoryComponent implements OnInit {
  purchases : Array<Purchase>
  get isAdmin():boolean{
    return this._authService.isAdmin
  }
  constructor(private _purchaseService:PurchaseService,
    private _authService:AuthService) { }

  ngOnInit() {
    this._purchaseService.getPurchases().subscribe(
      res=>{
        console.log(res)
        this.purchases = res as Array<Purchase>;
      },
      err=>{
        console.log(err)
      }
    )
  }

  deletePurchase(id){
    this._purchaseService.removePurchase(id).subscribe(
      res=>{
        if(res){
          console.log(res)
          this.purchases = this.purchases.filter(item=>item.purchaseID != id)
        }
      },
      err=>{
        console.log(err)
      }
    )
  }

}
