import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import Auth from '@aws-amplify/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router:Router){}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean{
        return Auth.currentAuthenticatedUser().then( () => {
            return true;
        })
        .catch( () => {
            this.router.navigate(["/auth"]);
            return false;
        })
    }
}