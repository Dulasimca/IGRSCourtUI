import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message, SelectItem } from 'primeng/api';
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
  disableWritTab: boolean = true;
  disableJudgementTab: boolean = true;
  ///common 
  masters?: any;
  responseMsg: Message[] = [];
  userInfo!: User;
  ///court case
  courtCaseTitle: string = '';
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
  lcaseDetails: any;
  linkedCase: any;
  linkedCaseOptions: SelectItem[] = [];
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
    private _datePipe: DatePipe, private _authService: AuthService, private _converter: DateConverter) { }

  ngOnInit(): void {
    this.masters = this._masterService.getMasters();
    this.userInfo = this._authService.getUserInfo();
    this.assignDefault();
  }

  assignDefault() {
    this.disableAutoDisplay = false;
    this.caseId = 0;
    this.writId = 0;
    this.courtCaseTitle = 'Form-I Government Respondent';
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
      let linkedCaseList: any = [];
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
            this.caseTypeOptions = caseTypeList;
            this.caseTypeOptions.unshift({ label: '-select-', value: null });
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
            this.highCourtNameOptions.unshift({ label: '-select-', value: null });
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
              if(rc.responsetypeid === this.respondentType.value)
              {
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
            this.respondents="";
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
                  if (this.masters.mainprayermaster !== undefined && this.masters.mainprayermaster !== null) {
                    this.masters.mainprayermaster.forEach((mp: any) => {
                      mainPrayerList.push(
                        { label: mp.mainprayerdesc, value: mp.mainprayerid }
                      )
                    })
                    this.mainPrayerOptions = mainPrayerList;
                    this.mainPrayerOptions.unshift({ label: '-select-', value: null });
                  }
              break;
              case 'LC':
                if (this.masters.linkedcasemasters !== undefined && this.masters.linkedcasemasters !== null) {
                  this.masters.linkedcasemasters.forEach((lc: any) => {
                    linkedCaseList.push(
                      { label: lc.linkedcasename, value: lc.linkedcaseid }
                    )
                  })
                  this.linkedCaseOptions = linkedCaseList;
                  this.linkedCaseOptions.unshift({ label: '-select-', value: null });
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
      }
    }
  }

  onChangeRespondent(value: string) {
    if(value === 'R') {
    if (this.respondentCadre !== undefined && this.respondentCadre !== null) {
      this.respondents += this.respondentCadre.label + ' , ';
      this.respondentsid += this.respondentCadre.value !=null ?  + this.respondentCadre.value + ',' :'' 
      if (this.respondentCadre.value === 15) {
        this.isEditable = true;
      }
      else
      {
        this.isEditable = false;
      }
    }
  } else {
    if(this.respondentType !== undefined && this.respondentType !== null) {
      if(this.respondentType.value !== undefined && this.respondentType.value !== null) {
        this.courtCaseTitle = ((this.respondentType.value * 1) === 3) ? 'Form-III Others Respondent' : ((this.respondentType.value * 1) === 2)
         ? 'Form-II IGR Respondent' : 'Form-I Government Respondent';
      }
    }
  }
  }

  onCounterSelect() {
    if(this.counterFiled !== undefined && this.counterFiled !== null) {
      if(this.counterFiled.value !== undefined && this.counterFiled.value !== null) {
        if((this.counterFiled.value * 1) !== 1) {
          this.disableWritTab = true;
          this.onClearAppealForm();
        } else {
          this.disableWritTab = false;
        }
      }
    }
  }

  onClearAppealForm() {
    this._appealForm.reset();
    this._appealForm.form.markAsUntouched();
    this._appealForm.form.markAsPristine();
    this.writappealstatusOptions = [];
    this.writId = 0;
  }

  onSaveCase() {}

  onSaveAppeal() {}

}
