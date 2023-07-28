import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AuthGuard } from './auth.guard';
import { CartHeaderComponent } from './cart/cart-header.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo:'Home', pathMatch:'full'},
  {path: 'login', component: LoginComponent, canActivate: [() => inject(AuthGuard).canCheckAuth()]},
  {path: 'signup', component: SignupComponent, canActivate: [() => inject(AuthGuard).canCheckAuth()]},
  {path: 'Home', component: HomeComponent, 
                  loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)},
  {path:'Cart', component:CartHeaderComponent, canActivate: [() => inject(AuthGuard).canActivate()],
                loadChildren: () => import('./cart/cart.module').then(m=>m.CartModule)},
  {path:'Profile', component:ProfileComponent, canActivate: [() => inject(AuthGuard).canActivate()],
                loadChildren: () => import('./profile/profile.module').then(m=>m.ProfileModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
