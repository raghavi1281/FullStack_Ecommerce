import { NgModule, isDevMode } from '@angular/core';
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
import { ServiceWorkerModule } from '@angular/service-worker';
import { OfflineComponent } from './offline/offline.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    OfflineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:5000'
    })
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
