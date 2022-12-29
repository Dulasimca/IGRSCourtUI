import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { RestapiService } from 'src/app/services/restapi.service';


@Component({
  selector: 'app-respondant-master',
  templateUrl: './respondant-master.component.html',
  styleUrls: ['./respondant-master.component.scss']
})
export class RespondantMasterComponent implements OnInit {
  responseMsg: Message[] = [];
  selectedType:any;
  cols: any[] = [];
  data: any[] = [];
  respondentsid: any;
  respondentsname: any;
  loading: boolean = false;
  mailId: any;
  mobileNo1: any;
  mobileNo2: any;

  @ViewChild('f', {static: false}) _respondentForm!: NgForm;
  
  
  constructor(private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this.cols = TableConstants.RespondentMaster;
    this.onView();
  }
  onSubmit() {
    const params = {
      'respondentsid': this.respondentsid,
      'respondentsname': this.respondentsname,
      'mobno1': this.mobileNo1,
      'mobno2': this.mobileNo2,
      'mailid': this.mailId,
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
  
onView(){
  this.loading = true;
  this._restApiService.get('RespondantMaster/GetRespondentsMaster').subscribe(res => {
    if(res) {
      res.forEach((i:any) => {
        i.flag = (i.flag == true) ? 'Active' : 'InActive'
      })

    }
    this.data = res;
    this.loading = false;
  })
}

onClear() {
  this.respondentsid = 0;
  this.respondentsname  = null;
  this.selectedType = null;
  this.mailId = null;
  this.mobileNo1 = null;
  this.mobileNo2  = null;
}
onEdit(row:any) {
  this.respondentsid = row.respondentsid;
  this.respondentsname = row.respondentsname;
  this.selectedType = (row.flag === 'Active') ? 1 : 0;
  this.mailId = row.mailid;
  this.mobileNo1 = row.mobno1;
  this.mobileNo2  = row.mobno2;
}

onCheck() {
  this.data.forEach( i => {
    if(i.respondentsname  === this.respondentsname ) {
      this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'Respondent name is already exist, Please input different name' }];
        this.respondentsname = null;
    }
  })
}
}
