import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../../services/usuarios.service";
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {


  email: string = "";
  alertMessage: string = "";

  constructor(private userService: UsuariosService, private router: Router) { }

  ngOnInit() {
  }

  recaptcha: string = "";

  resetPassword(email: string) {
    this.userService.resetPassword(this.email).subscribe(
      response => {
        if (response){
          console.log("error en el servidor")
        }
    }, error =>{
      console.log(error);
    }
    );
  }

  resolved(captchaResponse: string) {
    this.recaptcha = captchaResponse;
    if (this.recaptcha.length > 0) { }
    //console.log(`Resolved captcha with response: ${captchaResponse}`);
     /*   executeImportantAction(): void {
      this.recaptcha.execute('onLogin')
        .subscribe((token) => this.handleToken(token));
    } */
  }

}