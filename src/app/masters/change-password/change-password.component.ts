import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { AuthService } from 'src/app/services/auth.service';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  oldPwd: string = '';
  newPwd: string = '';
  confirmPassword: string = '';
  showErrMsg: boolean = false;
  blockSpace: RegExp = /[^\s]/;
  SpecialCharErrMsg: boolean = false;
  pswdStrongMsg: boolean = false;
  NumericErrMsg: boolean = false;
  UpperCaseErrMsg: boolean = false;
  LengthErrMsg: boolean = false;
  showMatchMsg: boolean = false;
  cols: any;
  data: any;
  loading: boolean = false;
  responseMsg: Message[] = [];
  userId: any;
  password: any;
  userName: any;


  constructor(private _authService: AuthService, private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this.userId = this._authService.getUserInfo().userid;
    this.userName = this._authService.getUserInfo().username;
  } 

  checkPassword() {
    if (this.newPwd !== undefined && this.newPwd !== null && this.newPwd.trim() !== '' &&
    this.confirmPassword !== undefined && this.confirmPassword !== null && this.confirmPassword.trim() !== '') {
          if(this.newPwd.trim() !== this.confirmPassword.trim()) {
            this.showErrMsg = true;
            this.showMatchMsg = false;
          } else {
            this.showErrMsg = false;
            this.showMatchMsg = true;
          }
    } else {
      this.showErrMsg = false;
    }
  }

  check(NewPassword: any) {

    if (NewPassword.match(/[@$!%*?&]/g)) {
    this.SpecialCharErrMsg = false;
    } else {
    this.SpecialCharErrMsg = true;
    this.pswdStrongMsg = false;
   }    
  if (NewPassword.match(/[0-9]/g)) {   
    this.NumericErrMsg = false;
   } else {    
   this.NumericErrMsg = true;    
   this.pswdStrongMsg = false;    
   }    
   if (NewPassword.match(/[A-Z]/g)) {    
   this.UpperCaseErrMsg = false;    
   } else {    
   this.UpperCaseErrMsg = true;    
   this.pswdStrongMsg = false;    
   }    
   if (NewPassword.length >= 8) {    
   this.LengthErrMsg = false;    
   } else {    
   this.LengthErrMsg = true;    
   this.pswdStrongMsg = false;
   }
   if (NewPassword.match(/[@$!%*?&]/g) && NewPassword.match(/[0-9]/g) && NewPassword.match(/[A-Z]/g) && NewPassword.length > 8)
   this.pswdStrongMsg = true;
  }

  onSubmit() {
    const params = {
      'username': this.userName,
      'oldpassword': this.oldPwd,
      'newpassword': this.newPwd,
      'UserId': this.userId
    }
    console.log('f',params)
    this._restApiService.post('ChangePassword/SaveChangePassword', params).subscribe(res => {
      if (res.item1) {
        this.onClear();   
        this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.SuccessMessage }];
        setTimeout(() => this.responseMsg = [], 3000);        
      } else {
        this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: res.item2 }];
        setTimeout(() => this.responseMsg = [], 3000)
      }
      
    })
  }

  onClear() {
    this.oldPwd = '';
    this.newPwd = '';
    this.confirmPassword = '';
    this.showMatchMsg = false;
   this.pswdStrongMsg = false;
  }
  

}
