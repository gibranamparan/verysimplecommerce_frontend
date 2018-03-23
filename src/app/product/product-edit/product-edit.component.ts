import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from "../../models/product";
import { ProductService } from "../product.service"

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product:Product = new Product()

  constructor(private _productService:ProductService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    let productID
    this.route.params.subscribe(
      params => productID = params.id
    )
    this.loadProduct(productID)
  }

  loadProduct(productID){
    this._productService.getProduct(productID).subscribe(
      (res:Product) => {
        this.product = res
        console.log(this.product)
      },
      error => console.log(error)
    )
  }

  submitChanges(product){
    this._productService.editProduct(product).subscribe(
      (res:any) => {
        if(res.count){
          this.router.navigate(["/products"])
        }
      },
      error => console.log(error)
    )
  }

}
