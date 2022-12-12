import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';
import { AuthService } from 'src/app/services/auth.service';
import { Message } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { TableConstants } from 'src/app/constants/table-constants';
import { ResponseMessage } from 'src/app/constants/message-constants';

@Component({
  selector: 'app-usermaster',
  templateUrl: './usermaster.component.html',
  styleUrls: ['./usermaster.component.scss']
})
export class UsermasterComponent implements OnInit {

  selectedType: any;
  userName: any;
  mailId: any;
  password: any;
  showPwd: boolean = false;
  mobileNo: any;
  zone: any
  zoneOptions: any;
  district: any;
  districtOptions: any;
  sro: any;
  sroOptions: any;
  roleOptions: any;
  createdDate: any;

  masters?: any;
  roleId: any;
  cols: any[] = [];
  data: any[] = [];
  loading: boolean = false;
  responseMsg: Message[] = [];

  @ViewChild('f', {static: false}) _respondentForm!: NgForm;
  RowId: any;

    constructor(private _restApiService: RestapiService, private _masterService: MasterService,
    private _datePipe: DatePipe, private _authService: AuthService) { }

  ngOnInit(): void {
    this.masters = this._masterService.masterData;
    this.cols = TableConstants.UserMasterColumns;
    this.onView();
      }

  onSubmit() {
    const params = {
      'userid': this.RowId,
      'username': this.userName,
      'mailid': this.mailId,
      'password': this.password,
      'mobile': this.mobileNo,
      'zoneid': this.zone,
      'districtid': this.district,
      'sroid': this.sro,
      'roleid': this.roleId,      
      'createddate': new Date(),
      'flag': (this.selectedType == 1) ? true : false
    }
    this._restApiService.post('UserMaster/SaveUserMaster', params).subscribe(res => {
      if (res) {
        this.onView();
        this.onClear();
        this._respondentForm.reset();
        this._respondentForm.form.markAsUntouched();
        this._respondentForm.form.markAsPristine();
        this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.SuccessMessage }];
        setTimeout(() => this.responseMsg = [], 3000);
      } else {
        this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: ResponseMessage.ErrorMessage }];
        setTimeout(() => this.responseMsg = [], 3000)
      }
    })
    }

  onView(){
    this._restApiService.get('UserMaster/GetUserMaster').subscribe(res => {
      if(res) {
        res.forEach((i:any) => {
          i.flag = (i.flag == true) ? 'Active' : 'InActive'
        })  
      }
      this.data = res;
    })
  }

  onClear() {
    this.userName = null;
    this.mailId = null;
    this.password = null;
    this.mobileNo = null;
    this.zone = null;
    this.zoneOptions = [];
    this.district = null;
    this.districtOptions  = [];
    this.sro = null;
    this.sroOptions = [];
    this.roleId = null;
    this.roleOptions  = [];
    this.createdDate = new Date();
    this.RowId = 0;
  }

  onSelect(value: string) {
    if (this.masters) {
      let zoneList: any = [];
      let districtList: any = [];
      let sroList: any = [];
      let roleList: any = [];
      switch (value) {
        case 'ZN':
          if (this.masters.zone_Masters) {
            this.masters.zone_Masters.forEach((zn: any) => {
              zoneList.push(
                { label: zn.zonename, value: zn.zoneid, }
              )
            })
            this.zoneOptions = zoneList;
          }
          break;
        case 'DT':
          if (this.masters.district_Masters) {
            if (this.zone) {
              this.masters.district_Masters.forEach((dt: any) => {
                if (dt.zoneid === this.zone) {
                  districtList.push(
                    { label: dt.districtname, value: dt.districtid}
                  )
                }
              })
            }
            this.districtOptions = districtList;
          }
          break;
        case 'SR':
          if (this.masters.sro_Masters) {
            if (this.zone && this.district) {
              this.masters.sro_Masters.forEach((sr: any) => {
                if (sr.zoneid === this.zone && sr.districtid === this.district) {
                  sroList.push(
                    { label: sr.sroname, value: sr.sroid}
                  )
                }
              })
            }
            this.sroOptions = sroList;
          }
          break;
        case 'R':
          if(this.masters.rolemaster) {
            this.masters.rolemaster.forEach((r:any) => {
              roleList.push(
                { label: r.rolename, value: r.roleid}
              )
            })
          }
          this.roleOptions = roleList;
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

  onEdit(row: any) {
    this.RowId = row.userid;
    this.userName = row.username;
    this.mailId = row.mailid;
    this.password = row.password;
    this.mobileNo = row.mobile;
    this.zone = row.zoneid;
    this.zoneOptions = [{ label: row.zonename, value: row.zoneid}];
    this.district = row.districtid;
    this.districtOptions  = [{ label: row.districtname, value: row.districtid}];
    this.sro = row.sroid;
    this.sroOptions = [{ label: row.sroname, value: row.sroid}];
    this.roleId = row.roleid;
    this.roleOptions  = [{ label: row.rolename, value: row.roleid}];
    this.createdDate = row.createddate;
  }

}
