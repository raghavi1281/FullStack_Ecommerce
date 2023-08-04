import { Component} from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { SearchService } from 'src/app/Services/search.service';
import { Subscription } from 'rxjs';
import { ProductsService} from 'src/app/Services/products.service';
import { CartService } from 'src/app/Services/cart.service';
import { productsResponse } from 'src/app/Models/response.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  products: Array<productsResponse> = [];
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

  addToCart(product: productsResponse) : void{
    this.cart.addToCart(product)
  }

  fetchFilteredProducts(option: string) : void{
    this.filter.getProductsByCategory(option)
                .subscribe((response) => this.products = response)
  }

  fetchSearchedProducts(query: string) : void{
    console.log(query)
    this.filter.getProductsBySearch(query)
                .subscribe((response) => this.products = response)
  }

}
