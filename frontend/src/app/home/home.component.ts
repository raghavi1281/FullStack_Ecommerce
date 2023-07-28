import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { CartService } from '../Services/cart.service';
import { SearchService } from '../Services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Ecommerce_frontend'
  searchQuery: string = ''
  isLoggedIn: boolean = false
  cartCount: number = 0

  private authSubcription: Subscription
  private cartSubscription: Subscription

  constructor(private auth: AuthService,
              private cartService: CartService,
              private searchService: SearchService
              ){
    this.authSubcription = this.auth.auth$.subscribe((isLoggedIn) => this.isLoggedIn = isLoggedIn)
    this.cartSubscription = this.cartService.cart$.subscribe((count) => this.cartCount = count)
    // this.cartCount = this.cartService.getTotalItemsCount()
  }


  onSearch() {
    this.searchService.setSearchQuery(this.searchQuery)
    this.searchQuery = ''
  }

  onSelectCategory(option: string){
    this.searchService.setCategoryFilter(option)
  }
}
