import { Component, OnInit, ViewChild } from '@angular/core';
import { TableConstants } from 'src/app/constants/table-constants';
import { SelectItem } from 'primeng/api/selectitem';
import {ButtonModule} from 'primeng/button';
import { RestapiService } from 'src/app/services/restapi.service';
import { AuthService } from 'src/app/services/auth.service';
import { DatePipe } from '@angular/common';
import { MasterService } from 'src/app/services/master.service';
import { DateConverter } from 'src/app/helper/date-converter';
import { Message } from 'primeng/api';
import { HttpParams } from '@angular/common/http';
import { User } from 'src/app/interfaces/user.interface';
import { NgForm } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';

@Component({
  selector: 'app-govtresp-report',
  templateUrl: './govtresp-report.component.html',
  styleUrls: ['./govtresp-report.component.scss']
})
export class GovtrespReportComponent implements OnInit {

  zone: any;
  zoneOptions: SelectItem[] = [];
  district: any;
  districtOptions: SelectItem[] = [];
  sro: any;
  sroOptions: SelectItem[] = [];
  caseType: any;
  caseTypeOptions: SelectItem[] = [];
  cols: any[] = [];
  data: any[] = [];
  masters?: any;
  responseMsg: Message[] = [];
  caseId: any;
  loading: boolean = false;
  fromDate: any;
  toDate: any;
  disableAutoDisplay: boolean = false;
  userInfo!: User;
  all: any;
  respondentType: any;
  respondents: any;
  respondentTypeOptions: SelectItem[] = [];
  
  @ViewChild('f', {static: false}) _reportsForm!: NgForm;
  constructor(private _restApiService: RestapiService, private _masterService: MasterService,
    private _datePipe: DatePipe, private _authService: AuthService, private _converter: DateConverter) { }

  ngOnInit(): void {
    this.cols = TableConstants.reportsColumns;
    this.masters = this._masterService.getMasters();
    this.userInfo = this._authService.getUserInfo();
  }

  onSelect(value: string) {
    if (this.masters !== undefined && this.masters !== null) {
      let caseTypeList: any = [];
      let zoneList: any = [];
      let districtList: any = [];
      let sroList: any = [];
      let responseTypeList: any = [];
      switch (value) {
        case 'ZN':
          if (this.masters.zone_Masters !== undefined && this.masters.zone_Masters !== null) {
            this.masters.zone_Masters.forEach((zn: any) => {
              zoneList.push(
                { label: zn.zonename, value: zn.zoneid, }
              )
            })
            this.zoneOptions = zoneList;
            this.zoneOptions.unshift({ label: 'ALL', value: 0 });
            this.zoneOptions.unshift({ label: '-select-', value: null });
          }
          break;
        case 'DT':
          if (this.masters.district_Masters !== undefined && this.masters.district_Masters !== null) {
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
            this.districtOptions.unshift({ label: 'ALL', value: 0 });
            this.districtOptions.unshift({ label: '-select-', value: null });
          }
          break;
        case 'SR':
          if (this.masters.sro_Masters !== undefined && this.masters.sro_Masters !== null) {
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
            this.sroOptions.unshift({ label: 'ALL', value: 0 });
            this.sroOptions.unshift({ label: '-select-', value: null });
          }
          break;
        case 'CT':
          if (this.masters.casetype_Masters !== undefined && this.masters.casetype_Masters !== null) {
            this.masters.casetype_Masters.forEach((ct: any) => {
              caseTypeList.push(
                { label: ct.casetypename, value: ct.casetypeid }
              )
            })
            this.caseTypeOptions = caseTypeList;
            this.caseTypeOptions.unshift({ label: 'ALL', value: 0 });
            this.caseTypeOptions.unshift({ label: '-select-', value: null });
          }
          break;
          case 'RT':
            this.respondents="";
            if (this.masters.responsetype_Masters !== undefined && this.masters.responsetype_Masters !== null) {
              this.masters.responsetype_Masters.forEach((rt: any) => {
                responseTypeList.push(
                  { label: rt.responsetypename, value: rt.responsetypeid }
                )
              })
              this.respondentTypeOptions = responseTypeList;
              this.respondentTypeOptions.unshift({ label: 'ALL', value: 0});
              this.respondentTypeOptions.unshift({ label: '-select-', value: null });
            }
            break;
        }
      }
    }

    onLoadCases() {
      if (this.fromDate !== undefined && this.fromDate !== null && this.toDate !== undefined && this.toDate !== null) {
        this.data = [];
        this.loading = true;
        const params = new HttpParams().append('userid', this.userInfo.roleid)
        .set('fromdate', this._datePipe.transform(this.fromDate, 'yyyy-MM-dd') as any)
        .set('todate', this._datePipe.transform(this.toDate, 'yyyy-MM-dd') as any)
        .set('zoneid', this.zone.value)
        .set('sroid', this.sro.value)
        .set('districtid', this.district.value)
        .set('casetypeid', this.caseType.value)
        .set('respondentType', this.respondentType.value);
        this._restApiService.getByParameters('Respondent_Report_/GetRespondentReport', params).subscribe(res => {
          if (res) {
            this.loading = false;
            this.data = res;
          } 
        })
      }
    }  

    reset() {
      this._reportsForm.reset();
      this._reportsForm.form.markAsUntouched();
      this._reportsForm.form.markAsPristine()
      this.loading = false;

    }

}
