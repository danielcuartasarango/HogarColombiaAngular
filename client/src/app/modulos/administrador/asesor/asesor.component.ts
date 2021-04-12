import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-asesor',
  templateUrl: './asesor.component.html',
  styleUrls: ['./asesor.component.css']
})
export class AsesorComponent implements OnInit {

  constructor(private userService: UsuariosService) { }

  usersList: UserModel[] = [];
  showConfirmationButtons: boolean = false;
  idToShowButtons: string = '';

  ngOnInit() {
    this.getAllUsers();
  }


  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(items => {
      //console.log(items)
      this.usersList = items;
    });
  }

  deleteUser(id): void{
    this.userService.deleteUser(id).subscribe(item => {
      console.log(item)
      this.getAllUsers();
    }, error => {
      console.log(error)
    })
  }

  ChangeConfirmationButtons(id) {
    this.idToShowButtons = id;
    this.showConfirmationButtons = this.showConfirmationButtons;
  }
}
