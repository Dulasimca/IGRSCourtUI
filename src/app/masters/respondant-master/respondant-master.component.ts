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
}
onEdit(row:any) {
  this.respondentsid = row.respondentsid;
  this.respondentsname = row.respondentsname;
  this.selectedType = (row.flag === 'Active') ? 1 : 0;
}
}
