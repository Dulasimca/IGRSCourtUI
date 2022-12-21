import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';
import { Message } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { DateConverter } from 'src/app/helper/date-converter';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-igr-respondent',
  templateUrl: './igr-respondent.component.html',
  styleUrls: ['./igr-respondent.component.scss']
})
export class IgrRespondentComponent implements OnInit {

  zoneOptions: SelectItem[] = [];
  zone: any;
  districtOptions: SelectItem[] = [];
  district: any;
  sroOptions: SelectItem[] = [];
  sro: any;
  caseTypeOptions: SelectItem[] = [];
  caseType: any;
  caseNo: any;
  caseYear: any;
  caseDate: Date = new Date();
  highCourtNameOptions: SelectItem[] = [];
  highCourtName: any;
  stateOfCaseOptions: SelectItem[] = [];
  stateOfCase: any;
  judgementValue: string = '1';
  petitionerName: any;
  respondents: string = '';
  respondentCadre: any;
  respondentCadreOptions: any;
  gistOfCase: any;
  remarks: any;
  selectedValue: string = '1';
  cols: any[] = [];
  data: any[] = [];
  masters?: any;
  responseMsg: Message[] = [];
  caseId: any;
  loading: boolean = false;
  fromDate: any;
  toDate: any;
  isEditable: boolean = false;
  disableAutoDisplay: boolean = false;
  userInfo!: User;

  @ViewChild('f', { static: false }) _respondentForm!: NgForm;

  constructor(private _restApiService: RestapiService, private _masterService: MasterService,
    private _datePipe: DatePipe, private _authService: AuthService, private _converter: DateConverter) { }

  ngOnInit(): void {
    this.cols = TableConstants.respondentColumns;
    this.masters = this._masterService.getMasters();
    this.userInfo = this._authService.getUserInfo();
  }
  assignDefault() {
    this.disableAutoDisplay = false;
    this.selectedValue = '1';
    this.judgementValue = '1';
    this.caseDate = new Date();
    this.caseId = 0;
  }

  onSelect(value: string) {
    if (this.masters !== undefined && this.masters !== null) {
      let caseStatusList: any = [];
      let caseTypeList: any = [];
      let zoneList: any = [];
      let districtList: any = [];
      let sroList: any = [];
      let courtList: any = [];
      let respondentList: any = [];
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
        case 'HC':
          if (this.masters.court_Masters !== undefined && this.masters.court_Masters !== null) {
            this.masters.court_Masters.forEach((hc: any) => {
              courtList.push(
                { label: hc.courtname, value: hc.courtid }
              )
            })
            this.highCourtNameOptions = courtList;
          }
          break;
        case 'SC':
          if (this.masters.casestatus_Masters !== undefined && this.masters.casestatus_Masters !== null) {
            this.masters.casestatus_Masters.forEach((cs: any) => {
              caseStatusList.push(
                { label: cs.casestatusname, value: cs.casestatusid }
              )
            })
            this.stateOfCaseOptions = caseStatusList;
          }
          break;
        case 'RC':
          if (this.masters.respondentsmaster !== undefined && this.masters.respondentsmaster !== null) {
            this.masters.respondentsmaster.forEach((rc: any) => {
              respondentList.push(
                { label: rc.respondentsname, value: rc.respondentsid }
              )
            })
            this.respondentCadreOptions = respondentList;
          }
          break;
      }
    }
  }

  onLoadCases() {
    if (this.fromDate !== undefined && this.fromDate !== null && this.toDate !== undefined && this.toDate !== null) {
      this.data = [];
      this.loading = true;
      const params = new HttpParams().append('userid', this._authService.getUserInfo().roleId)
        .set('fromdate', this._datePipe.transform(this.fromDate, 'yyyy-MM-dd') as any)
        .set('todate', this._datePipe.transform(this.toDate, 'yyyy-MM-dd') as any)
        .set('zoneid', this.userInfo.zoneid)
        .set('sroid', this.userInfo.sroid)
        .set('districtid', this.userInfo.districtid)
        .set('respondentType', 2);
      this._restApiService.getByParameters('Respondent/GetRespondentCase', params).subscribe(res => {
        if (res) {
          this.loading = false;
          res.forEach((i: any) => {
            i.countervalue = i.counterfiled ? 'Yes' : 'No';
            i.judgement = i.judgementvalue ? 'For' : 'Against';
          })
          this.data = res;
        } else {
          this.loading = false;
        }
      })
    }
  }

  onChangeRespondent() {
    if (this.respondentCadre !== undefined && this.respondentCadre !== null) {
      this.respondents += this.respondentCadre.label + ' , ';
      if (this.respondentCadre.value === 15) {
        this.isEditable = true;
      }
    }
  }

  onEdit(row: any) {
    if (row !== undefined && row !== null) {
      this.disableAutoDisplay = true;
      this.caseId = row.courtcaseid;
      this.zone = { label: row.zonename, value: row.zoneid };
      this.zoneOptions = [{ label: row.zonename, value: row.zoneid }];
      this.district = { label: row.districtname, value: row.districtid };
      this.districtOptions = [{ label: row.districtname, value: row.districtid }];
      this.sro = { label: row.sroname, value: row.sroid };
      this.sroOptions = [{ label: row.sroname, value: row.sroid }];
      this.highCourtName = { label: row.courtname, value: row.courtid };
      this.highCourtNameOptions = [{ label: row.courtname, value: row.courtid }];
      this.caseType = { label: row.casetypename, value: row.casetypeid };
      this.caseTypeOptions = [{ label: row.casetypename, value: row.casetypeid }];
      this.stateOfCase = { label: row.casestatusname, value: row.casestatusid };
      this.stateOfCaseOptions = [{ label: row.casestatusname, value: row.casestatusid }];
      this.judgementValue = (row.judgement) ? '1' : '0';
      this.caseDate = new Date(row.casedate);
      this.caseNo = row.casenumber;
      this.petitionerName = row.petitionername;
      this.selectedValue = (row.counterfiled) ? '1' : '0';
      this.gistOfCase = row.mainprayer;
      this.respondentCadre = row.respondentsid;
      this.respondentCadreOptions = [{ label: row.respondentsname, value: row.respondentsid }];
      this.remarks = row.remarks;
      const date = '01/01/' + row.caseyear;
      this.caseYear = new Date(date);
    }
  }

  onSave() {
    let _caseyear: any = this._datePipe.transform(this.caseYear, 'yyyy');
    const params = {
      'courtcaseid': this.caseId,
      'zoneid': this.zone.value,
      'districtid': this.district.value,
      'sroid': this.sro.value,
      'petitionername': this.petitionerName,
      'remarks': this.remarks,
      'mainprayer': this.gistOfCase,
      'courtid': this.highCourtName.value,
      'casedate': this._converter.convertDate(this.caseDate),
      'casenumber': this.caseNo,
      'casestatusid': this.stateOfCase.value,
      'casetypeid': this.caseType.value,
      'mainrespondents': this.respondents,
      'judgementvalue': (this.judgementValue === '1') ? true : false,
      'caseyear': (_caseyear * 1),
      'counterfiled': (this.selectedValue === '1') ? true : false,
      'flag': true,
      'createdate': new Date(),
      'userId': this.userInfo.roleid,
      'responsetypeid': 2, //for igr respondent
    }
    this._restApiService.post('Respondent/SaveRespondentCase', params).subscribe(res => {
      if (res) {
        this.clearForm();
        this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.SuccessMessage }];
        setTimeout(() => this.responseMsg = [], 3000);
        this.assignDefault();
        this.onLoadCases();
      } else {
        this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: ResponseMessage.ErrorMessage }];
        setTimeout(() => this.responseMsg = [], 3000)
      }
    })
  }

  clearForm() {
    this._respondentForm.reset();
    this._respondentForm.form.markAsUntouched();
    this._respondentForm.form.markAsPristine();
    this.zoneOptions = [];
    this.sroOptions = [];
    this.districtOptions = [];
    this.caseTypeOptions = [];
    this.respondentCadreOptions = [];
    this.highCourtNameOptions = [];
  }

}
