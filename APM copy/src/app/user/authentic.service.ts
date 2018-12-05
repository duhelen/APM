import { IUser } from './user';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessagesService } from './messages.service';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
    providedIn: 'root'
})
export class AuthenticService {
    users: IUser[] = [
        {
          'id': 1,
          'username': 'helen',
          'password': 'du',
          'attempts': 0
        },
        {
          'id': 2,
          'username': 'guest',
          'password': 'guest',
          'attempts': 0
        }];
    currentUser: IUser;
    redirectUrl: string; //for redirect in authentic-guard.serv
    attempts: number;
    errorMessage: string;

    constructor(private messagesService: MessagesService,
                private http: HttpClient) { }

    isLoggedIn():  boolean { //boolean if current user is logged in
        return !!this.currentUser;
    }


    login(username: string, password: string): boolean {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].username === username) {
                //enumerate through all users
                if (this.users[i].password === password) {
                  this.users[i].attempts = 0;
                  this.currentUser = this.users[i];
                  return true;
                } else {
                  this.users[i].attempts += 1;
                }
            }
        }
        return false;
    }

    addUser(newUser: IUser): void {
        this.users.push(newUser);

        // use authenservice in sign up page
        // pass user to add user
        // add user, redirect to /login
        // new user info should be in users
        // then should be able to login 


    }

    getAttempts(username) {
        for (var i = 0; i < this.users.length; i++) {
          if (this.users[i].username === username) {
            return this.users[i].attempts;
          }
        }
        return -1;
    }   

    logout(): void {
        this.currentUser = null
    }
}


//pseudo code, make code logic on paper 
