import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from '../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
@Injectable()
export class AuthService {
  serverDomain: string = environment.serverDomain
  apiUrl: string = environment.apiUrl
  ctrlUrl:string = this.apiUrl + "account/"
  constructor(private http:HttpClient) { }

  get isLoggedIn() {
    return true;
  }

  get isSuperAdmin() {
    return true;
  }

  login2(username: string, password: string){
    const body = new HttpParams()
    .set('grant_type', "password")
    .set('username', username)
    .set('password', password);

    debugger
    return this.http.post(`${this.serverDomain}token`,body.toString(),httpOptions)
    .subscribe(
      res=>{
        console.log(res)
      },
      error=> console.log(error)
    )
  }
/*
  login(username: string, password: string): Observable<boolean> {
      return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
          .map((response: Response) => {
              // login successful if there's a jwt token in the response
              let token = response.json() && response.json().token;
              if (token) {
                  // set token property
                  this.token = token;

                  // store username and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                  // return true to indicate successful login
                  return true;
              } else {
                  // return false to indicate failed login
                  return false;
              }
          });
  }
  logout(): void {
      // clear token remove user from local storage to log user out
      this.token = null;
      localStorage.removeItem('currentUser');
  }
*/

}
