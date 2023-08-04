import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product!: Product
  constructor(private service: ProductsService,
              private cart: CartService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParam => {
      let id = queryParam['productId']
      if(id !== null){
        const Id = parseInt(id, 10);
        this.service.getProductDetails(Id).subscribe(res => this.product = res);
      }
      else{
        console.error("product not found");
      }
    })
 }

 addToCart(product: Product) : void{
  this.cart.addToCart(product)
 }

}
