import { AbstractControl, ValidatorFn } from '@angular/forms';

export class NumberValidators {

//Factory function -> wrapps Validator function with parameters
  static range(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
        return { 'range': true };
      }
      return null;
    };
  }
}

//Shared folder, export to let other forms access and reuse in the application
//Statis so any code can use it without creating instance of this class
//Used in product-edit.component.ts
