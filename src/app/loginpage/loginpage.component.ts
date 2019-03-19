import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  submitlogin() {
    const obj = { userName : '123', password: '123' };
    this.authService.login(obj);
  }

}
