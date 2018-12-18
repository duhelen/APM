import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { AuthenticGuard } from './user/authentic-guard.service';

import { WelcomeComponent } from './home/welcome.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', component: WelcomeComponent }
        ]),
        ProductModule
    ],
    providers: [],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
