import { Component} from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { SearchService } from 'src/app/Services/search.service';
import { Subscription } from 'rxjs';
import { ProductsService} from 'src/app/Services/products.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  products: Array<Product> = [];
  private searchSubcription: Subscription
  private filterSubcription: Subscription

  constructor(private api : ProductsService,
              private cart : CartService,
              private filter: SearchService)
  {

    this.filterSubcription = this.filter.filterProducts$
          .subscribe((category) => this.fetchFilteredProducts(category))

    this.searchSubcription = this.filter.searchProduct$
          .subscribe((query) => this.fetchSearchedProducts(query))

  }

  addToCart(product: Product){
    this.cart.addToCart(product)
  }

  fetchFilteredProducts(option: string){
    this.filter.getProductsByCategory(option)
                .subscribe((response) => this.products = response)
  }

  fetchSearchedProducts(query: string){
    console.log(query)
    this.filter.getProductsBySearch(query)
                .subscribe((response) => this.products = response)
  }

}
