import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {
    phone: '',
    password: ''
  }
  submitted = false;


  constructor(private router: Router, private zone: NgZone, private http: UserService) { }

  ngOnInit(): void {
  }

  saveUser() {
    const userDetails = {
      phone: this.user.phone,
      password: this.user.password
    };
    // this.submitted = true;
    return this.http.signin(userDetails)
  }

  // async register() {
//     await this.zone.run(async () => {
//       this.router.navigate(['/user/signup']).then(r => console.log(r));
//     });
//   }

//   async resetPwd() {
//     await this.zone.run(async () => {
//       this.router.navigate(['/user/resetpwd']).then(r => console.log(r));
//     });
// }

// async home() {
//   await this.zone.run(async () => {
//     this.router.navigate(['']).then(r => console.log(r));
//   });
// }

// async dashboard() {
//   await this.zone.run(async () => {
//     this.router.navigate(['/user/dashboard']).then(r => console.log(r));
//   });
// }

}
