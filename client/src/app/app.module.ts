import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'; 
//imports templates
import { NavbarComponent } from '../app/templates/navbar/navbar.component';
import { FooterComponent } from '../app/templates/footer/footer.component';
import { HeroComponent } from '../app/templates/hero/hero.component';
import { UsersModule } from './modulos/users/users.module';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';
import { ConfirmaComponent } from './templates/confirma/confirma.component';
import { CorreoConfirmaComponent } from "./templates/correo-confirma/correo-confirma.component";
import { FormsModule } from '@angular/forms';
import { EditarComponent } from './modulos/administrador/editar/editar.component';
import { AdministradorModule } from './modulos/administrador/administrador.module';

//imports users


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    PageNotFoundComponent,
    ConfirmaComponent,
    CorreoConfirmaComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
