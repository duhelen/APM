import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';
import { ProductListComponent } from './products.component'
import { ProductData } from './product-data';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class GeneralListComponent implements OnInit {
  // showingFoods: Boolean = false;
  // showingHomeGoods: Boolean = false;
  showingProducts: Boolean = false;

  types: String[];
  productTypes: any[]; 
  


constructor(private productService: ProductService,
            private productlistcomponent: ProductListComponent) { }

  
  getUniqueProductTypes(): String[] { //returning product array
    var types: String[] = []

    this.productService.getProducts().subscribe(
      products => {
        console.log(products);
        for (var i = 0; i < products.length; i++) {
          var found = false

           for (var j = 0; j < types.length; j++) {
             if (products[i].productType == types[j]) {
               var found = true
               continue;
             }
           }

           if (!found) {
             types.push(products[i].productType)
           }
        }
      });

    return types;
  }

  // html should execute this function 
  displayProductsByType(type: string) {
   this.productService.getProductsByType(type).subscribe(
      product => this.productlistcomponent.setProducts(product))
  }

  ngOnInit() {
     this.types = this.getUniqueProductTypes();
     this.displayProductsByType("jewelry")
    // create the navbar with these types
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
