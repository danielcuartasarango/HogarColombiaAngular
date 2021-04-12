import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserModel } from 'src/app/models/user.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private userService: UsuariosService, private router: Router) { }


  recaptcha: string = "";

  ngOnInit() {
    this.clientFormGroup = this.formGroupCreator();
  }

  clientFormGroup: FormGroup;

  formGroupCreator(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      idNumber: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      type: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    });
  }
  get name() {
    return this.clientFormGroup.get('name');
  }
  get lastName() {
    return this.clientFormGroup.get('lastName');
  }
  get phone() {
    return this.clientFormGroup.get('phone');
  }
  get address() {
    return this.clientFormGroup.get('address');
  }
  get idNumber() {
    return this.clientFormGroup.get('idNumber');
  }
  get type() {
    return this.clientFormGroup.get('type');
  }
  get email() {
    return this.clientFormGroup.get('email');
  }
  get password() {
    return this.clientFormGroup.get('password');
  }

  encriptar(string: string) {
    /*var CryptoJS = require("crypto-js");

    // Encrypt
    var ciphertext = CryptoJS.AES.encrypt(string, 'secret key 123');
    return ciphertext.toString()

    
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);

    console.log(ciphertext, plaintext);*/
  }
  buildUserData(): UserModel {
    let userBuild: UserModel = {
      name: this.name.value,
      password: this.password.value,
      email: this.email.value,
      lastName: this.lastName.value,
      phone: this.phone.value,
      address: this.address.value,
      idNumber: this.idNumber.value,
      type: this.type.value,
      rol:0
    }
    return userBuild;

  }

  saveNewClient(): void {
    if (this.clientFormGroup.valid) {
      let user = this.buildUserData();
      this.userService.userRegister(user).subscribe(item => {
        console.log(item);
      }, error => {
        console.log(error)
      });
      this.router.navigate(['confirma']);
      setTimeout(() => {
        this.router.navigate(["/home"]);
      }, 1000);
    } else {
      console.log('error')
    }
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
