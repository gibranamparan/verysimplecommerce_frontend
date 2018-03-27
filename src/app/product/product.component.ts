import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product' 
import { ProductService } from "./product.service";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  newProduct : Product = new Product()
  products : Array<Product>
  showForm : boolean = false

  get isAdmin():boolean{
    return this._authService.isAdmin
  }
  get isBuyer():boolean{
    return this._authService.isBuyer
  }
  
  updateList(product){
    this.products.push(product)
  }

  constructor(private _productService:ProductService,
    private _authService:AuthService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    this._productService.getProducts().subscribe(
      (res:Array<Product>)=>{
        this.products = res
      },
      error=>console.log(error)
    )
  }

  toggleShowForm(){
    this.showForm = !this.showForm
  }

  createNewProduct(product){
    this._productService.createProduct(product).subscribe(
      (res:Product)=>{
        if(res.productID)
        {
          this.updateList(res)
          this.newProduct = new Product()
        }
      },
      error=>console.log(error)
    )
  }
}
