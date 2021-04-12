import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class FormLoginGuard implements CanActivate {
  constructor(private userService:UsuariosService,
    private router:Router){

  }
  canActivate(){
    if(!isNullOrUndefined(this.userService.getUserInformation())){
      this.router.navigate(["/home"])
      return false;
    }else{
    return true;}
  }
    
}
  

