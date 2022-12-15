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
  @ViewChild('uname', {static: false}) _username!: HTMLInputElement;
  constructor(private _authService: AuthService,
    private _masterService: MasterService, private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this._authService.logout();
  }

  onLogin() {
    this._masterService.getMasters();
    const params = new HttpParams().append('username', this.username)
      .set('password', this.password);
    this._restApiService.getByParameters('Login', params).subscribe(response => {
      if (response.item1) {
        this.userInfo = response.item3;
        this._authService.login(this.userInfo);
      } else {
        this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: response.item2 }];
        setTimeout(() => this.responseMsg = [], 3000);
      }
    })

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
