import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  productsUrl = 'assets/products.json';

  getProducts() {
    return this.http.get(this.productsUrl);
  }

  constructor(private http: HttpClient) { }
}
