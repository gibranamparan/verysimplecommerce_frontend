import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Purchase } from "../../models/Purchase";
import { PurchaseService } from "../purchase.service";

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.css']
})
export class PurchaseDetailsComponent implements OnInit {
  purchase : Purchase

  constructor(private route : ActivatedRoute,
    private _purchaseService : PurchaseService) { }

  ngOnInit() {
    let purchaseID
    this.route.params.subscribe(
      params => { purchaseID = params.id}
    )
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
