import { Component } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  cartCount : number = 0

  constructor(private cart : CartService) {
    this.cartCount = cart.getTotalItemsCount()
  }

}
