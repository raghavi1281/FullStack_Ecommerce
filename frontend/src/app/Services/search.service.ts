import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../Models/product.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient,
              private router: Router) { }

  private searchSubject = new BehaviorSubject<string>('')
  searchProduct$ = this.searchSubject.asObservable()

  private filterSubject = new BehaviorSubject<string>('')
  filterProducts$ = this.filterSubject.asObservable()

  setCategoryFilter(category: string): void {
    this.router.navigate(['/Home/search', {queryParams: {query: category}}])
    this.filterSubject.next(category)
  }

  setSearchQuery(query: string): void {
    this.router.navigate(['/Home/search'], {queryParams: {query: query}})
    this.searchSubject.next(query)
  }

  getProductsBySearch(query: string): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/filter/bySearch/'+query);
  }

  getProductsByCategory(category: string): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/filter/byCategory/'+category);
  }


}
