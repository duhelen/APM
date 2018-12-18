import { Injectable } from "@angular/core";
// import { LoginComponent } from "./login.component";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route,
         CanActivate, CanActivateChild, CanLoad } from '@angular/router';
import { AuthenticService } from './authentic.service';



@Injectable()
export class AuthenticGuard implements CanActivate, CanLoad {
//     canDeactivate(component: LoginComponent): Observable<boolean> | Promise<boolean> | boolean {
//         if (component.loginForm.dirty) {
//             const username = component.loginForm.get('username').value || 'New User';
//             return confirm()
//         }
//     }
// }
    constructor (private authenticService: AuthenticService,
                private router: Router) { }

    //routerstatesnapshot: reps state of router at that moment in time
    //use state as parameter
    //returns state.url to checkLoggedIn
    //canactivate for logins only
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('IN canActivate: ' + state.url);
        return this.checkLoggedIn(state.url);
    }

    //if a child route can be activated. If all guards return true, navigation will continue
    //If any guard returns false, navigation will be cancelled
    // canActivateChild (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //     console.log('IN canActivateChild: ' + state.url);
    //     return this.checkLoggedIn(state.url);
    // }

    //used to prevent the application from loading entire modules lazily if the user is not authorized
    //Interface that a class can implement to be a guard deciding if a children can be loaded.
    canLoad(route: Route): boolean {
        console.log('IN canLoad: ' + route.path);
        return this.checkLoggedIn(route.path);
    }

    //receives urls 
    //receives urls when not logged in, directs to login
    checkLoggedIn(url: string): boolean {
        if (this.authenticService.isLoggedIn()) {
            return true;
        }

        this.authenticService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
}