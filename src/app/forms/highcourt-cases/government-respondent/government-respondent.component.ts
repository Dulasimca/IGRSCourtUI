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
  respondents: string = '';
  respondentsid: string = '';
  respondentCadre: any;
  respondentCadreOptions: any;
  respondentType: any;
  respondentTypeOptions: SelectItem[] = [];
  gistOfCase: any;
  mainPrayer: any;
  mainPrayerOptions: SelectItem[] = [];
  lcaseDetails: any;
  linkedCase: any;
  linkedCaseOptions: SelectItem[] = [];
  remarks: any;
  counterFiled: any;
  counterFiledOptions: SelectItem[] = [];
  judgement: any;
  judgementOptions: SelectItem[] = [];
  dateValue: any;
  cols: any[] = [];
  data: any[] = [];
  masters?: any;
  responseMsg: Message[] = [];
  caseId: any;
  loading: boolean = false;
  fromYear: any;
  toYear: any;
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
    // this.caseDate = new Date();
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
      let responseTypeList: any = [];
      let counterFiledList: any = [];
      //let judgementStatusList: any = [];
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
              // case 'JD':
              //   if (this.masters.judgementmaster !== undefined && this.masters.judgementmaster !== null) {
              //     this.masters.judgementmaster.forEach((jd: any) => {
              //       judgementStatusList.push(
              //         { label: jd.judgementname, value: jd.judgementid }
              //       )
              //     })
              //     this.judgementOptions = judgementStatusList;
              //     this.judgementOptions.unshift({ label: '-select-', value: null });
              //   }
              //   break;
              case 'MP':
                  if (this.masters.mainprayermaster !== undefined && this.masters.mainprayermaster !== null) {
                    this.masters.mainprayermaster.forEach((mp: any) => {
                      mainPrayerList.push(
                        { label: mp.prayername, value: mp.prayerid }
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
      }
    }
  }

  // onLoadCases() {
  //   if (this.fromYear !== undefined && this.fromYear !== null && this.toYear !== undefined && this.toYear !== null && this.respondentType !== undefined && this.respondentType !==null) {
  //     this.data = [];
  //     this.loading = true;
  //     const params = new HttpParams().append('userid', this.userInfo.roleid)
  //       //.set('fromdate', this._datePipe.transform(this.fromYear, 'yyyy-MM-dd') as any)
  //       //.set('todate', this._datePipe.transform(this.toYear, 'yyyy-MM-dd') as any)
  //       .set('fromyear',this._datePipe.transform(this.fromYear, 'yyyy') as any)
  //       .set('toyear',this._datePipe.transform(this.toYear, 'yyyy') as any)
  //       .set('respondentType', this.respondentType.value)
  //       .set('zoneid', this.userInfo.zoneid)
  //       .set('sroid', this.userInfo.sroid)
  //       .set('districtid', this.userInfo.districtid);
  //     this._restApiService.getByParameters('Respondent/GetRespondentCase', params).subscribe(res => {
  //       if(res) {
  //         this.loading = false;
  //         // res.forEach((i: any) => {
  //         //   i.countervalue = i.counterfiled ? 'Yes' : 'No';
  //         //   i.judgement = i.judgementvalue ? 'For' : 'Against';
  //         // })
  //         this.data = res;
  //       } else {
  //         this.loading = false;
  //       }
  //     })
  //   }
  // }

  onChangeRespondent() {
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
      // this.judgement = { label: row.judgementname, value: row.judgementid };
      // this.judgementOptions = [{ label: row.judgementname, value: row.judgementid }];
      this.counterFiled = { label: row.counterfiledname, value: row.counterfiledid };
      this.counterFiledOptions = [{ label: row.counterfiledname, value: row.counterfiledid }];
      this.respondentCadre = { label: row.mainrespondents, value: row.id };
      this.respondentCadreOptions = [{ label: row.mainrespondents, value: row.id }];
      // this.judgementValue = (row.judgementvalue) ? '1' : '0';
      // this.caseDate = new Date(row.casedate);
      this.caseNo = row.casenumber;
      this.petitionerName = row.petitionername;
      // this.selectedValue = (row.counterfiled) ? '1' : '0';
      this.gistOfCase = row.gistofcase;
      this.mainPrayer = { label: row.prayername, value: row.prayerid };
      this.mainPrayerOptions = [{ label: row.prayername, value: row.prayerid }];
      this.respondentType = { label: row.responsetypename, value: row.responsetypeid };
      this.respondentTypeOptions = [{ label: row.responsetypename, value: row.responsetypeid }];
      this.respondents = row.mainrespondents;
      this.respondentsid = row.mainrespondentsid;
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
      'casetypeid': this.caseType.value,
      'casenumber': this.caseNo,
      // 'casedate': this._converter.convertDate(this.caseDate),
      'caseyear': (_caseyear * 1),
      'courtid': this.highCourtName.value,
      'petitionername': this.petitionerName,
      'mainrespondents': this.respondents,
      'prayerid': this.mainPrayer.value,
      'gistofcase': this.gistOfCase,
      'counterfiledid': this.counterFiled.value,
      'casestatusid': this.stateOfCase.value,
      'linkedcaseid': this.linkedCase.value,
      //'judgementid':this.judgement.value,
      'remarks': this.remarks,
      'flag': true,
      'createdate': new Date(),
      'userId': this.userInfo.roleid,
      'responsetypeid': this.respondentType.value, //for government respondent
      'mainrespondentsid': this.respondentsid
    }
    this._restApiService.post('Respondent/SaveRespondentCase', params).subscribe(res => {
      if (res) {
        this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.SuccessMessage }];
        setTimeout(() => this.responseMsg = [], 3000);
        // this.onLoadCases();
        this.assignDefault();
        this.clearForm();
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
    this.stateOfCaseOptions = [];
    // this.judgementOptions = [];
    this.counterFiledOptions = [];
    this.mainPrayerOptions = [];
    this.linkedCaseOptions = [];
  }
}
