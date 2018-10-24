import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  signIn(email:string, password:string) {
    return this.http.post('https://efa-gardenapp-backend.herokuapp.com/api/auth/login', {email: email, password: password})
  }

}


