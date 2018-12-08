import { Component, OnInit } from '@angular/core';

import { Product, Appliances, Foods, HomeGoods } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class GeneralListComponent implements OnInit {
  showingFoods: Boolean = false;
  showingHomeGoods: Boolean = false;
  showingAppliances: Boolean = false;



constructor(private productService: ProductService) { }

  displayFoods() {
    this.showingFoods = true;
    this.showingAppliances = false;
    this.showingHomeGoods= false;
  }
  displayAppliances() {
    this.showingFoods = false;
    this.showingAppliances = true;
    this.showingHomeGoods= false;
  }
  displayHomeGoods() {
    this.showingFoods = false;
    this.showingAppliances = false;
    this.showingHomeGoods= true;
  }

  ngOnInit() {

  }
}



  // pageTitle = 'Product List';
  // imageWidth = 50;
  // imageMargin = 2;
  // showImage = false;
  // errorMessage = '';

//   _listFilter = '';
//   get listFilter(): string {
//     return this._listFilter;
//   }
//   set listFilter(value: string) {
//     this._listFilter = value;
//     this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
//     this.filteredAppliances = this.listFilter ? this.performFilterA(this.listFilter) : this.appliances;
//     this.filteredFoods = this.listFilter ? this.performFilterF(this.listFilter) : this.foods;
//     this.filteredHomeGoods = this.listFilter ? this.performFilterH(this.listFilter) : this.homegoods;
//   }

//   filteredProducts: Product[] = [];
//   filteredAppliances: Appliances[] = [];
//   filteredHomeGoods: HomeGoods[] = [];
//   filteredFoods: Foods[] = [];
//   products: Product[] = [];
//   appliances: Appliances[] = [];
//   homegoods: HomeGoods[] = [];
//   foods: Foods[] = [];

//   constructor(private productService: ProductService) { }


//   performFilter(filterBy: string): Product[] {
//     filterBy = filterBy.toLocaleLowerCase();
//     return this.products.filter((product: Product) =>
//       product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
//   }
//   performFilterA(filterBy: string): Appliances[] {
//     filterBy = filterBy.toLocaleLowerCase();
//     return this.appliances.filter((appliances: Appliances) =>
//     appliances.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
//   }
//   performFilterF(filterBy: string): Foods[] {
//     filterBy = filterBy.toLocaleLowerCase();
//     return this.foods.filter((foods: Foods) =>
//       foods.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
//   }
//   performFilterH(filterBy: string): HomeGoods[] {
//     filterBy = filterBy.toLocaleLowerCase();
//     return this.homegoods.filter((homegoods: HomeGoods) =>
//     homegoods.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
//   }
//   toggleImage(): void {
//     this.showImage = !this.showImage;
//   }

//   ngOnInit(): void {
//     this.productService.getProducts().subscribe(
//       products => {
//         this.products = products;
//         this.filteredProducts = this.products;
//       },
//       error => this.errorMessage = <any>error
//     );

//     this.productService.getAppliances().subscribe(
//       appliances => {
//         this.appliances = appliances;
//         this.filteredAppliances = this.appliances;
//       },
//       error => this.errorMessage = <any>error
//     );

//     this.productService.getHomeGoods().subscribe(
//       homegoods => {
//         this.homegoods = homegoods;
//         this.filteredHomeGoods = this.homegoods;
//       },
//       error => this.errorMessage = <any>error
//     );

//     this.productService.getFoods().subscribe(
//       foods => {
//         this.foods = foods;
//         this.filteredFoods = this.foods;
//       },
//       error => this.errorMessage = <any>error
//     );
//   }

//   // setData(): {

//   // }
// }
