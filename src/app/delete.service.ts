import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient, private productsService: ProductsService) { }

  deleteProduct(id) {
    return this.http.delete(`https://efa-gardenapp-backend.herokuapp.com/api/product/${id}`)
      .subscribe(res => console.log(res))
    // this.http.get('https://efa-gardenapp-backend.herokuapp.com/api/product')

    // console.log(id)
  }
}
