import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './Services/products.service';
import { AuthService } from './Services/auth.service';
import { CartService } from './Services/cart.service';
import { CheckOutService } from './Services/check-out.service';
import { SearchService } from './Services/search.service';
import { UserService } from './Services/user.service';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService,
    AuthService,
    SearchService,
    CartService,
    UserService,
    CheckOutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
