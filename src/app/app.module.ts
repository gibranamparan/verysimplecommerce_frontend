import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Additional from default modules
import { AuthService } from './auth/auth.service'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './/app-routing.module';

//Additional from default modules
import { FormsModule } from '@angular/forms'

//Custom made modules
import { ProductModule } from './product/product.module'
import { OrdersModule } from './orders/orders.module'

//Default Component
import { AppComponent } from './app.component';

//Custom made components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

//custom guards
import { AdminGuard } from './auth/guards/admin.guard'
import { AuthGuard } from './auth/guards/auth.guard'


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
    ProductModule,
    OrdersModule
  ],
  providers: [
    AuthService, AdminGuard, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
