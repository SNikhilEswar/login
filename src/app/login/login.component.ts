import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = {
    email: '',
    password: ''
  };
  errors;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  loginUser() {
    // console.log(this.loginForm);
    return this.auth.loginUser(this.loginForm)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token)
        this.router.navigate(['/home'])
      },
      err => {
        console.log(err);
        this.errors = err.error;
      }
      
    )
    
  }

}
