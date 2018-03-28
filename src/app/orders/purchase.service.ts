import { Injectable } from '@angular/core';
import { Product } from "../models/product";
import { Purchase } from "../models/purchase";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment'
import { AuthService } from "../auth/auth.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class PurchaseService {
  apiUrl: string = environment.apiUrl
  ctrlUrl:string = this.apiUrl + "purchases/"

  constructor(private http:HttpClient,
    private _authService:AuthService) { }

  createPurchase(purchase:Purchase){
    return this.http.post(`${this.ctrlUrl}`, purchase, this._authService.getHttpHeadersWithToken())
  }

  getPurchases(){
    return this.http.get(`${this.ctrlUrl}`, this._authService.getHttpHeadersWithToken())
  }

  removePurchase(id): any {
    return this.http.delete(`${this.ctrlUrl}${id}`, this._authService.getHttpHeadersWithToken())
  }

  getPurchase(id): any {
    return this.http.get(`${this.ctrlUrl}${id}`, this._authService.getHttpHeadersWithToken())
  }
}
