import { Component, OnInit } from "@angular/core";
import { AuthenticService } from "./authentic.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import { IUser } from "./user";


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    pageTitle = 'Log In';
    errorMessage: string;
    attempts: number;
    errorMessage2: string;
    // disableLogin: string;
    //validationMessages: { [key: string]: { [key: string]: string } };

    constructor(private authenticService: AuthenticService,
                private router: Router,
                private fb: FormBuilder) {
                }


    ngOnInit() {
        this.loginForm = this.fb.group ({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
                              //{value: 'n/a', disabled: true}
        });
    }

    //private validationMessages = {
    //  validationMessages = {
    //      username: {
    //          required: 'Username is required.'
    //      },
    //      password: {
    //          required: 'Password is required.'
    //      }
    //  };



    login() {
        
        let username = this.loginForm.get('username').value;
        let password = this.loginForm.get('password').value;
        let attempts = this.authenticService.getAttempts(username);

        if (attempts >= 3 ) {
            this.errorMessage = "Too many attempts. Please call 123-456-7890 for further assistance."
            console.log(attempts);
            // this.disableLogin = "disabled";
            //this.loginForm.valid === false ;
            
            
            return;
        }
        if (attempts == -1) {
            this.errorMessage = "Your username does not exist in our database. Please register below."
            console.log(attempts);
            this.errorMessage2 = "Register as new customer."
            return;
            
        }   


        if (this.authenticService.isLoggedIn() === false) {
            if (this.authenticService.login(username, password)) {
                //this.errorMessage = "Your password is CORRECT"
            } else {
                this.errorMessage = "Your password is INCORRECT. Please enter the correct password."
            }
        }

        if (this.authenticService.redirectUrl) {
            this.router.navigateByUrl(this.authenticService.redirectUrl);
        } else {
            this.router.navigate(['/products']);
        }


    console.log(this.loginForm);
    console.log('Login: ' + JSON.stringify(this.loginForm.value));
    }

}
