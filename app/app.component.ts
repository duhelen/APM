import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticService} from './user/authentic.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';

  constructor(private authenticService: AuthenticService,
              private router: Router) { }

  logout(): void {
    this.authenticService.logout();
    this.router.navigateByUrl('/welcome');
  }
}