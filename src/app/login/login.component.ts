import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { AuthService } from '../services/auth.service';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  showPwd: boolean = false;
  userInfo!: User;
  constructor(private _authService: AuthService, private _router: Router, private _masterService: MasterService) { }

  ngOnInit(): void {
    this._authService.logout();
  }

  onLogin() {
    this._masterService.getMasters();
    this.userInfo = {
      roleId: 1
    }
    this._authService.login(this.userInfo);
    this._authService.isLoggedIn.subscribe(value => {
      if (value) {
        // this._authService.isMenuLoaded.subscribe(check => {
        //   if(check) {
              this._router.navigate(['/dashboard']);
          // }
        // })
      }
    });
  }

  onShowPwd() {
    var inputValue = (<HTMLInputElement>document.getElementById('pwd'));
    if (inputValue.type === 'password') {
      inputValue.type = 'text';
      this.showPwd = !this.showPwd;
    } else {
      this.showPwd = !this.showPwd;
      inputValue.type = 'password';
    }
  }


}
