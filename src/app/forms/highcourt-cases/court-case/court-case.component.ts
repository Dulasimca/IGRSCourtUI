import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message, SelectItem } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { DateConverter } from 'src/app/helper/date-converter';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-court-case',
  templateUrl: './court-case.component.html',
  styleUrls: ['./court-case.component.scss']
})
export class CourtCaseComponent implements OnInit {
  ///tab controls
  disableCaseTab: boolean = true;
  disableWritTab: boolean = true;
  disableJudgementTab: boolean = true;
  tabIndex: number = 0;
  ///common 
  masters?: any;
  responseMsg: Message[] = [];
  userInfo!: User;
  ///court case
  courtCaseTitle: string = 'Form-I Government Respondent';
  caseId: any;
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
  highCourtNameOptions: SelectItem[] = [];
  highCourtName: any;
  stateOfCaseOptions: SelectItem[] = [];
  stateOfCase: any;
  counterFiled: any;
  counterFiledOptions: SelectItem[] = [];
  judgement: any;
  judgementOptions: SelectItem[] = [];
  respondentType: any;
  respondentTypeOptions: SelectItem[] = [];
  respondents: string = '';
  respondentsid: string = '';
  respondentCadre: any;
  respondentCadreOptions: SelectItem[] = [];
  gistOfCase: any;
  mainPrayer: any;
  mainPrayerOptions: SelectItem[] = [];
  petitionerName: any;
  disableAutoDisplay: boolean = false;
  isEditable: boolean = false;
  isLinkedCaseAvailable: string = '0';
  ///linked case
  linkedCaseId: any;
  caseNoList: any[] = [];
  lCourtName: any;
  lCourtNameOptions: SelectItem[] = [];
  lCaseYear: any;
  lCaseType: any;
  lCaseTypeOptions: SelectItem[] = [];
  lCaseNo: any;
  lCaseNoOptions: SelectItem[] = [];
  linkedCaseCols: any;
  linkedCaseDetails: any[] = [];
  ///writ form
  writId: any;
  hcreferenceNo: any;
  regularNumber: any;
  writappealStatus: any;
  writappealstatusOptions: SelectItem[] = [];
  natureofDisposal: any;
  remarks: any;
  @ViewChild('caseForm', { static: false }) _caseForm!: NgForm;
  @ViewChild('writForm', { static: false }) _appealForm!: NgForm;

  constructor(private _restApiService: RestapiService, private _masterService: MasterService,
    private _datePipe: DatePipe, private _authService: AuthService) { }

  ngOnInit(): void {
    this.masters = this._masterService.getMasters();
    this.userInfo = this._authService.getUserInfo();
    this.linkedCaseCols = TableConstants.linkedCaseColumns;
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
      let responseTypeList: any = [];
      let counterFiledList: any = [];
      let writappealStatusList: any = [];
      let mainPrayerList: any = [];
      let linkedCaseNoList: any = [];
      switch (value) {
        case 'ZN':
          if (this.masters.zone_Masters !== undefined && this.masters.zone_Masters !== null) {
            this.masters.zone_Masters.forEach((zn: any) => {
              zoneList.push(
                { label: zn.zonename, value: zn.zoneid, }
              )
            })
            this.zoneOptions = zoneList;
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
            this.caseTypeOptions = caseTypeList.slice(0);
            this.caseTypeOptions.unshift({ label: '-select-', value: null });
            this.lCaseTypeOptions = caseTypeList.slice(0);
            this.lCaseTypeOptions.unshift({ label: '-select-', value: null });
          }
          break;
        case 'HC':
          if (this.masters.court_Masters !== undefined && this.masters.court_Masters !== null) {
            this.masters.court_Masters.forEach((hc: any) => {
              courtList.push(
                { label: hc.courtname, value: hc.courtid }
              )
            })
            this.highCourtNameOptions = courtList.slice(0);
            this.highCourtNameOptions.unshift({ label: '-select-', value: null });
            this.lCourtNameOptions = courtList.slice(0);
            this.lCourtNameOptions.unshift({ label: '-select-', value: null });
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
            this.stateOfCaseOptions.unshift({ label: '-select-', value: null });
          }
          break;
        case 'RC':
          if (this.masters.respondentsmaster !== undefined && this.masters.respondentsmaster !== null) {

            this.masters.respondentsmaster.forEach((rc: any) => {
              if (rc.responsetypeid === this.respondentType.value) {
                respondentList.push(
                  { label: rc.respondentsname, value: rc.respondentsid }
                )
              }
            });
            this.respondentCadreOptions = respondentList;
            this.respondentCadreOptions.unshift({ label: '-select-', value: null });
          }
          break;
        case 'RT':
          this.respondents = "";
          this.respondentsid = "";
          if (this.masters.responsetype_Masters !== undefined && this.masters.responsetype_Masters !== null) {
            this.masters.responsetype_Masters.forEach((rt: any) => {
              responseTypeList.push(
                { label: rt.responsetypename, value: rt.responsetypeid }
              )
            })
            this.respondentTypeOptions = responseTypeList;
            this.respondentTypeOptions.unshift({ label: '-select-', value: null });
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
            this.counterFiledOptions.unshift({ label: '-select-', value: null });
          }
          break;
        case 'MP':
          if (this.masters.mainPrayerMaster !== undefined && this.masters.mainPrayerMaster !== null) {
            this.masters.mainPrayerMaster.forEach((mp: any) => {
              mainPrayerList.push(
                { label: mp.mainprayerdesc, value: mp.mainprayerid }
              )
            })
            this.mainPrayerOptions = mainPrayerList;
            this.mainPrayerOptions.unshift({ label: '-select-', value: null });
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
        case 'CN':
          if(this.caseNoList.length !== 0) {
            this.caseNoList.forEach((cn: any) => {
              linkedCaseNoList.push(
              { label: cn.caseno, value: cn.caseno }
            )
          })
          this.lCaseNoOptions = linkedCaseNoList;
          this.lCaseNoOptions.unshift({ label: '-select-', value: null });
          }
          break;
      }
    }
  }

  onViewCase() {
    this.disableCaseTab = false;
    if (this.caseYear !== undefined && this.caseYear !== null && this.highCourtName !== undefined &&
      this.highCourtName !== null && this.caseNo !== undefined && this.caseNo !== null) {
      const params = {
        'courttype': this.highCourtName.value,
        'caseyear': new Date(this.caseYear).getFullYear(),
        'caseno': this.caseNo
      }
      this._restApiService.getByParameters('Respondent/GetCourtCase', params).subscribe(res => {
        if (res !== undefined && res !== null) {
          if (res.length !== 0) {
            this.respondentType = { label: res[0].responsetypename, value: res[0].responsetypeid };
            this.respondentTypeOptions = [{ label: res[0].responsetypename, value: res[0].responsetypeid }];
            this.zone = { label: res[0].zonename, value: res[0].zoneid };
            this.zoneOptions = [{ label: res[0].zonename, value: res[0].zoneid }];
            this.district = { label: res[0].districtname, value: res[0].districtid };
            this.districtOptions = [{ label: res[0].districtname, value: res[0].districtid }];
            this.sro = { label: res[0].sroname, value: res[0].sroid };
            this.sroOptions = [{ label: res[0].sroname, value: res[0].sroid }];
            this.caseType = { label: res[0].casetypename, value: res[0].casetypeid };
            this.caseTypeOptions = [{ label: res[0].casetypename, value: res[0].casetypeid }];
            this.petitionerName = res[0].petitionername;
            this.respondents = res[0].mainrespondents;
            this.gistOfCase = res[0].gistofcase;
            this.counterFiled = { label: res[0].counterfiledname, value: res[0].counterfiledid };
            this.counterFiledOptions = [{ label: res[0].counterfiledname, value: res[0].counterfiledid }];
            this.stateOfCase = { label: res[0].casestatusname, value: res[0].casestatusid };
            this.stateOfCaseOptions = [{ label: res[0].casestatusname, value: res[0].casestatusid }];
            this.mainPrayer = { label: res[0].mainprayername, value: res[0].mainprayerid };
            this.mainPrayerOptions = [{ label: res[0].mainprayername, value: res[0].mainprayerid }];
            ///conditions re-check
            this.caseId = res[0].courtcaseid;
            this.disableWritTab = ((res[0].counterfiledid * 1) === 1) ? false : true;
            this.loadLinkedCases();
          } else {
            this.onClearCaseForm();
          }
        } else {
          this.onClearCaseForm();
        }
      })
    } else {
    }
  }

  loadLinkedCases() {
    const params = new HttpParams().append('courtcaseid', this.caseId);
    this._restApiService.getByParameters('LinkedCase/GetLinkedCase', params).subscribe(list => {
      if(list !== undefined && list !== null) {
        if(list.length !== 0) {
          this.linkedCaseDetails = list;
          this.isLinkedCaseAvailable = '1';
        } else {
          this.isLinkedCaseAvailable = '0';
        }
      } else {
        this.isLinkedCaseAvailable = '0';
      }
    })

  }

  onChangeRespondent(value: string) {
    if (value === 'R') {
      if (this.respondentCadre !== undefined && this.respondentCadre !== null) {
        this.respondents += (this.respondentCadre.value !== null) ? (this.respondentCadre.label + ' , ') : '';
        this.respondentsid += this.respondentCadre.value != null ? + this.respondentCadre.value + ',' : ''
        if (this.respondentCadre.value === 15) {
          this.isEditable = true;
        }
        else {
          this.isEditable = false;
        }
      }
    } else {
      if (this.respondentType !== undefined && this.respondentType !== null) {
        if (this.respondentType.value !== undefined && this.respondentType.value !== null) {
          this.courtCaseTitle = ((this.respondentType.value * 1) === 3) ? 'Form-III Others Respondent' : ((this.respondentType.value * 1) === 2)
            ? 'Form-II IGR Respondent' : 'Form-I Government Respondent';
        }
      }
    }
  }

  onCounterSelect() {
    if (this.counterFiled !== undefined && this.counterFiled !== null) {
      if (this.counterFiled.value !== undefined && this.counterFiled.value !== null) {
        if ((this.counterFiled.value * 1) !== 1) {
          this.disableWritTab = true;
          this.onClearAppealForm();
        } else {
          this.disableWritTab = false;
        }
      }
    }
  }

  loadCaseNo() {
    if (this.lCaseType !== undefined && this.lCaseType !== null && this.lCourtName !== undefined &&
      this.lCourtName !== null && this.lCaseYear !== undefined && this.lCaseYear !== null) {
      const params = new HttpParams().append('courttype', this.lCourtName.value)
        .set('caseyear', new Date(this.lCaseYear).getFullYear()).set('casetype', this.lCaseType.value);
      this._restApiService.getByParameters('Respondent/GetCaseNoList', params).subscribe(res => {
        if (res !== undefined && res !== null) {
          if(res.length !== 0) {
            res.forEach((i: any) => {
              this.caseNoList.push({ caseno: i });
            })
          } else {
            this.caseNoList = [];
          }
        } else {
          this.caseNoList = [];
        }
      })
    }
  }

  onAddLinkedCase() {
    this.linkedCaseDetails.push({
      'caseid': this.linkedCaseId, 'created_on': new Date(),
      'courtname': this.lCourtName.label, 'courtid': this.lCourtName.value,
      'casetype': this.lCaseType.label, 'casetypeid': this.lCaseType.value,
      'caseno': this.lCaseNo.label, 'casenoid': this.lCaseNo.value,
      'caseyear': new Date(this.lCaseYear).getFullYear()
    })
    ///clearing linked case after added to the list
    this.lCourtName = null;
    this.lCourtNameOptions = [];
    this.lCaseNo = null;
    this.lCaseNoOptions = [];
    this.lCaseType = null;
    this.lCaseTypeOptions = [];
    this.lCaseYear = null;
  }

  onDeleteLinkedCase(index: number) {
    if (index !== undefined && index !== null) {
      this.linkedCaseDetails.splice(index, 1);
    }

  }

  onClearAppealForm() {
    this._appealForm.reset();
    this._appealForm.form.markAsUntouched();
    this._appealForm.form.markAsPristine();
    this.writId = 0;
    this.writappealstatusOptions = [];
  }

  onClearCaseForm() {
    this._caseForm.reset();
    this._caseForm.form.markAsUntouched();
    this._caseForm.form.markAsPristine();
    this.courtCaseTitle = 'Form-I Government Respondent';
    this.caseId = 0;
    this.linkedCaseId = 0;
    this.linkedCaseDetails = [];
    this.isLinkedCaseAvailable = '0';
    this._caseForm.controls['_linkedcase'].setValue('0');
    this.respondentTypeOptions = [];
    this.zoneOptions = [];
    this.districtOptions = [];
    this.sroOptions = [];
    this.caseTypeOptions = [];
    this.respondentCadreOptions = [];
    this.counterFiledOptions = [];
    this.stateOfCaseOptions = [];
    this.mainPrayerOptions = [];
  }

  onNext() {
    this.tabIndex += 1;
  }

  onPrev() {
    this.tabIndex -= 1;
  }

  onSaveCase() {
    let _caseyear: any = this._datePipe.transform(this.caseYear, 'yyyy');
    const params = {
      'courtid': this.highCourtName.value,
      'caseyear': (_caseyear * 1),
      'casenumber': this.caseNo,
      'courtcaseid': this.caseId,
      'responsetypeid': this.respondentType.value,
      'zoneid': this.zone.value,
      'districtid': this.district.value,
      'sroid': this.sro.value,
      'casetypeid': this.caseType.value,
      'petitionername': this.petitionerName,
      'mainrespondents': this.respondents,
      'gistofcase': this.gistOfCase,
      'counterfiledid': this.counterFiled.value,
      'casestatusid': this.stateOfCase.value,
      'mainprayerid': this.mainPrayer.value,
      'flag': true,
      'createdate': new Date(),
      'userId': this.userInfo.roleid,
      'mainrespondentsid': this.respondentsid
    }
    this._restApiService.post('Respondent/SaveRespondentCase', params).subscribe(res => {
      if (res) {
        // this.onLoadCases();
        this.onSaveLinkedCase();
      } else {
        this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: ResponseMessage.ErrorMessage }];
        setTimeout(() => this.responseMsg = [], 3000)
      }
    })
  }

  onSaveLinkedCase() {
    if (this.isLinkedCaseAvailable === '1' && this.linkedCaseDetails.length !== 0) {
      this._restApiService.post('LinkedCase/SaveLinkedCase', this.linkedCaseDetails).subscribe(response => {
        if(response) {
          this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.SuccessMessage }];
        setTimeout(() => this.responseMsg = [], 3000);
        this.onClearCaseForm();
        }
      })
    } else {
      this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.SuccessMessage }];
        setTimeout(() => this.responseMsg = [], 3000);
        this.onClearCaseForm();
    }
  }

  onSaveAppeal() { }

}
