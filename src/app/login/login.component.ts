import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  // @ViewChild()
  constructor(private _authService: AuthService, private _router: Router,
    private _masterService: MasterService) { }

  ngOnInit(): void {
    this._authService.logout();
  }

  onLogin() {
    this._masterService.getMasters();
    setTimeout(() => {
      this._authService.login();
      this._router.navigate(['/dashboard']);
    }, 100)
  }

  onShowPwd() {
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
