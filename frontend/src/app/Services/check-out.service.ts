import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../Models/product.model';
import { Observable } from 'rxjs';
import { productsResponse } from '../Models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {
  jwToken: string= localStorage.getItem('token')?.replaceAll('\"', '')!;
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.jwToken}`
  })
  }

  constructor(private http: HttpClient) { }

  placeOrder(cart: {product: productsResponse, quantity: number}[]): Observable<any> {
    let cartList: {
      productID: number,
      price: number,
      quantity: number
    }[] = []
    cart.forEach((item) => {
      cartList.push({
        productID: item.product._id, 
        price: item.product.price, 
        quantity: item.quantity})
    })
    return this.http.post('http://localhost:3000/order/checkout', cartList, this.httpOptions)
  }
}
