import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: {
    product: Product,
    quantity: number
  }[]= []
  totalItems: number = 0

  constructor() { }

  addToCart(product: Product){
    const i = this.cart.findIndex((p) => p.product._id === product._id)
    
    if(i !== -1){
      this.cart.at(i)!.quantity++
    }
    else{
      this.cart.push({product, quantity: 1})
    }
    this.totalItems++
    console.log(this.cart)
  }

  removeFromCart(product: Product) {
    const index = this.cart.findIndex((p) => p.product._id === product._id)
    const q = this.cart.at(index)!.quantity
    this.totalItems = this.totalItems - q
    this.cart.splice(index, 1)
  }

  increaseQuantity(product: Product){
    this.cart.find((p) => p.product._id === product._id)!.quantity++
    this.totalItems++
  }

  decreaseQuantity(product: Product){
    this.cart.find((p) => p.product._id === product._id)!.quantity--
    this.totalItems--
  }

  getCart(){
    return this.cart
  }

  getTotalItemsCount() {
    return this.totalItems
  }

}
