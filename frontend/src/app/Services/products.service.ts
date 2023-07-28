import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Array<Product>>{
    return this.http.get<Array<Product>>('http://localhost:3000/products');
  }

  getProductDetails(productID: number): Observable<Product>{
    return this.http.get<Product>('http://localhost:3000/products/'+productID);
  }
}
