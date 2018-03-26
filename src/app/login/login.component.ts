import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { TokenWebApi2 } from "../models/tokenWebApi2";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string
  password:string
  errorMessage : string
  
  get showErrorMessage():boolean{
    return this.errorMessage && this.errorMessage.length > 0;
  }

  constructor(private _authService:AuthService,
    private router:Router) { }

  ngOnInit() {
  }

  login(){
    this._authService.login(this.username, this.password)
    .subscribe(
      (res:any)=>{
        if(res){
          this.errorMessage = ''
          this.router.navigate(["/products"])
        }else{
          console.log(res)
        }
      },
      (error:any)=>{
        if(error.error.error_description){
          this.errorMessage = error.error.error_description;
        }else{
          this.errorMessage = "Unknown error."
        }
        console.log(error);
      }
    )
  }
}
