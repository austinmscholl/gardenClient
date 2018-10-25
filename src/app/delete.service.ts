import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }

  deleteProduct(id) {
    return this.http.delete(`https://efa-gardenapp-backend.herokuapp.com/api/product/${id}`)
      .subscribe(res => console.log(res))
    // console.log(id)
  }
}
