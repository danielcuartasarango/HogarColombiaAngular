import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeInmueblesComponent } from './home-inmueble/home-inmueble.component';
import { CrearInmuebleComponent } from './crear-inmueble/crear-inmueble.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { DeleteInmuebleComponent } from './delete-inmueble/delete-inmueble.component';
import { SolicitarInmuebleComponent } from './solicitar-inmuebles/solicitar-inmuebles.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { ResponderSolicitudComponent } from './responder-solicitud/responder-solicitud.component';
import { BorrarSolicitudComponent } from './borrar-solicitud/borrar-solicitud.component';
import { UrlInjectionGuard } from 'src/app/guardianes/url-injection.guard';


const routes: Routes = [
  {
    path:'home-i',
    component: HomeInmueblesComponent
  },
  {
    path:'create-inmueble',
    component:CrearInmuebleComponent,
    canActivate:[
      UrlInjectionGuard
    ]
  },
  {
    path:'details/:id',
    component:DetalleProductosComponent
  },
  {
    path:'borrar/solicitud/:id',
    component:BorrarSolicitudComponent,
    canActivate:[
      UrlInjectionGuard
    ]
  },
  {
  path:'delete/:id',
  component:DeleteInmuebleComponent,
  canActivate:[
    UrlInjectionGuard
  ]
  },
  {
    path:'responder/solicitud/:id',
    component:ResponderSolicitudComponent,
    canActivate:[
      UrlInjectionGuard
    ]
  },
  {
    path:'solicitudes/nueva/:id',
    component:SolicitarInmuebleComponent
  },
  {
    path:'asesor/lista-solicitudes',
    component:ListaSolicitudesComponent,
    canActivate:[
      UrlInjectionGuard
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmueblesRoutingModule { }
