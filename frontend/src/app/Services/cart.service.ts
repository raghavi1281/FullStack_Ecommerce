import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';
import { Router } from '@angular/router';
import { CheckOutService } from './check-out.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: {
    product: Product,
    quantity: number
  }[]= []
  totalItems: number = 0
  totalCost: number = 0

private cartItemsSubject = new BehaviorSubject<number>(0)
cart$ = this.cartItemsSubject.asObservable()

  constructor(private checkOutService: CheckOutService,
              private router: Router) { }

  addToCart(product: Product){
    const i = this.cart.findIndex((p) => p.product._id === product._id)
    
    if(i !== -1){
      this.cart.at(i)!.quantity++
    }
    else{
      this.cart.push({product, quantity: 1})
    }
    this.totalItems++
    this.totalCost += product.price
    this.cartItemsSubject.next(this.totalItems)
    console.log(this.cart)
  }

  removeFromCart(product: Product) {
    const index = this.cart.findIndex((p) => p.product._id === product._id)
    const q = this.cart.at(index)!.quantity
    this.totalItems = this.totalItems - q
    this.cartItemsSubject.next(this.totalItems)
    this.cart.splice(index, 1)
  }

  increaseQuantity(product: Product){
    this.cart.find((p) => p.product._id === product._id)!.quantity++
    this.totalItems++
    this.cartItemsSubject.next(this.totalItems)
    this.totalCost += product.price
  }

  decreaseQuantity(product: Product){
    this.cart.find((p) => p.product._id === product._id)!.quantity--
    this.totalItems--
    this.cartItemsSubject.next(this.totalItems)
    this.totalCost -= product.price
  }

  checkOut() {
    this.checkOutService.placeOrder(this.cart).subscribe({
      next:((response) => {
        this.cart = []
        this.totalCost = 0
        this.totalItems = 0
        this.cartItemsSubject.next(this.totalItems)
        this.router.navigate(['Cart/checkout'])
      }), error: ((error) => {
        alert("Unable to place order. try Again")
      })
    })
  }

  getCart(){
    return this.cart
  }

  getTotalItemsCount() {
    return this.totalItems
  }

  getTotalCost() {
    return this.totalCost
  }

}
