import { Component, OnInit } from '@angular/core';

import { Foods } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./product-list.component.css']
})
export class FoodListComponent implements OnInit {
  pageTitle = 'Foods List';
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
    this.filteredFoods = this.listFilter ? this.performFilter(this.listFilter) : this.foods;
  }

  filteredFoods: Foods[] = [];
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
        this.filteredFoods = this.foods;
      },
      error => this.errorMessage = <any>error
    );
  }
}