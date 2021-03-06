import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  signIn(email:string, password:string){
    return this.http.post<any>('https://efa-gardenapp-backend.herokuapp.com/api/auth/login', {email: email, password: password})
      .pipe(map(user=> {
        if(user){
          localStorage.setItem('token', JSON.stringify(user.token))
        }
        return user
      }))
  }

}


