import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message, SelectItem } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';


@Component({
  selector: 'app-respondant-master',
  templateUrl: './respondant-master.component.html',
  styleUrls: ['./respondant-master.component.scss']
})
export class RespondantMasterComponent implements OnInit {
  responseMsg: Message[] = [];
  selectedType: any;
  cols: any[] = [];
  data: any[] = [];
  respondentsid: any;
  respondentsname: any;
  loading: boolean = false;
  mailId: any;
  mobileNo1: any;
  mobileNo2: any;
  masters?: any;
  respondentType: any;
  respondentTypeOptions: SelectItem[] = [];
  @ViewChild('f', { static: false }) _respondentForm!: NgForm;

  constructor(private _restApiService: RestapiService, private _masterService: MasterService) { }

  ngOnInit(): void {
    this.masters = this._masterService.getMasters();
    this.cols = TableConstants.RespondentMaster;
    this.onView();
  }

  onSelect(value: string) {
    let responseTypeList: any = [];
    switch (value) {
      case 'RT':
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
    }
  }

  onSubmit() {
    const params = {
      'respondentsid': this.respondentsid,
      'respondentsname': this.respondentsname,
      'mobno1': this.mobileNo1,
      'mobno2': this.mobileNo2,
      'mailid': this.mailId,
      'responsetypeid': this.respondentType,
      'createddate': new Date(),
      'flag': (this.selectedType == 1) ? true : false
    }
    this._restApiService.post('RespondantMaster/SaveRespondentsMaster', params).subscribe(res => {
      if (res) {
        this.onView();
        this.onClear();
        this._respondentForm.reset();
        this._respondentForm.form.markAsUntouched();
        this._respondentForm.form.markAsPristine();
        this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.SuccessMessage }];
        setTimeout(() => this.responseMsg = [], 3000);
      } else {
        this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: ResponseMessage.ErrorMessage }];
        setTimeout(() => this.responseMsg = [], 3000)
      }
    })
  }

  onView() {
    this.loading = true;
    this._restApiService.get('RespondantMaster/GetRespondentsMaster').subscribe(res => {
      if (res) {
        res.forEach((i: any) => {
          i.flag = (i.flag == true) ? 'Active' : 'InActive'
        })
      }
      this.data = res;
      this.loading = false;
    })
  }

  
  onEdit(row: any) {
    this.respondentsid = row.respondentsid;
    this.respondentsname = row.respondentsname;
    this.selectedType = (row.flag === 'Active') ? 1 : 0;
    this.mailId = row.mailid;
    this.mobileNo1 = row.mobno1;
    this.mobileNo2 = row.mobno2;
    this.respondentType = row.responsetypeid;
    this.respondentTypeOptions = [{ label: row.responsetypename, value: row.responsetypeid }];
  }

//checking respondents name exists 
  onCheck() {
    this.data.forEach(i => {
      if (i.respondentsname === this.respondentsname) {
        this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'Respondent name is already exist, Please input different name' }];
        this.respondentsname = null;
      }  
    })
  }

  // to check email pattern
  checkIfEmailExists() {
    this.data.forEach(i => {
      const email: string = i.mailid;
      if (email === this.mailId) {
        this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: 'Email-ID is already exist' }];
        setTimeout(() => this.responseMsg = [], 3000);
        this.mailId = '';
      } else {
      }
    })
  }

  //checking existing mailid
  emailValidationCheck() {
    if (this.mailId !== undefined && this.mailId !== null && this.mailId.trim() !== '' 
        ) {
      const entered_email: string = this.mailId.trim();
      const substr = entered_email.split('@');
      if (substr !== undefined && substr.length > 1) {
        const last_str = substr[1].split('.');
        if (last_str !== undefined && last_str.length > 1) {
          if (last_str[1].toLowerCase() === 'com' || last_str[1].toLowerCase() === 'in') {
          } else {
            this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: 'Enter valid email address' }];
            setTimeout(() => this.responseMsg = [], 3000);      
          }
        } else {
          this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: 'Enter valid email address' }];
          setTimeout(() => this.responseMsg = [], 3000);      
        }
      }else {
        this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: 'Enter valid email address' }];
        setTimeout(() => this.responseMsg = [], 3000);      
      }
    }
  }
  //to clearform
  onClear() {
    this.respondentsid = 0;
    this.respondentsname = null;
    this.selectedType = null;
    this.mailId = null;
    this.mobileNo1 = null;
    this.mobileNo2 = null;
    this.respondentType = null;
    this.respondentTypeOptions = [];
  }
}
