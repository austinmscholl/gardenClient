import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service'
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { getDefaultService } from 'selenium-webdriver/edge';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  user: FormGroup
  newUser: any = []

  constructor(private auth: AdminService, private fb: FormBuilder) { } 
  
  

  ngOnInit() {
    this.user = this.fb.group({
    email: new FormControl(),
    password: new FormControl()
  })
  }

  setToken(){
    localStorage.setItem('user', this.newUser)
  }

  signIn(){
    console.log(this.user.controls)
    this.auth.signIn(this.user.controls.email.value, this.user.controls.password.value)
      .subscribe(data => this.newUser.push(data))

      this.setToken()
  }

}
