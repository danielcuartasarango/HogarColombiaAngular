import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from './modulos/users/users.module';
import { HomeComponent } from './modulos/home/home/home.component';
import { HomeModule } from './modulos/home/home.module';
import { ClientesModule } from "./modulos/clientes/clientes.module";
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';
import { ConfirmaComponent } from './templates/confirma/confirma.component';
import { InmueblesModule } from './modulos/inmuebles/inmuebles.module';
import { CorreoConfirmaComponent } from "./templates/correo-confirma/correo-confirma.component";
import { AdministradorModule } from './modulos/administrador/administrador.module';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'inmuebles',
    loadChildren: './modulos/inmuebles/inmuebles.module#InmueblesModule'
  },
  {
    path: 'administrador',
    loadChildren: './modulos/administrador/administrador.module#AdministradorModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'api/ExtUsers/confirm',
    component: ConfirmaComponent
  },
  {
    path: 'confirma',
    component: CorreoConfirmaComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UsersModule,
    HomeModule, 
    ClientesModule,
    InmueblesModule,
    AdministradorModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
