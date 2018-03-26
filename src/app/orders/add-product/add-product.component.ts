import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product";
import { ProductService } from "../../product/product.service"
import { CartLocalService } from "../../orders/cart-local.service"
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product = new Product()
  qty:number = 0

  constructor(private _productService:ProductService,
    private _cartLocalService:CartLocalService,
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

  addProductToCart(){
    let cart = this._cartLocalService.addProduct(this.product, this.qty)
    this.router.navigate(["/products"])
  }
}
