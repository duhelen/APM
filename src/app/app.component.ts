import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticService} from './user/authentic.service';
import { Observable } from 'rxjs';
import { Product } from './products/product';
import { CartService } from './products/cart.service';


@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  public shoppingCartItems$: Observable<Product[]>;

  constructor(private authenticService: AuthenticService,
              private router: Router,
              private cartService: CartService) {

                this.shoppingCartItems$ = this.cartService.getItems();

                this.shoppingCartItems$.subscribe(_ => _);
              }

  logout(): void {
    this.authenticService.logout();
    this.router.navigateByUrl('/welcome');
  }
}