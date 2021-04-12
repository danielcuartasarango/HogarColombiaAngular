import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecaptchaModule } from 'ng-recaptcha';
import { ClientesRoutingModule } from "./clientes-routing.module";

@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule
  ],
  exports:[
    RegistroComponent
  ], 
  providers: [
  ]
})
export class ClientesModule { }
