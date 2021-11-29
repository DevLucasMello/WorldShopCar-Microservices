import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registro(){
    this.router.navigate(['registro']);
  }

}
