import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

 
  constructor(private userService: UsuariosService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.userService.logoutUser();
      this.router.navigate(["/home"]);
    }, 1000);
  }

}
