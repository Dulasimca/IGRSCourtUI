import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message, SelectItem } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-case-hearing-date',
  templateUrl: './case-hearing-date.component.html',
  styleUrls: ['./case-hearing-date.component.scss']
})
export class CaseHearingDateComponent implements OnInit {

  zoneOptions: SelectItem[] = [];
  zone: any;
  districtOptions: SelectItem[] = [];
  district: any;
  sroOptions: SelectItem[] = [];
  sro: any;
  caseTypeOptions: SelectItem[] = [];
  caseType: any;
  courtcaseOptions: SelectItem[] = [];
  hearingDate: Date = new Date();
  courtcaseName: any;
  remarks: any;
  data: any[] = [];
  cols: any;
  disableAutoDisplay: boolean = false;
  responseMsg: Message[] = [];
  loading: boolean = false;
  masters?: any;
  userInfo!: User;
  courtCaseData: any;
  courtcaseLabel: any;
  caseHearingId: any;
  @ViewChild('f', { static: false }) _caseHearingForm!: NgForm;


  constructor(private _masterService: MasterService, private _authService: AuthService, private _restApiService: RestapiService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.cols = TableConstants.casehearingColumns;
    this.masters = this._masterService.getMasters();
    this.userInfo = this._authService.getUserInfo();
  }

  onSelect(value: string) {
    if (this.masters !== undefined && this.masters !== null) {
      let caseTypeList: any = [];
      let zoneList: any = [];
      let districtList: any = [];
      let sroList: any = [];
      let courtList: any = [];
      switch (value) {
        case 'ZN':
          if (this.masters.zone_Masters !== undefined && this.masters.zone_Masters !== null) {
            this.masters.zone_Masters.forEach((zn: any) => {
              zoneList.push(
                { label: zn.zonename, value: zn.zoneid, }
              )
            })
            this.zoneOptions = zoneList;
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
          }
          break;
          case 'C':
            if (this.courtCaseData !== undefined && this.courtCaseData !== null) {
              this.courtCaseData.forEach((ct: any) => {
                ct.courtcaseLabel = ct.casetypename + '-' + ct.petitionername + '-' + ct.mainrespondents 
                courtList.push(
                  { label: ct.courtcaseLabel, value: ct.courtcaseid }
                )
              })
              this.courtcaseOptions = courtList;
            } else {
              this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: ResponseMessage.DropdownMessage }];
              setTimeout(() => this.responseMsg = [], 3000);
            }
            break;
            // petitionername mainrespondents
        
        
      }
    }
  }

  //to fetch data from courtcase table to courtcase type dropdown
  loadCourtCase() {
    // if(this.zone.value !== null && this.zone.value !== undefined && this.district.value !== null && this.district.value !== undefined &&
    //   this.sro.value !== null && this.sro.value !== undefined && this.caseType.value !== null && this.caseType.value !== undefined){
    const params = new HttpParams().append('zoneid', this.zone.value)
    .set('districtid', this.district.value)
    .set('sroid', this.sro.value)
    .set('casetypeid', this.caseType.value);
    this._restApiService.getByParameters('Writappeals/GetWritappealsMaster', params).subscribe(res => {
      if(res !== undefined && res !== null) {
        if(res.length !==0){
          this.courtCaseData = res;
        } else {
          this.courtCaseData = [];
        }
      } 
    })
  // }
  }

  loadCaseHearings() {
    const params = new HttpParams().append('zoneid', this.zone.value)
    .set('districtid', this.district.value)
    .set('sroid', this.sro.value)
    .set('casetypeid', this.caseType.value)
    .set('courtcaseid', this.courtcaseName.value);
    this._restApiService.getByParameters('CaseHearing/GetCaseHearing', params).subscribe(res => {
      if(res !== undefined && res !== null) {
        if(res.length !==0){
          this.data = res;
        } else {
          this.data = [];
        }
      } 
    })
  }

  onEdit(rowdata:any) {

  }

  onSave() {
    const params = {
      'casehearingid': this.caseHearingId,
      'zoneid': this.zone.value,
      'districtid': this.district.value,
      'sroid': this.sro.value,
      'casetypeid': this.caseType.value,
      'courtcaseid': this.courtcaseName.value,
      'remarks': this.remarks,
      'hearingdate': this.datePipe.transform (this.hearingDate, 'yyyy-MM-dd'),
      'userid': this.userInfo.userid,
      'flag': true,
      'createdate': new Date(),
    }
    this._restApiService.post('CaseHearing/SaveCaseHearing', params).subscribe(res => {
      if (res) {
        this.clearForm();
        this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.SuccessMessage }];
        setTimeout(() => this.responseMsg = [], 3000);
        // this.assignDefault();
        // this.onLoadCases();
      } else {
        this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: ResponseMessage.ErrorMessage }];
        setTimeout(() => this.responseMsg = [], 3000)
      }
    })

  }
  clearForm() {
    this._caseHearingForm.reset();
    this._caseHearingForm.form.markAsUntouched();
    this._caseHearingForm.form.markAsPristine();
    this.zoneOptions = [];
    this.sroOptions = [];
    this.districtOptions = [];
    this.caseTypeOptions = [];
    this.courtcaseOptions = [];

  }

}
