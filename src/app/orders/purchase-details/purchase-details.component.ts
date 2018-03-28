import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Purchase } from "../../models/purchase";
import { PurchaseService } from "../purchase.service";
import { Product, ProductOrder } from '../../models/product';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.css']
})
export class PurchaseDetailsComponent implements OnInit {
  purchase : Purchase = new Purchase(new Array<ProductOrder>())

  constructor(private route : ActivatedRoute,
    private _purchaseService : PurchaseService) { }

  ngOnInit() {
    let purchaseID
    this.route.params.subscribe(
      params => { purchaseID = params.id}
    )
    this.loadPurchase(purchaseID)
  }

  loadPurchase(purchaseID){
    this._purchaseService.getPurchase(purchaseID).subscribe(
      (res:Purchase) => {
        this.purchase = res
        console.log(this.purchase)
      },
      error => console.log(error)
    )
  }

}
