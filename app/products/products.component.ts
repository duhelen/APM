import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./general-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = '';
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;
  errorMessage = '';

  _listFilter = '';
  productlistcomponent: any;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

filteredProducts: Product[] = [];
products: Product[] = [];

  constructor(private productService: ProductService) { }


  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((products: Product) =>
    products.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // Added
  public setProducts(data: Product[]){
    this.products = data;
    this.filteredProducts = data;
    console.log("set data", data)
  }

  ngOnInit(): void {
    console.log("in console")
  }
}



// this.filteredProducts = data;