import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router){};
  canActivate(): any {
    
    if(this.hasKey("user_id"))
    {
      return true;
    }
    else{ this.router.navigate(['/']);}
  }
  hasKey(key: string) {
    return !!localStorage.getItem(key);
  }
  
}
