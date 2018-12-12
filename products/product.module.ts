//Product Feature Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';//

import { SharedModule } from '../shared/shared.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';

import { GeneralListComponent } from './general-list.component';
// import { ApplianceListComponent } from './appliances.component';
// import { HomeGoodsListComponent } from './homegoods.component';
// import { FoodListComponent } from './foods.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditGuard } from './product-edit.guard';

import { AuthenticGuard } from '../user/authentic-guard.service';

import { ProductListComponent } from './products.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    RouterModule.forChild([
      { 
        path: 'products', 
        // canActivate: [ AuthenticGuard ],
        // canLoad: [AuthenticGuard],
        component: GeneralListComponent },
      { 
        path: 'products/:id',
        // canActivate: [ AuthenticGuard ],
        // canLoad: [AuthenticGuard],
        component: ProductDetailComponent },
      {
        path: 'products/:id/edit',
        // canActivate: [AuthenticGuard],
        // canLoad: [AuthenticGuard],
        canDeactivate: [ProductEditGuard],
        component: ProductEditComponent
      },
      // {
      //   path: 'appliances',
      //   // canActivate: [AuthenticGuard],
      //   // canLoad: [AuthenticGuard],
      //   canDeactivate: [ProductEditGuard],
      //   component: ApplianceListComponent
      // },
      // {
      //   path: 'homegoods',
      //   // canActivate: [AuthenticGuard],
      //   // canLoad: [AuthenticGuard],
      //   canDeactivate: [ProductEditGuard],
      //   component: HomeGoodsListComponent
      // },
      // {
      //   path: 'foods',
      //   // canActivate: [AuthenticGuard],
      //   // canLoad: [AuthenticGuard],
      //   canDeactivate: [ProductEditGuard],
      //   component: FoodListComponent
      // }
    ])
  ],
  declarations: [
    GeneralListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent
    // FoodListComponent,
    // HomeGoodsListComponent
  ],
  providers: [ProductListComponent]
})
export class ProductModule { }
