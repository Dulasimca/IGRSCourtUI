import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';
import { Message } from 'primeng/api';
import { HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { DateConverter } from 'src/app/helper/date-converter';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-writ-appeals',
  templateUrl: './writ-appeals.component.html',
  styleUrls: ['./writ-appeals.component.scss']
})
export class WritAppealsComponent implements OnInit {

  zoneOptions: SelectItem[] = [];
  zone: any;
  districtOptions: SelectItem[] = [];
  district: any;
  sroOptions: SelectItem[] = [];
  sro: any;
  caseType: any;
  caseTypeOptions: SelectItem[] = [];
  regularNumber: any;
  writappealStatus: any;
  writappealstatusOptions: SelectItem[] = [];
  remarks:any;
  caseId: number = 0;
  writId: number = 0;
  masters?: any;
  responseMsg: Message[] = [];
  cols: any[] = [];
  data: any[] = [];
  loading: boolean = false;
  roleId: any;
  isDisabled: boolean = false;
  disableAutoDisplay: boolean = false;

  @ViewChild('f', {static: false}) _writAppealsForm!: NgForm;
  constructor(private _restApiService: RestapiService, private _masterService: MasterService,
    private _datePipe: DatePipe, private _authService: AuthService, private _converter: DateConverter) { }

  ngOnInit(): void {
    this.cols = TableConstants.writeAppealsColumns;
    this.masters = this._masterService.getMasters();
    this.roleId = this._authService.getUserInfo().roleId;
  }

  assignDefault() {
    this.disableAutoDisplay = false;
  }

  onSelect(value: string) {
    if (this.masters) {
      let caseTypeList: any = [];
      let zoneList: any = [];
      let districtList: any = [];
      let sroList: any = [];
      let writappealStatusList: any = [];
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
        case 'CT':
          if (this.masters.casetype_Masters) {
            this.masters.casetype_Masters.forEach((ct: any) => {
              caseTypeList.push(
                { label: ct.casetypename, value: ct.casetypeid }
              )
            })
            this.caseTypeOptions = caseTypeList;
          }
          break;
          case 'WS':
            if (this.masters.writappealstatus_Masters) {
              this.masters.writappealstatus_Masters.forEach((ws: any) => {
                writappealStatusList.push(
                  { label: ws.writappealstatusname, value: ws.writappealstatusid }
                )
              })
              this.writappealstatusOptions = writappealStatusList;
            }
            break;
      }
    }
  }

  onView() {
    this.data = [];
    this.loading = true;
    const params = new HttpParams().append('zoneid', this.zone.value)
    .set('districtid', this.district.value)
    .set('sroid', this.sro.value)
    .set('casetypeid', this.caseType.value);
    this._restApiService.getByParameters('Writappeals/GetWritappealsMaster', params).subscribe(res => {
      if(res) {
        this.loading = false;
        this.data = res;
      } else {
        this.loading = false;
      }
    })
  }

  onEdit(row: any){
    if (row !== undefined && row !== null) {
      console.log('row',row)
    this.disableAutoDisplay = true;
    this.isDisabled = true;
    this.writId = row.writappealsid;
    this.caseId = row.courtcaseid;
    this.remarks = row.remarks;
    this.regularNumber = row.regularnumber;
    this.writappealStatus = { label: row.writappealstatusname, value: row.writappealstatusid };
    this.writappealstatusOptions = [{ label: row.writappealstatusname, value: row.writappealstatusid }];
    this.zone = { label: row.zonename, value: row.zoneid, };
    this.zoneOptions = [ { label: row.zonename, value: row.zoneid, }];
    this.district = { label: row.districtname, value: row.districtid };
    this.districtOptions = [{ label: row.districtname, value: row.districtid }];
    this.sro = {label:row.sroname, value:row.sroid};
    this.sroOptions = [{label: row.sroname, value:row.sroid}];
    this.caseType = { label:row.casetypename, value:row.casetypeid};
    this.caseTypeOptions = [{ label:row.casetypename, value:row.casetypeid }];
  } 
  }

onSave() {
   const params = {
    'writappealsid': this.writId,
    'courtcaseid': this.caseId,
    'zoneid': this.zone.value,
    'districtid': this.district.value,
    'sroid': this.sro.value,
    'casetypeid': this.caseType.value,
    'regularnumber': this.regularNumber,
    'remarks': this.remarks,
    'writappealstatusid': this.writappealStatus.value,
    'flag': true,
    'createddate': new Date(),
    'userId': this.roleId,
  }
  this._restApiService.post('Writappeals/SaveWritappealsMaster', params).subscribe(res => {
    if (res) {
      this.onView();
      this.clearForm();
      this.isDisabled = false;
      this.data = [];
      this.loading = true;
      this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.SuccessMessage }];
      setTimeout(() => this.responseMsg = [], 3000);
      this.writId = 0;
      this.caseId = 0;
      this.onSave();
    } 
    else {
      this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: ResponseMessage.ErrorMessage }];
      setTimeout(() => this.responseMsg = [], 3000)
    }
  })
}

clearForm() {
  this._writAppealsForm.reset();
  this._writAppealsForm.form.markAsUntouched();
  this._writAppealsForm.form.markAsPristine();
  this.zoneOptions = [];
  this.sroOptions = [];
  this.districtOptions = [];
  this.caseTypeOptions = [];
}
  
}
