import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Array<Product> = [];

  constructor() {}
}
