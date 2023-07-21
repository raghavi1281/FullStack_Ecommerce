import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce_frontend'
  isLoggedIn: boolean = false
  cartCount: number = 0

  constructor(private auth: AuthService,
              private cartService: CartService){
    this.isLoggedIn = auth.isAuthenticated()
    this.cartCount = this.cartService.getTotalItemsCount()
  }
}
