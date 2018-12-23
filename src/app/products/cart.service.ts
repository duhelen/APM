import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductService } from './product.service';
// import { of } from 'rxjs/observable/of';
@Injectable()
export class CartService {
  private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  //subscribe to get it,
  //like observable but 
// It needs an initial value as it must always return a value on subscription even if it hasn't received a next()
// Upon subscription, it returns the last value of the subject. A regular observable only triggers when it receives an onnext
  private itemsInCart: Product[] = [];

  constructor(private productService: ProductService) {
    // this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }


  public addToCart(item: Product) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }
  //gets current item

  public getItems(): Observable<Product[]> {
    return this.itemsInCartSubject;
  }

//   public getTotalAmount()
}