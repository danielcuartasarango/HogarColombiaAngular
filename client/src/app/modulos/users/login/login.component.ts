import { Component, OnInit, ɵConsole } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  flag: boolean = true;
  email: string = "";
  password: string = "";
  recaptcha: string = "";
  alertMessage: string;

  constructor(private userService: UsuariosService, private router: Router) { }


  ngOnInit() {

  }

  onLogin(): void {
    this.userService.loginUser(this.email, this.password).subscribe(item => {
      //console.log(this.userService.getUserInformation());
      if (item) {
        let nuevoItem = JSON.parse(JSON.stringify(item));
        this.userService.saveToken(nuevoItem.user.id);
        this.userService.saveUserInformation(nuevoItem.user);
        this.alertMessage = "Ha iniciado sesión correctamente";
        this.router.navigate(['inmuebles/home-i']);
      }
    }, error => {
      this.alertMessage = "Ingrese los datos correctamente";
      console.log(error.error.error.message);
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
