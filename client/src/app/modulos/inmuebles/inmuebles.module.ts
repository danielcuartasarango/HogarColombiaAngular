import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { HomeInmueblesComponent } from './home-inmueble/home-inmueble.component';
import { CrearInmuebleComponent } from './crear-inmueble/crear-inmueble.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { SolicitarInmuebleComponent } from './solicitar-inmuebles/solicitar-inmuebles.component';
import { DeleteInmuebleComponent } from './delete-inmueble/delete-inmueble.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { ResponderSolicitudComponent } from './responder-solicitud/responder-solicitud.component';
import { BorrarSolicitudComponent } from './borrar-solicitud/borrar-solicitud.component';


@NgModule({
  declarations: [HomeInmueblesComponent, CrearInmuebleComponent, DetalleProductosComponent, SolicitarInmuebleComponent, DeleteInmuebleComponent, ListaSolicitudesComponent, ResponderSolicitudComponent, BorrarSolicitudComponent],
  imports: [
    CommonModule,
    InmueblesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
  
})
export class InmueblesModule { }
