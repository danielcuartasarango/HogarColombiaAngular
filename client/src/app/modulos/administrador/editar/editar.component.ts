import { Component, OnInit } from '@angular/core';
import { UserModel } from "../../../models/user.model";
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UsuariosService, private router: Router) { }

usuario: UserModel = {
  name: null,
  password: null,
  email: null,
  lastName: null,
  phone: null,
  address: null,
  idNumber: null,
  type: null,
  rol:null
} 

ngOnInit() {
  this.buscarUsuraio();
}

buscarUsuraio(): void {
  let id = this.route.snapshot.params["id"];
  this.userService.getUserById(id).subscribe(item => {
    this.usuario = item;
  })
}

updateUser() {
  this.userService.updateUser(this.usuario).subscribe(item => {
    alert('Este usuario fue actualizado');
    this.router.navigate(["/administrador/admin/asesor"]);
  })
}

}