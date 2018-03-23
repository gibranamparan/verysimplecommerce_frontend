import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product'
import { Category } from '../../models/category'

import { ProductService } from "../product.service";
import { CategoryService } from "../category.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() product : Product
  @Output() onSubmitProduct = new EventEmitter<Product>()
  categories : Array<Category>
  
  get editMode():Boolean{
    return this.product.productID > 0
  }

  constructor(private _productService:ProductService,
    private _categoryService:CategoryService) { 
  }

  ngOnInit() {
    this._categoryService.getCategories().subscribe(
      (res:Array<Category>)=>{ this.categories = res }
    )
  }

  createProduct(){
    this.onSubmitProduct.emit(this.product)
  }
}
