import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-government-respondent',
  templateUrl: './government-respondent.component.html',
  styleUrls: ['./government-respondent.component.scss']
})
export class GovernmentRespondentComponent implements OnInit {
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
  petitionerName: any;
  respondentsName: any;
  gistOfCase: any;
  remarks: any;
  selectedValue: string = '1';
  dateValue: any;
  cols: any[] = [];
  data: any[] = [];
  masters?: any;
  responseMsg: Message[] = [];

  constructor(private _restApiService: RestapiService, private _masterService: MasterService) { }

  ngOnInit(): void {
    this.cols = TableConstants.governmentRespondentColumns;
    this.masters = this._masterService.masterData;
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

  onSave() {
    const params = {
      'courtcaseid': 0,
      'zoneid': this.zone.value,
      'districtid': this.district.value,
      'sroid': this.sro.value,
      'petitionername': this.petitionerName,
      'remarks': this.remarks,
      'responsetypeid': 1,
      'mainprayer': this.gistOfCase,
      'mainrespondents': this.respondentsName,
      'courtid': this.highCourtName.value,
      'casedate': this.caseDate,
      'casenumber': this.caseNo,
      'casestatusid': this.stateOfCase.value,
      'casetypeid': this.caseType.value,
      'caseyear': this.caseYear.value,
      'counterfiled': (this.selectedValue === '1') ? true : false,
      'flag': true,
      'createdate': new Date()
    }
    this._restApiService.post('Respondent/SaveRespondentCase', params).subscribe(res => {
      if (res) {
        this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.SuccessMessage }];
        setTimeout(() => this.responseMsg = [], 3000);
      } else {
        this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: ResponseMessage.ErrorMessage }];
        setTimeout(() => this.responseMsg = [], 3000)
      }
    })
  }

}
