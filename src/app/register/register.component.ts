import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register = {
    name : '',
    email: '',
    password: ''
  } ;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
 
  }

  registerUser() {
    this.auth.registerUser(this.register).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        this.router.navigate(['login'])
      },
      (err) => {console.log(err);
      } 
      
    )
  }
}
