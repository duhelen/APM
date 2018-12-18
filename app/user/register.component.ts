import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';


import { Router } from "@angular/router";
import { AuthenticService } from "./authentic.service";
import { IUser } from "./user";


//if only used by this component, put it here. otherwise put in own file 


function ratingRange(min: number, max: number): ValidatorFn {
return (c: AbstractControl): { [key:string]: boolean } | null => {
  if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
    return { 'range': true };
  }
  return null; 
}
}


@Component({
//   selector: 'app-customer',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
    currentUser: IUser = 
        {
          'id': 0,
          'username': '',
          'password': '',
          'attempts': 0
        };


  customerForm: FormGroup;

  emailMessage: string;
  successMessage: string;

  
  //property getter, to ensure none of code modifies this formArray, easier to access
  //get binds a property to a function that will be called when property is looked up 
  //get returns value (reads) vs set, writes 
  get addressGroup(): FormArray {
    return <FormArray>this.customerForm.get('addressGroup');
  }

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder,
                private router: Router,
                private authenticService: AuthenticService) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group ({ //root
      username: ['trial', [Validators.required, Validators.minLength(5)]],
      password: ['error', [Validators.required, Validators.minLength(5)]],
      emailGroup: this.fb.group({ //nested
        email: ['1234@gmail.com', [Validators.required, Validators.email]],
        confirmEmail: ['1234@gmail.com', Validators.required],
      }),
      phone: '', 
      notification: 'email',
      rating: [null, ratingRange(1,5)],
      sendCatalog: false, //false = no address
      addressGroup: this.fb.array([ this.buildAddress() ])

    });

//watch + react to radio buttons
    this.customerForm.get('notification').valueChanges.subscribe(
      value => this.setNotification(value)
    );
//watch + react for email formgroup 
//can change to username, password, etc 
    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
      ).subscribe(
        value => this.setMessage(emailControl)
    );

  }

//bind to html button for additional addresses
//pushes instance of FormGroup to FOrmArray
//call whenever want to create another instance 
  addAddress(): void {
    this.addressGroup.push(this.buildAddress());
    console.log(this.addressGroup.controls);
  }

//formBuilder for FormGroup 
  buildAddress(): FormGroup { //return FormGroup -> addressGroup
    return this.fb.group({
      addressType: 'home', //home, work, other
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: '',
    })
  }


  populateTestData(): void {
    this.customerForm.patchValue({ //setValue
      username: 'trial',
      password: 'error',
      email: '1234@gmail.com',
      confirmEmail: '1234@gmail.com',
      rating: 5,
      sendCatalog: false
  });

  }

  save() {
    console.log(this.customerForm);
    console.log('Data Saved: ' + JSON.stringify(this.customerForm.value));
    console.log(this.customerForm.value['username']);
    // console.log(this.customer.password);

    this.currentUser.username = this.customerForm.value["username"];
    console.log('username: ' + this.customerForm.value["username"]);
    this.currentUser.password = this.customerForm.value["password"];
    this.authenticService.addUser(this.currentUser);

    this.successMessage = "Congratulations on becoming a new customer of APM! You will be directed in 5 seconds."
    setTimeout(() => {
        this.router.navigate(['/login']);
    }, 5000);  //5s

  }

//setting msgs for emailGroup
  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.emailMessage += this.validationMessages[key]).join(' ');
      } 
      console.log('hello', this.emailMessage);
      console.log('available msgs', this.validationMessages);
  }
//used by watch+react
  setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }



}
