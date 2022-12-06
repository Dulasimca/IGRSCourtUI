import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';
import { AuthService } from 'src/app/services/auth.service';

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
  role: any;
  roleOptions: any;
  createdDate: any;

  masters?: any;
  roleId: any;

    constructor(private _restApiService: RestapiService, private _masterService: MasterService,
    private _datePipe: DatePipe, private _authService: AuthService) { }

  ngOnInit(): void {
    this.masters = this._masterService.masterData;
      }

  onSubmit() {
   
    }

  onView(){
  
  }

  onClear() {
    
  }

  onSelect(value: string) {
    if (this.masters) {
      let caseStatusList: any = [];
      let caseTypeList: any = [];
      let zoneList: any = [];
      let districtList: any = [];
      let sroList: any = [];
      let courtList: any = [];
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
                if (dt.zoneid === this.zone.value) {
                  districtList.push(
                    { label: dt.districtname, value: dt.districtid, zoneId: dt.zoneid }
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
                if (sr.zoneid === this.zone.value && sr.districtid === this.district.value) {
                  sroList.push(
                    { label: sr.sroname, value: sr.sroid, zoneId: sr.zoneid, districtId: sr.districtid }
                  )
                }
              })
            }
            this.sroOptions = sroList;
          }
          break;
          
      }
    }
  }

  onSave() {
        const params = {
      'zoneid': this.zone.value,
      'districtid': this.district.value,
      'sroid': this.sro.value,
      'flag': true,
      'createdate': new Date(),
      'userId': this.roleId,
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
