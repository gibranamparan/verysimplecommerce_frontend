import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from '../../environments/environment'
import { TokenWebApi2 } from "../models/tokenWebApi2";
import 'rxjs/add/operator/map'
import { debug } from 'util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
@Injectable()
export class AuthService {
  static roleNames = { ADMIN:"Admin", BUYER:"Buyer" }

  serverDomain: string = environment.serverDomain
  apiUrl: string = environment.apiUrl
  ctrlUrl:string = this.apiUrl + "account/"


  constructor(private http:HttpClient) { }

  get isLoggedIn():boolean {
    return this.tokenData && this.tokenData.isTokenValid && !this.tokenData.isExpired;
  }

  get isAdmin():boolean {
    return this.tokenData.roleName == AuthService.roleNames.ADMIN;
  }
  get isBuyer():boolean {
    return this.tokenData.roleName == AuthService.roleNames.BUYER;
  }

  /**
   * Returns token data saved in local storage as a TokenWebApi2 instance
   */
  get tokenData():TokenWebApi2{
    let strTokenData = localStorage.getItem("currentUser");
    let tokenData : TokenWebApi2 = new TokenWebApi2(JSON.parse(strTokenData));
    return tokenData;
  }

  /**
   * Will return a HTTPOptions headers prepared to request to the server with authortization token
   * already included from the localStorage.
   * @param contentType Allows to modify contentType by default (application/json)
   */
  public getHttpHeadersWithToken(contentType?:string){
    let httpHeaders = new HttpHeaders();
    contentType = contentType ? contentType: 'application/json';
    let token = this.tokenData.access_token;
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': contentType, Authorization : 'Bearer ' + token })
    };
    return httpOptions;
  }

  /**
   * Takes credentials to request a token to the serverDomain given in the enviroment of the application,
   * saves in localStorage the tokenDate ir authentication was succes, and finally returns an observable 
   * wrapping a true or false whether the authentication was successful or not.
   * 
   * @param username 
   * @param password 
   */
  login(username: string, password: string){
    //Preparing body for HTTP Post Request
    const body = new HttpParams()
    .set('grant_type', "password")
    .set('username', username)
    .set('password', password);

    return this.http.post(`${this.serverDomain}token`, body.toString(), httpOptions)
      .map(
        (res:any) => {
          if(res.access_token){
            let token : TokenWebApi2 = new TokenWebApi2(res)
            token.setExpirationDate(res[".expires"])
            token.setIssuedDate(res[".issued"])
            localStorage.setItem('currentUser', JSON.stringify(token));
            console.log(token)
            return true
          }else{
            console.log("Unknown error:",res)
          }
          
          return false;
        },
        (error:any)=> {
          debugger
          console.log(error.error.errorDescription)
          return false;
        }
      )
  }

  /**
   * Removes token data from local storage and request server to revoke any claim
   * related with this token. 
   */
  logout() {
      // clear token remove user from local storage to log user out 
      return this.http.post(`${this.apiUrl}Account/Logout`, {}, this.getHttpHeadersWithToken())
        .map(res=>{
          console.log(res)
          localStorage.removeItem('currentUser');
          return true;
        },
        error=>{
          console.log(error)
          return false;
        }
      )
  }

}
