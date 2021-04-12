import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AsesorComponent } from './asesor/asesor.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AdminComponent, AsesorComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
