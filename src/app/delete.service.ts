import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }

  

  deleteProduct(id) {
  let headers = {
    headers: new HttpHeaders({
      'Authorization': JSON.parse(localStorage.getItem('token'))
    })
  }
    return this.http.delete(`https://efa-gardenapp-backend.herokuapp.com/api/product/${id}`, headers)
      .subscribe(res => console.log(res))
  }
}
