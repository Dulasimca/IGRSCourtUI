import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';
import { Message } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { DateConverter } from 'src/app/helper/date-converter';

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
  caseTypeOptions: SelectItem[] = [];
  caseType: any;
  caseNo: any;
  highCourtRefOptions: SelectItem[] = [];
  highCourtRef: any;
  stageOfCaseOptions: SelectItem[] = [];
  stageOfCase: any;
  petitionerName: any;
  respondentsName: any;
  gistOfCase: any;
  selectedValue: string = '1';
  caseNoYear:any;
  caseYear:any;
  remark:any;
  natureOfCaseOptions:any;
  natureOfCase:any;
  natureofdisposal:any;
  natureOfDisposalOptions:any;
  masters?: any;
  responseMsg: Message[] = [];
  cols: any[] = [];
  data: any[] = [];
  loading: boolean = false;
  fromDate: any;
  toDate: any;
  roleId: any;

  constructor(private _restApiService: RestapiService, private _masterService: MasterService,
    private _datePipe: DatePipe, private _authService: AuthService, private _converter: DateConverter) { }

  ngOnInit(): void {
    this.cols = TableConstants.writeAppealsColumns;
    this.masters = this._masterService.masterData;
    this.roleId = this._authService.getUserInfo().roleId;
  }

  assignDefault() {
    this.selectedValue = '1';
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
            this.highCourtRefOptions = courtList;
          }
          break;
        case 'SC':
          if (this.masters.casestatus_Masters) {
            this.masters.casestatus_Masters.forEach((cs: any) => {
              caseStatusList.push(
                { label: cs.casestatusname, value: cs.casestatusid }
              )
            })
            this.stageOfCaseOptions = caseStatusList;
          }
          break;
      }
    }
  }

  onLoadCases() {
    if(this.fromDate && this.toDate) {
    this.data = [];
    this.loading = true;
    const params = new HttpParams().append('userid', this.roleId)
    .set('fromdate', this._datePipe.transform(this.fromDate, 'MM/dd/yyyy') as any)
    .set('todate', this._datePipe.transform(this.toDate, 'MM/dd/yyyy') as any)
    .set('respondentType', 1);
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
      this.zone = { label: row.zonename, value: row.zoneid };
      this.zoneOptions = [{ label: row.zonename, value: row.zoneid }];
      this.district = { label: row.districtname, value: row.districtid };
      this.districtOptions = [{ label: row.districtname, value: row.districtid }];
      this.sro = { label: row.sroname, value: row.sroid };
      this.sroOptions = [{ label: row.sroname, value: row.sroid }];
      this.highCourtRef = { label: row.courtname, value: row.courtid };
      this.highCourtRefOptions = [{ label: row.courtname, value: row.courtid }];
      this.caseType = { label: row.casetypename, value: row.casetypeid };
      this.caseTypeOptions = [{ label: row.casetypename, value: row.casetypeid }];
      this.stageOfCase = { label: row.casestatusname, value: row.casestatusid };
      this.stageOfCaseOptions = [{ label: row.casestatusname, value: row.casestatusid }];
      this.caseNo = row.casenumber;
      this.petitionerName = row.petitionername;
      this.selectedValue = (row.counterfiled) ? '1' : '0';
      this.gistOfCase = row.mainprayer;
      this.respondentsName = row.mainrespondents;
      this.remark = row.remark;
      const date = '01/01/'+row.caseyear;
      this.caseYear = new Date(date);
    }
  }

  onSave() { }

}