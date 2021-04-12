import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailModel } from 'src/app/models/email.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private catService: CategoriaService) {
    this.emailFormGroup = this.formGroupCreator();
  }
  alertMessage: string;
  valido: boolean = false;
  emailFormGroup: FormGroup;

  formGroupCreator(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      mensaje: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      asunto: new FormControl('', [Validators.required]),
      emailAddresses: new FormControl('', [Validators.required])
    });
  }

  // guardarValores(){
  //   localStorage.setItem("usuario", JSON.stringify( this.emailFormGroup.value));
  //   console.log('entro')
  // }
  get nombre() {
    return this.emailFormGroup.get('nombre');
  }

  get apellido() {
    return this.emailFormGroup.get('apellido');
  }

  get mensaje() {
    return this.emailFormGroup.get('mensaje');
  }

  get asunto() {
    return this.emailFormGroup.get('asunto');
  }

  get emailAddresses() {
    return this.emailFormGroup.get('emailAddresses');
  }

  ngOnInit() {
  }

  //   sendMail(): void{
  //     this.nombre = this.mensaje.value;
  //     console.log(this.mensaje.value, this.asunto.value, this.emailAddresses.value,"hola", this.nombre);


  // }

  sendMail(): void {
    this.catService.sendMail(this.buildEmailData()).subscribe(items => {
      this.valido = true;
      this.alertMessage = "El correo ha sido enviado"
    }, error => {
      this.alertMessage = "Error al enviar el correo"
        console.log(this.alertMessage)
    });
  }

  buildEmailData(): EmailModel {
    let email: EmailModel = {
      nombre: this.nombre.value,
      apellido: this.apellido.value,
      mensaje: this.mensaje.value,
      asunto: this.asunto.value,
      emailAddresses: this.emailAddresses.value
    }
    return email;
  }
}
