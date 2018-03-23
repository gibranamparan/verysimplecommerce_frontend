import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Additional from default modules
import { AuthService } from './auth/auth.service'
import { AuthGuard } from './auth/guards/auth.guard'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './/app-routing.module';

//Additional from default modules
import { FormsModule } from '@angular/forms'

//Custom made modules
import { ProductModule } from './product/product.module'

//Default Component
import { AppComponent } from './app.component';

//Custom made components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,

    //Custom made components
    HomeComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,

    //Custom made modules
    ProductModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
