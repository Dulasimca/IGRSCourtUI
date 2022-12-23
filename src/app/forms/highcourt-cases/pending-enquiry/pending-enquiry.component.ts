import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { DateConverter } from 'src/app/helper/date-converter';
import { AuthService } from 'src/app/services/auth.service';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-pending-enquiry',
  templateUrl: './pending-enquiry.component.html',
  styleUrls: ['./pending-enquiry.component.scss']
})
export class PendingEnquiryComponent implements OnInit {
  zoneOptions: SelectItem[] = [];
  zone: any;
  districtOptions: SelectItem[] = [];
  district: any;
  sroOptions: SelectItem[] = [];
  sro: any;
  caseTypeOptions: SelectItem[] = [];
  caseType: any;
  caseYear:any;
  caseNo: any;
  caseDate: any;
  highCourtNameOptions: SelectItem[] = [];
  highCourtName: any;
  stateOfCaseOptions: SelectItem[] = [];
  stateOfCase: any;
  subject:any;
  petitionerName: any;
  respondents: string = '';
  writappealStatus: any;
  writappealstatusOptions: SelectItem[] = [];
  gistOfCase: any;
  referenceNo: any;
  remarks: any;
  cols: any[] = [];
  data: any[] = [];
  caseId: number = 0;
  writId: number = 0;
  dateValue: any;
  masters?: any;
  loading: boolean = false;
  fromDate: any;
  toDate: any;
  roleId: any;
  userInfo!: User;
  isDisabled: boolean = false;
  isEditable: boolean = false;
  disableAutoDisplay: boolean = false;

  @ViewChild('f', {static: false}) _pendingEnquiryCaseDetailsForm!: NgForm;
  responseMsg: { severity: string; detail: string; }[] | undefined;
  pendingenquiryid: any;
  constructor(private _restApiService: RestapiService, private _masterService: MasterService,
    private _datePipe: DatePipe, private _authService: AuthService, private _converter: DateConverter) { }

  ngOnInit(): void {
    this.cols = TableConstants.pendingEnquiryColumns;
    this.masters = this._masterService.getMasters();
    this.roleId = this._authService.getUserInfo().roleId;
  }

  assignDefault() {
    this.disableAutoDisplay = false;
    this.caseDate = new Date();
    this.caseId = 0;
  }

  onSelect(value: string) {
    if (this.masters) {
      let caseTypeList: any = [];
      let zoneList: any = [];
      let districtList: any = [];
      let sroList: any = [];
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
      this._restApiService.getByParameters('Pendingenquiry/GetPendingenquiry', params).subscribe(res => {
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
      this.disableAutoDisplay = true;
      this.writId = row.writappealsid;
      this.caseId = row.courtcaseid;
      this.pendingenquiryid = row.pendingenquiryid;
      this.remarks = row.remarks;
      this.isDisabled = true;
      this.subject = row.subject;
      this.referenceNo = row.referenceNo;
      this.highCourtName = row.courtname;
      this.stateOfCase = row.casestatusname;
      this.respondents = row.mainrespondents;
      this.gistOfCase = row.mainprayer;
      this.zone = { label: row.zonename, value: row.zoneid, };
      this.zoneOptions = [ { label: row.zonename, value: row.zoneid, }];
      this.district = { label: row.districtname, value: row.districtid };
      this.districtOptions = [{ label: row.districtname, value: row.districtid }];
      this.sro = {label:row.sroname, value:row.sroid};
      this.sroOptions = [{label: row.sroname, value:row.sroid}];
      this.caseType = { label:row.casetypename, value:row.casetypeid};
      this.caseTypeOptions = [{ label:row.casetypename, value:row.casetypeid }];
      this.writappealStatus = { label: row.writappealstatusname, value: row.writappealstatusid };
      this.writappealstatusOptions = [{ label: row.writappealstatusname, value: row.writappealstatusid }];
      const date = '01/01/' + row.caseyear;
      this.caseYear = new Date(date);
    } 
    }

    onSave() {
      let _caseyear: any = this._datePipe.transform(this.caseYear, 'yyyy');
      const params = {
        'pendingenquiryid': this.pendingenquiryid,
        'writappealsid': this.writId,
        'courtcaseid': this.caseId,
        'zoneid': this.zone.value,
        'districtid': this.district.value,
        'sroid': this.sro.value,
        'casetypeid': this.caseType.value,
        'writappealstatusid': this.writappealStatus.value,
        'casenumber': this.caseNo,
        'casedate': this._converter.convertDate(this.caseDate),
        'caseyear': (_caseyear * 1),
        'courtid': this.highCourtName,
        'petitionername': this.petitionerName,
        'mainrespondents': this.respondents,
        'casestatusid': this.stateOfCase,
        'mainprayer': this.gistOfCase,   
        'subject': this.subject,
        'referenceno': this.referenceNo,
        'remarks': this.remarks,
        'flag': true,
        'createddate': new Date(),
        'userId': this.roleId,
      }
      this._restApiService.post('Pendingenquiry/SavePendingenquiry', params).subscribe(res => {
        if (res) {
          this.onView();
          this.clearForm();
          this.data = [];
          this.loading = true;
          this.isDisabled = false;
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
      this._pendingEnquiryCaseDetailsForm.reset();
      this._pendingEnquiryCaseDetailsForm.form.markAsUntouched();
      this._pendingEnquiryCaseDetailsForm.form.markAsPristine();
      this.zoneOptions = [];
      this.sroOptions = [];
      this.districtOptions = [];
      this.caseTypeOptions = [];
    }
}
