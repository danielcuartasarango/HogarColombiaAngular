import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AsesorComponent } from './asesor/asesor.component';
import { EditarComponent } from './editar/editar.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/asesor',
    component: AsesorComponent
  },
  {
    path: 'admin/editar-asesor/:id',
    component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
