import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message, SelectItem } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { DateConverter } from 'src/app/helper/date-converter';
import { AuthService } from 'src/app/services/auth.service';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-supremecourt-case-details',
  templateUrl: './supremecourt-case-details.component.html',
  styleUrls: ['./supremecourt-case-details.component.scss']
})
export class SupremecourtCaseDetailsComponent implements OnInit {

  zoneOptions: SelectItem[] = [];
  zone: any;
  districtOptions: SelectItem[] = [];
  district: any;
  sroOptions: SelectItem[] = [];
  sro: any;
  courtcaseId: any;
  highCourtRefNo: any;
  caseDate: any;
  respondents: string = '';
  respondentCadre: any;
  respondentCadreOptions: any;
  stateOfCaseOptions: SelectItem[] = [];
  stateOfCase: any;
  subject:any;
  petitionerName: any;
  respondentsName: any;
  gistOfCase: any;
  remarks: any;
  casefiled:any;
  slpNumber: any;
  filedValue: string = '1';
  selectedValue: string = '1';
  counterFiled: any
  counterFiledOptions: SelectItem[] = [];
  disableAutoDisplay: boolean = false;
  cols: any[] = [];
  data: any[] = [];
  isEditable: boolean = false;
  slpType: any;
  slpOptions: SelectItem[] = [];
  masters?: any;
  userInfo: any;
  responseMsg: Message[] = [];
  fromDate: any;
  toDate: any;
  loading: boolean = false;

  @ViewChild('f', { static: false }) _screspondentForm!: NgForm;
  constructor(private _restApiService: RestapiService, private _masterService: MasterService,
    private _datePipe: DatePipe, private _authService: AuthService, private _converter: DateConverter) { }

  ngOnInit(): void {
    this.cols = TableConstants.supremeCourtCaseColumns;
    this.masters = this._masterService.getMasters();
    this.userInfo = this._authService.getUserInfo();
  }

  onSelect(value: string) {
    if (this.masters !== undefined && this.masters !== null) {
      let caseStatusList: any = [];
      let zoneList: any = [];
      let districtList: any = [];
      let sroList: any = [];
      let slpTypeList: any = [];
      let respondentList: any = [];
      let counterFiledList: any = [];
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
          case 'SL':
            if (this.masters.slpmaster !== undefined && this.masters.slpmaster !== null) {
              this.masters.slpmaster.forEach((slp: any) => {
                slpTypeList.push(
                  { label: slp.name, value: slp.slpid }
                )
              })
              this.slpOptions = slpTypeList;
            }
            break;
            case 'CF':
              if (this.masters.counterfiledmaster !== undefined && this.masters.counterfiledmaster !== null) {
                this.masters.counterfiledmaster.forEach((cf: any) => {
                  counterFiledList.push(
                    { label: cf.counterfiledname, value: cf.counterfiledid }
                  )
                })
                this.counterFiledOptions = counterFiledList;
              }
              break;
      }
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

    onSave() {
      const params = {
        'courtcaseid': this.courtcaseId,
        'zoneid': this.zone.value,
        'districtid': this.district.value,
        'sroid': this.sro.value,
        'slptypeid': this.slpType.value,
        'petitionername': this.petitionerName,
        'mainrespondents': this.respondents,
        'remarks': this.remarks,
        'mainprayer': this.gistOfCase,
        'counterfiledid': this.counterFiled.value,
        'casefiledby': (this.filedValue === '1') ? true : false,
        'casedate': this._converter.convertDate(this.caseDate),
        'casestatusid': this.stateOfCase.value,
        'slpcaseno': this.slpNumber,
        'highcourtrefno': this.highCourtRefNo,
        'flag': true,
        'createdate': new Date(),
        'userId': this.userInfo.roleid,
        'zonename': this.zone.label,
        'districtname': this.district.label,
        'sroname': this.sro.label,
        'slptypename': this.slpType.label,
        'casestatusname': this.stateOfCase.label
      }
      this._restApiService.post('SupremeCourtCase/SaveSupremeCourtCase', params).subscribe(res => {
        if (res) {
          this.clearForm();
          this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.SuccessMessage }];
          setTimeout(() => this.responseMsg = [], 3000);
          // this.assignDefault();
        } else {
          this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: ResponseMessage.ErrorMessage }];
          setTimeout(() => this.responseMsg = [], 3000)
        }
      })
    }

    onLoadCases() {
      if (this.fromDate !== undefined && this.fromDate !== null && this.toDate !== undefined && this.toDate !== null
        && this.zone !== undefined && this.zone !== null && this.sro !== undefined && this.sro !== null
        && this.district !== undefined && this.district !== null) {
        this.data = [];
        this.loading = true;
        const params = new HttpParams().append('userid', this.userInfo.roleid)
          .set('fromdate', this._datePipe.transform(this.fromDate, 'yyyy-MM-dd') as any)
          .set('todate', this._datePipe.transform(this.toDate, 'yyyy-MM-dd') as any)
          .set('zoneid', (this.zone.value !== null && this.zone.value !== undefined) ? this.zone.value : 0)
          .set('sroid',  (this.sro.value !== null && this.sro.value !== undefined) ? this.sro.value : 0)
          .set('districtid',  (this.district.value !== null && this.district.value !== undefined) ? this.district.value : 0)
        this._restApiService.getByParameters('SupremeCourtCase/GetSupremeCourtCase', params).subscribe(res => {
          if (res) {
            this.loading = false;
            res.forEach((i: any) => {
              i.casefiled = i.casefiledby ? 'Government' : 'Individual';
              i.casedateorder = this._datePipe.transform(i.casedate, 'dd/MM/yyyy')
            })
            this.data = res;
          } else {
            this.loading = false;
            this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.NoRecordMessage }];
            setTimeout(() => this.responseMsg = [], 3000);
          }
        })
      // } else {
      //   this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.WarningMessage }];
      //       setTimeout(() => this.responseMsg = [], 3000);
      // }
    }
  }

  clearForm() {
    this._screspondentForm.reset();
    this._screspondentForm.form.markAsUntouched();
    this._screspondentForm.form.markAsPristine();
    this.zoneOptions = [];
    this.sroOptions = [];
    this.districtOptions = [];
    this.slpOptions = [];
    this.respondentCadreOptions = [];
    this.stateOfCaseOptions = [];
    this.counterFiledOptions = [];
  }

}
