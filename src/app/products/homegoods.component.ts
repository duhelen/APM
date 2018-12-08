import { Component, OnInit } from '@angular/core';

import { HomeGoods } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-homegoods',
  templateUrl: './homegoods.component.html',
  styleUrls: ['./product-list.component.css']
})
export class HomeGoodsListComponent implements OnInit {
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
    this.filteredHomeGoods = this.listFilter ? this.performFilter(this.listFilter) : this.homegoods;
  }

  filteredHomeGoods: HomeGoods[] = [];
  homegoods: HomeGoods[] = [];

  constructor(private productService: ProductService) { }


  performFilter(filterBy: string): HomeGoods[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.homegoods.filter((homegoods: HomeGoods) =>
    homegoods.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getHomeGoods().subscribe(
      products => {
        this.homegoods = products;
        this.filteredHomeGoods = this.homegoods;
      },
      error => this.errorMessage = <any>error
    );
  }
}