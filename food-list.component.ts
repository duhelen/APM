import { Component, OnInit } from '@angular/core';

import { Foods } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class FoodListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.foods;
  }

  filteredProducts: Foods[] = [];
  foods: Foods[] = [];

  constructor(private productService: ProductService) { }


  performFilter(filterBy: string): Foods[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.foods.filter((foods: Foods) =>
      foods.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getFoods().subscribe(
      products => {
        this.foods = products;
        this.filteredProducts = this.foods;
      },
      error => this.errorMessage = <any>error
    );
  }
}
