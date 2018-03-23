import { Injectable } from '@angular/core';
import { Product } from "../models/product";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {
  apiUrl: string = environment.apiUrl
  ctrlUrl:string = this.apiUrl + "products/"
  constructor(private http:HttpClient) { }

  getProducts(){ 
    return this.http.get(`${this.ctrlUrl}`)
  }

  getProduct(productID){ 
    return this.http.get(`${this.ctrlUrl}${productID}`)
  }

  createProduct(product : Product){ 
    return this.http.post(`${this.ctrlUrl}`, product, httpOptions)
  }

  editProduct(product : Product){
    return this.http.put(`${this.ctrlUrl}`, product, httpOptions)
  }

  removeProduct(productID){ 
    return this.http.delete(`${this.ctrlUrl}${productID}`, httpOptions)
  }
}
