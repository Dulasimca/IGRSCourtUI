import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseMessage } from '../constants/message-constants';
import { User } from '../interfaces/user.interface';
import { AuthService } from '../services/auth.service';
import { MasterService } from '../services/master.service';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  showPwd: boolean = false;
  responseMsg: any;
  userInfo!: User;
  @ViewChild('uname', { static: false }) _username!: HTMLInputElement;
  constructor(private _authService: AuthService, private _router: Router,
    private _masterService: MasterService, private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this._authService.logout();
  }

  onLogin() {
    const login_params = new HttpParams().append('username', this.username)
      .set('password', this.password);
    this._restApiService.getByParameters('Login', login_params).subscribe(response => {
      if (response.item1) {
        this._masterService.invokeMasterData();
        if (response.item3.length !== 0) {
          ///user login info null check
          [response.item3].forEach((key: any) => {
            key.districtid = (key.districtid !== null && key.districtid !== undefined) ? key.districtid : 0;
            key.sroid = (key.sroid !== null && key.sroid !== undefined) ? key.sroid : 0;
            key.zoneid = (key.zoneid !== null && key.zoneid !== undefined) ? key.zoneid : 0;
          })
          this.userInfo = response.item3;
          ///setting user info in local storage via authservice
          this._authService.setUserInfo(this.userInfo);
        }
        ///loading menu & setting menu object to authservice to consume later
        const menu_params = new HttpParams().append('roleid', this._authService.getUserInfo().roleid);
        this._restApiService.getByParameters('Masters/GetMenuMasters', menu_params).subscribe(res => {
          ///setting menu in authservice as object to load after login
          this._authService.setMenu(res);
          this._authService.setMenuStatus(true);
          ///setting loggedin value as true after loading successfully all dependencies
          this._authService.login();
        });
      } else {
        this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: response.item2 }];
        setTimeout(() => this.responseMsg = [], 3000);
      }
    })

  }

  onEnter($event: any) {
    if ($event.key === 'Enter') {
      if (this.username !== null && this.username !== undefined && this.password !== null
        && this.password !== undefined) {
        this.onLogin();
      }
    }
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
