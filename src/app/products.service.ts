import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  productsUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product';


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.productsUrl);
  }
}
