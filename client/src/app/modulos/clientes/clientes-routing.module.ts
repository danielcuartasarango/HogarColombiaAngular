import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from "./registro/registro.component";
import { FormLoginGuard } from 'src/app/guardianes/form-login.guard';


const routes: Routes = [
    {
        path: 'client/register',
        component: RegistroComponent,
        canActivate:[
            FormLoginGuard
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class ClientesRoutingModule { }