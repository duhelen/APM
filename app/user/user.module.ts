import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from "../shared/shared.module";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
 import { LoginData } from './login-data';

import { LoginComponent } from "./login.component";
import { AuthenticService } from "./authentic.service";
import { AuthenticGuard } from './authentic-guard.service';

import { MessagesService } from './messages.service';
import { RegisterComponent } from "./register.component";



@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        
        InMemoryWebApiModule.forRoot(LoginData),
        RouterModule.forChild([
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ])
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthenticService,
        AuthenticGuard,
        MessagesService
    ]
})
export class UserModule { }