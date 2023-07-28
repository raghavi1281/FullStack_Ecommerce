import { Component } from '@angular/core';
import { Product } from '../../Models/product.model';
import { CartService } from '../../Services/cart.service';


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
  totalPrice: number = 0

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart()
    this.totalPrice = this.cartService.getTotalCost()
  }

  onCheckOut() {
    this.cartService.checkOut()
  }
}
