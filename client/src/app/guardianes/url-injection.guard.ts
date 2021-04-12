import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';
import { isNullOrUndefined } from 'util';
@Injectable({
  providedIn: 'root'
})
export class UrlInjectionGuard implements CanActivate {
  constructor(private userService:UsuariosService, private router:Router){

  } 

  canActivate(){
    if(isNullOrUndefined(this.userService.getUserInformation())){
      this.router.navigate(["/user/login"])
      return false;
    }else
    {
    return true;
  }
  }
  
}
