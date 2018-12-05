//Product Feature Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';//

import { SharedModule } from '../shared/shared.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditGuard } from './product-edit.guard';

import { AuthenticGuard } from '../user/authentic-guard.service';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    RouterModule.forChild([
      { 
        path: 'products', 
        canActivate: [ AuthenticGuard ],
        canLoad: [AuthenticGuard],
        component: ProductListComponent },
      { 
        path: 'products/:id',
        canActivate: [ AuthenticGuard ],
        canLoad: [AuthenticGuard],
        component: ProductDetailComponent },
      {
        path: 'products/:id/edit',
        canActivate: [AuthenticGuard],
        canLoad: [AuthenticGuard],
        canDeactivate: [ProductEditGuard],
        component: ProductEditComponent
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
