import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tokenInterface } from '../models/token.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor(private http: HttpClient, 
              private router: Router) { }

  logIN(user: {email: string, password: string}){
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

  signUP(user: {name: string, email: string, password: string}){
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

  authenticate(response: tokenInterface){

      this.router.navigate(['/']);
      localStorage.setItem("token", JSON.stringify(response.token));
      console.log(response.token);
      return {isLoggedIn: this.isLoggedIn, message: "Authenticated" }

  }

  logOUT(){
    this.isLoggedIn = false
    localStorage.removeItem('token')
  }

  isAuthenticated() : boolean{
    return localStorage.getItem('token') ? true : false;
  }
}
