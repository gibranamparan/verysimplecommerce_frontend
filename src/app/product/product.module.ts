import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Additional from default modules
import { FormsModule } from '@angular/forms'

//Custom made components
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product.component';

//Custom made Services
import { ProductService } from "./product.service";
import { CategoryService } from "./category.service";
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ListProductsComponent,
    ProductFormComponent,
    ProductComponent,
    ProductEditComponent],
    providers:[
      ProductService,
      CategoryService
    ]
})
export class ProductModule { }
