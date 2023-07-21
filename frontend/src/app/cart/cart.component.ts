import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart : {
    product: Product,
    quantity: number
  }[] = []

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart()
  }

}
