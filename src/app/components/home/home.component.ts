import { Component, OnInit, NgZone } from '@angular/core';
import { User } from 'src/app/models/user.model';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private zone: NgZone, private http: UserService) { }

  register: User = {
    firstname:'',
    lastname: '',
    email: '',
    phone:'',
    password: ''
    
  }
  submitted = false;

  ngOnInit(): void {
  }

  saveUser() {
   
    const userDetails = {
      firstname: this.register.firstname,
      lastname: this.register.lastname,
      email: this.register.email,
      phone: this.register.phone.toString(),
      password: this.register.password
      }
      console.log(userDetails);
      this.http.signup(userDetails);
      this.submitted = true
      
    };

    newUser(): void {
      this.submitted = false;
      this.register = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: ''
        
      };
    }
  }
