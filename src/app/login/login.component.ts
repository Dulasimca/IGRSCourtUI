import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  showPwd: boolean = false;
  // @ViewChild()
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this._authService.logout();
  }

  onLogin() {
    this._authService.login();
    this._router.navigate(['/dashboard']);
  }

  onShowPwd() {
    // if (password.trim() !== '' && this.password !== null && this.password !== undefined) {
    //   this.showPwd = !this.showPwd;
    //   if (type === 0) {
    //     document.getElementById('pwd')?.setAttribute('value', this.password);
    //   } else {

    //   }
    // }
    var inputValue = (<HTMLInputElement>document.getElementById('pwd'));
    console.log('in', inputValue)
    if (inputValue.type === 'password') {
      inputValue.type = 'text';
      this.showPwd = !this.showPwd;
    } else {
      this.showPwd = !this.showPwd;
      inputValue.type = 'password';
    }
  }


}
