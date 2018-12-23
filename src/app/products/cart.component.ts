
import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';
import {Product} from './product';
import {Observable, of } from 'rxjs';

@Component({
//   selector: 'pm-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  public shoppingCartItems$: Observable<Product[]> = of([]); //add $ to variables that hold an observable
  public shoppingCartItems: Product[] = [];

  constructor(private cartService: CartService) {
    this.shoppingCartItems$ = this.cartService.getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

}






// import { Component, OnInit } from '@angular/core';

// import { Product } from './product';
// import { ProductService } from './product.service';
// import { Item } from './item';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
// pageTitle = 'Your Cart';
// private items: Item[] = [];
// private total: number = 0;

//   constructor(private productService: ProductService,
//                 private activatedRoute: ActivatedRoute) { }
// //from product-edit.component
//     // // Read the product Id from the route parameter
//     // // Code subscribes to route parameters (Observable)
//     // this.sub = this.route.paramMap.subscribe(
//     //     //Everytime param changes, this V code gets notified
//     //     //Pulls 'id' from paramters
//     //     params => {
//     //       const id = +params.get('id');
//     //       this.getProduct(id);
//     //     }
//     //   );
//     // }

//   ngOnInit() {
//       //use activatedRoute
//       //use activated route to get id 
//       //if id, let item instance = product , using productService.getProduct(id)
//       //set quantity: 1
//     this.activatedRoute.paramMap.subscribe(
//         params => {
//             var id = +params.get('id');
//             if (id) {
//                 var item: Item = {
//                     product: this.productService.getProduct(id),
//                     quantity: 1
//                 };
//                 if (localStorage.getItem('cart') == null) {  //if getItem = null, then use setItem
//                     let cart: any = []; // empty array ;
//                     cart.push(item);
//                     localStorage.setItem('cart', JSON.stringify(cart));
//                 } else {
//                     //if not null, set index number 
//                     let index: number = -1;
//                     //for var i=0, i< cart.length; i++
//                     //let item = cart[i]
//                     // then if item's product.id == id,
//                     // set index = i 
//                     //return 
//                 }
//     }
//                 //if index == -1  
//                 //cart.push(item)
//                 //localStorage.setItem to set item ('cart')
//                 //item.quantity +=1
//                 //use local Storage to .setItem again ('cart');
//     })
//                 //this.load() call 
//   }

  //loadCart, this gets the cart item from storage, set as cart 
  // let cart[i] equal to item, 
  //push item.product as product and quantity as quantity 
  // add to total, which is set to 0
  //price * quantity to get total 
//   loadCart(): void {
//       this.total = 0; 
//       this.items = [];
//       let cart = JSON.parse(localStorage.getItem('cart')); 
//       for (var i=0; i< cart.length; i++) {
//         let item = cart[i];
//         this.items.push ({
//             product: item.product,
//             quantity: item.quantity
//         });
//         this.total += item.product.price * item.quantity;
//       }
//   }


//   remove(id: string): void {
//       let cart: any = JSON.parse(localStorage.getItem('cart'));
//       let index: number = -1; //0 is start
//       for (var i = 0; i< cart.length; i++) {
//           let item: Item = cart[i];
//           if (item.product.id == id) {
//               remove 1 from index 
//           }
//       }
//      localStorage.setItem('cart', JSON.stringify(cart));
//      this.loadCart(); //updates cart
//      //basically setting the data just using local storage
//     }

// //   setItems(data: Product[]){
// //     this.products = data;
// //     // this.filteredProducts = data;
// //     console.log("set data", data)
// //   }

// }
