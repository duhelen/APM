//checks form's dirty state

import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductEditComponent } from './product-edit.component';

@Injectable({
  providedIn: 'root' //root??
})
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {
  //passes in component
  canDeactivate(component: ProductEditComponent): Observable<boolean> | Promise<boolean> | boolean {
    //access code properties
    if (component.productForm.dirty) {
      const productName = component.productForm.get('productName').value || 'New Product';
      return confirm(`Navigate away and lose all changes to ${productName}?`);
    }
    return true;
  }
}

//Tied to route in Product Module 