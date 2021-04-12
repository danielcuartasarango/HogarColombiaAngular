import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPassComponent } from "../users/reset-pass/reset-pass.component";
import { FormLoginGuard } from 'src/app/guardianes/form-login.guard';
import { UrlInjectionGuard } from 'src/app/guardianes/url-injection.guard';



const routes: Routes = [
    {
        path: 'user/login',
        component: LoginComponent,
        canActivate:[
            FormLoginGuard
        ]
    },
    {
        path: 'user/logout',
        component: LogoutComponent,
        canActivate:[
            UrlInjectionGuard
        ]
    },
    {
        path: 'user/reset-password',
        component: ResetPassComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule { }