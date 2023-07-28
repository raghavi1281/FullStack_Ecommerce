import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  jwToken: string= localStorage.getItem('token')?.replaceAll('\"', '')!;
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.jwToken}`
  })
}

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<User>{
    return this.http.get<User>('http://localhost:3000/profile', this.httpOptions)
  }


}
