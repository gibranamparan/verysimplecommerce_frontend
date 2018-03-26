import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product'
import { ProductService } from '../product.service'
import { AuthService } from '../../auth/auth.service'
import { Router }  from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  @Input() products : Array<Product>

  constructor(private _productService:ProductService,
    private router:Router,
    private _authService:AuthService) { }

  get isAdmin():boolean{
    return this._authService.isAdmin
  }
  get isBuyer():boolean{
    return this._authService.isBuyer
  }

  ngOnInit() {
  }

  removeProduct(productID){
    this._productService.removeProduct(productID).subscribe(
      (res:any)=>{
        if(res.count){
          this.products = this.products.filter(item=>item.productID != productID)
        }
      },
      error=>console.log(error)
    )
  }

  goToEditProduct(productID){
    this.router.navigate(["/products/edit", productID])
  }
}
