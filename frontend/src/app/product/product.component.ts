import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Product } from '../models/product.model';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 product!: Product;
 constructor(private route: ActivatedRoute, 
              private api: ApiService,
              private cart : CartService) {}

 ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      if(id !== null){
        const Id = parseInt(id, 10);
        this.api.getProductDetails(Id).subscribe(res => this.product = res);
      }
      else{
        console.error("product not found");
      }
      
    })  
 }

 addToCart(product: Product){
  this.cart.addToCart(product)
 }

}
