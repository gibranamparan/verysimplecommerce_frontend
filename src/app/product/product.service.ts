import { Injectable } from '@angular/core';
import { Product } from "../models/product";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment'
import { AuthService } from "../auth/auth.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class ProductService {
  apiUrl: string = environment.apiUrl
  ctrlUrl:string = this.apiUrl + "products/"

  constructor(private http:HttpClient,
    private _authService:AuthService) { }

  getProducts(){ 
    return this.http.get(`${this.ctrlUrl}`)
  }

  getProduct(productID){ 
    return this.http.get(`${this.ctrlUrl}${productID}`)
  }

  createProduct(product : Product){ 
    return this.http.post(`${this.ctrlUrl}`, product, this._authService.getHttpHeadersWithToken())
  }

  editProduct(product : Product){
    return this.http.put(`${this.ctrlUrl}`, product, this._authService.getHttpHeadersWithToken())
  }

  removeProduct(productID){
    return this.http.delete(`${this.ctrlUrl}${productID}`, this._authService.getHttpHeadersWithToken())
  }
}
