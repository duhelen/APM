import { Component, OnInit } from '@angular/core';

import { Appliances } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ApplianceListComponent implements OnInit {
  pageTitle = 'Appliances List';
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
    this.filteredAppliances = this.listFilter ? this.performFilter(this.listFilter) : this.appliances;
  }

  filteredAppliances: Appliances[] = [];
  appliances: Appliances[] = [];

  constructor(private productService: ProductService) { }


  performFilter(filterBy: string): Appliances[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.appliances.filter((appliances: Appliances) =>
    appliances.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getAppliances().subscribe(
      products => {
        this.appliances = products;
        this.filteredAppliances = this.appliances;
      },
      error => this.errorMessage = <any>error
    );
  }
}