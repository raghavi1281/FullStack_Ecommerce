import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tokenInterface } from '../Models/response.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false
  loggedINNow: boolean = false
  private authSubject = new BehaviorSubject<boolean>(localStorage.getItem('token')? true : false)
  auth$ = this.authSubject.asObservable()
  constructor(private http: HttpClient, 
              private router: Router) { }

  logIN(user: {email: string, password: string}) : any {
    this.http.post<tokenInterface>('http://localhost:3000/user/login', user).subscribe({
      next: ((response) => {
        this.authenticate(response)
        // this.router.navigate(['/']);
        // localStorage.setItem("token", JSON.stringify(response.token));
        // console.log(response.token);
      }), error: ((error)=>{
        return {isLoggedIn: this.isLoggedIn, message: error.message }
        //alert('Invalid Details, registration rejected'+error.message);
        //this.signUpForm.reset()
      })
    })
  }

  signUP(user: {name: string, email: string, password: string}) : any{
    this.http.post<tokenInterface>('http://localhost:3000/user/signup', user).subscribe({
      next: ((response) => {
        this.authenticate(response)
        // this.router.navigate(['/']);
        // localStorage.setItem("token", JSON.stringify(response.token));
        // console.log(response.token);
      }), error: ((error)=>{
        return {isLoggedIn: this.isLoggedIn, message: error.message }
        //alert('Invalid Details, registration rejected'+error);
        //this.signUpForm.reset()
      })
    })
  }

  authenticate(response: tokenInterface) : any{
      this.authSubject.next(true)
      //this.home.onLoginSuccess("You have logged in Successfully")
      this.loggedINNow = true
      this.router.navigate(['/']);
      
      localStorage.setItem("token", JSON.stringify(response.token));
      //console.log(response.token);
      return {isLoggedIn: this.isLoggedIn, message: "Authenticated" }

  }

  logOUT(): void{
    this.authSubject.next(false)
    this.isLoggedIn = false
    localStorage.removeItem('token')
  }

  isAuthenticated() : boolean{
    return localStorage.getItem('token') ? true : false;
  }
}
