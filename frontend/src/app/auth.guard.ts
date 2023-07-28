import { Injectable } from "@angular/core";
import { UrlTree, Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class AuthGuard{
    constructor(private router: Router){}

    canActivate(): boolean | UrlTree {
        if(localStorage.getItem('token'))
        {
            return true
        }
        else {
            return this.router.parseUrl('/login')
        }
    }

    canCheckAuth(): boolean | UrlTree {
        if(localStorage.getItem('token'))
        {
            return this.router.parseUrl('/Home')
        }
        else {
            return true
        }
    }
}