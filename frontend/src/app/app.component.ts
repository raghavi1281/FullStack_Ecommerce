import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  isLoggedIn: boolean = false

  private authSubcription: Subscription

  constructor(private router: Router,
              private auth: AuthService) 
  {
    this.authSubcription = this.auth.auth$.subscribe((isLoggedIn) => this.isLoggedIn = isLoggedIn)
  }

  logout(){
    this.auth.logOUT()
    this.router.navigate(['../../login'])
  }
}
