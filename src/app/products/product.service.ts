import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Product, Appliances, Foods, HomeGoods } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';
  private homegoodsUrl = 'api/homegoods';
  private appliancesUrl = 'api/appliances';
  private foodsUrl = 'api/foods';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getProduct(id: number): Observable<Product> {
    if (id === 0) {
      return of(this.initializeProduct());
    }
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    product.id = null; // For in memory api service
    return this.http.post<Product>(this.productsUrl, product, { headers: headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Product>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );
  }

  updateProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${product.id}`;
    return this.http.put<Product>(url, product, { headers: headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + product.id)),
        // Return the product on an update
        map(() => product),
        catchError(this.handleError)
      ); 
  }

  getAppliances(): Observable<Appliances[]> {
    return this.http.get<Appliances[]>(this.appliancesUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getAppliance(id: number): Observable<Appliances> {
    if (id === 0) {
      return of(this.initializeAppliance()); 
    }
    const url = `${this.appliancesUrl}/${id}`;
    return this.http.get<Appliances>(url)
      .pipe(
        tap(data => console.log('getAppliance: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getHomeGoods(): Observable<HomeGoods[]> {
    return this.http.get<HomeGoods[]>(this.homegoodsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getHomeGood(id: number): Observable<HomeGoods> {
    if (id === 0) {
      return of(this.initializeHomeGood()); 
    }
    const url = `${this.homegoodsUrl}/${id}`;
    return this.http.get<HomeGoods>(url)
      .pipe(
        tap(data => console.log('getHomeGoods: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getFoods(): Observable<Foods[]> {
    return this.http.get<Foods[]>(this.foodsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getFood(id: number): Observable<Foods> {
    if (id === 0) {
      return of(this.initializeFood()); // 85
    }
    const url = `${this.foodsUrl}/${id}`;
    return this.http.get<Foods>(url)
      .pipe(
        tap(data => console.log('getFoods: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }



  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeProduct(): Product {
    // Return an initialized object
    return {
      id: 0,
      productName: null,
      productCode: null,
      tags: [''],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null
    };
  }

  private initializeAppliance(): Appliances {
    // Return an initialized object
    return {
      id: 0,
      productName: null,
      productCode: null,
      tags: [''],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null
    };
  }

  private initializeHomeGood(): HomeGoods {
    // Return an initialized object
    return {
      id: 0,
      productName: null,
      productCode: null,
      tags: [''],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null
    };
  }

  private initializeFood(): Foods {
    // Return an initialized object
    return {
      id: 0,
      productName: null,
      productCode: null,
      tags: [''],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null
    };
  }
}