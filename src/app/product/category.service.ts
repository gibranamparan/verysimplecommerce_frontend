import { Injectable } from '@angular/core';
import { Category } from "../models/category";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment'

@Injectable()
export class CategoryService {

  apiUrl: string = environment.apiUrl
  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get(`${this.apiUrl}categories`)
  }
}
