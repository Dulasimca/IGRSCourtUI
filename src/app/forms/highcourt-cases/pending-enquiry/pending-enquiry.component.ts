import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';
import { DateConverter } from 'src/app/helper/date-converter';
import { AuthService } from 'src/app/services/auth.service';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';

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
  respondentCadre: any;
  respondentCadreOptions: any;
  gistOfCase: any;
  referenceNo:any;
  remarks: any;
  cols: any[] = [];
  data: any[] = [];
  dateValue: any;
  masters?: any;
  caseId: any;
  loading: boolean = false;
  fromDate: any;
  toDate: any;
  isEditable: boolean = false;
  // userInfo!: User;

  @ViewChild('f', {static: false}) _pendingEnquiryCaseDetailsForm!: NgForm;
  constructor(private _restApiService: RestapiService, private _masterService: MasterService,
    private _datePipe: DatePipe, private _authService: AuthService, private _converter: DateConverter) { }

  ngOnInit(): void {
    this.cols = TableConstants.respondentColumns;
    this.masters = this._masterService.getMasters();
    // this.userInfo = this._authService.getUserInfo();
  }

  assignDefault() {
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
      let respondentList: any = [];
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
      // const params = new HttpParams().append('userid', this.userInfo.roleid)
      // .set('fromdate', this._datePipe.transform(this.fromDate, 'yyyy-MM-dd') as any)
      // .set('todate', this._datePipe.transform(this.toDate, 'yyyy-MM-dd') as any)
      // .set('zoneid', this.userInfo.zoneid)
      // .set('sroid', this.userInfo.sroid)
      // .set('districtid', this.userInfo.districtid)
      
      }
    }

    onChangeRespondent() {
      if(this.respondentCadre) {
        this.respondents += this.respondentCadre.label + ' , ';
  
      }
      if(this.respondentCadre.value === 15) {
      this.isEditable = true;
      }
    }

  onSave() {
      let _caseyear: any = this._datePipe.transform(this.caseYear, 'yyyy');
      const params = {
        'zoneid': this.zone.value,
        'districtid': this.district.value,
        'sroid': this.sro.value,
        'casetypeid': this.caseType.value,
        'casenumber': this.caseNo,
        'casedate': this._converter.convertDate(this.caseDate),
        'caseyear': (_caseyear * 1),
        'courtid': this.highCourtName.value,
        'petitionername': this.petitionerName,
        'mainrespondents': this.respondents,
        'remarks': this.remarks,
        'casestatusid': this.stateOfCase.value,
        'mainprayer': this.gistOfCase,   
        'subject': this.subject,
        'referenceNo': this.referenceNo,
        'flag': true,
        'createdate': new Date(),
        // 'userId': this.userInfo.roleid,
      }
  }

}
