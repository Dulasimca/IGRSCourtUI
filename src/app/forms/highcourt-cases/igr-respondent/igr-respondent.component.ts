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
  caseYear:any;
  caseDate: Date = new Date();
  highCourtNameOptions: SelectItem[] = [];
  highCourtName: any;
  stateOfCaseOptions: SelectItem[] = [];
  stateOfCase: any;
  petitionerName: any;
  respondentsName: any;
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
  @ViewChild('f', {static: false}) _respondentForm!: NgForm;

  constructor(private _restApiService: RestapiService, private _masterService: MasterService,
    private _datePipe: DatePipe, private _authService: AuthService) { }

  ngOnInit(): void {
    this.cols = TableConstants.respondentColumns;
    this.masters = this._masterService.masterData;
    this.onLoadCases();
  }
  assignDefault() {
    this.selectedValue = '1';
    this.caseDate = new Date();
    this.caseId = 0;
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
        case 'HC':
          if (this.masters.court_Masters) {
            this.masters.court_Masters.forEach((hc: any) => {
              courtList.push(
                { label: hc.courtname, value: hc.courtid }
              )
            })
            this.highCourtNameOptions = courtList;
          }
          break;
        case 'SC':
          if (this.masters.casestatus_Masters) {
            this.masters.casestatus_Masters.forEach((cs: any) => {
              caseStatusList.push(
                { label: cs.casestatusname, value: cs.casestatusid }
              )
            })
            this.stateOfCaseOptions = caseStatusList;
          }
          break;
      }
    }
  }

  onLoadCases() {
    if(this.fromDate && this.toDate) {
    this.data = [];
    this.loading = true;
    const params = new HttpParams().append('userid',this._authService.getUserInfo().roleId)
    .set('fromdate', this._datePipe.transform(this.fromDate, 'MM/dd/yyyy') as any)
    .set('todate', this._datePipe.transform(this.toDate, 'MM/dd/yyyy') as any)
    .set('respondentType', 2);
    this._restApiService.getByParameters('Respondent/GetRespondentCase', params).subscribe(res => {
      if(res) {
        this.loading = false;
        res.forEach((i: any) => {
          i.countervalue = i.counterfiled ? 'Yes' : 'No';
        })
        this.data = res;
      } else {
        this.loading = false;
      }
    })
  }
  }

  onEdit(row: any) {
    if(row) {
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
      this.caseDate = new Date(row.casedate);
      this.caseNo = row.casenumber;
      this.petitionerName = row.petitionername;
      this.selectedValue = (row.counterfiled) ? '1' : '0';
      this.gistOfCase = row.mainprayer;
      this.respondentsName = row.mainrespondents;
      this.remarks = row.remarks;
      const date = '01/01/'+row.caseyear;
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
      'mainrespondents': this.respondentsName,
      'courtid': this.highCourtName.value,
      'casedate': this.caseDate,
      'casenumber': this.caseNo,
      'casestatusid': this.stateOfCase.value,
      'casetypeid': this.caseType.value,
      'caseyear': (_caseyear * 1),
      'counterfiled': (this.selectedValue === '1') ? true : false,
      'flag': true,
      'createdate': new Date(),
      'userId': 1,
      'responsetypeid': 2, //for igr respondent
    }
    this._restApiService.post('Respondent/SaveRespondentCase', params).subscribe(res => {
      if (res) {
        this._respondentForm.reset();
        this._respondentForm.form.markAsUntouched();
        this._respondentForm.form.markAsPristine();
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

}
