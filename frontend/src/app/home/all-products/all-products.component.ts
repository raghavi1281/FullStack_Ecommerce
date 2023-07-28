import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  products: Product[] = []

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe(response => {
      this.products = response;
    });
  }

}
