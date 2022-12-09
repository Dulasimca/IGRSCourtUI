import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-judgement-master',
  templateUrl: './judgement-master.component.html',
  styleUrls: ['./judgement-master.component.scss']
})
export class JudgementMasterComponent implements OnInit {
  selectedType: any;

  judgementid: any;
  judgementName: any;
  responseMsg: Message[] = [];
  cols: any[] = [];
  data: any[] = [];

  @ViewChild('f', { static: false }) _respondentForm!: NgForm;


  constructor(private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this.cols = TableConstants.judgementMaster;
    this.onView();


  }
  onSubmit() {

    const params = {
      'judgementid': this.judgementid,
      'judgementname': this.judgementName,
      'createddate': new Date(),
      'flag': (this.selectedType == 1) ? true : false
    }
    this._restApiService.post('JudgementMaster/SaveJudgementMaster', params).subscribe(res => {
      if (res) {
        this.onView();
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
    this._restApiService.get('JudgementMaster/GetJudgementMaster').subscribe(res => {
      if (res) {
        res.forEach((i: any) => {
          i.flag = (i.flag == true) ? 'Active' : 'InActive'
        })

      }
      this.data = res;
    })

  }

  onClear() {
    this.judgementName = null;
    this.selectedType = null;

  }

  onEdit(row: any) {
    this.judgementid = row.judgementid;
    this.judgementName = row.judgementname;
    this.selectedType = (row.flag === 'Active') ? 1 : 0;
  }

}