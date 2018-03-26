import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service'
import { TokenWebApi2 } from "./models/tokenWebApi2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tokenData:TokenWebApi2

  get isLoggedIn():boolean{
    return this._authService.isLoggedIn;
  }

  get token():TokenWebApi2{
    return this._authService.tokenData;
  }

  get userName() : string{
    let res = ''
    if(this.token != undefined){
      res = this.token.userName;
    }
    return res;
  }

  constructor(private _authService:AuthService,
    private router:Router){ }

  ngOnInit(): void { }

  logOut(){
    this._authService.logout().subscribe(
      res=>{
        if(res){
          debugger
          this.tokenData = this._authService.tokenData
          this.router.navigate(["/login"])
        }else{
          console.log("Unknown error")
        }
      },
      error=>{
        console.log(error)
      }
    )
  }
}
