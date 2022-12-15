import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-casestatus',
  templateUrl: './casestatus.component.html',
  styleUrls: ['./casestatus.component.scss']
})
export class CasestatusComponent implements OnInit {

  selectedType:any;
  caseStatus:any;
  responseMsg: Message[] = [];
  data: any[] = [];
  cols: any[] = [];
  loading: boolean = false;
  caseId: any;

  @ViewChild('f', {static: false}) _respondentForm!: NgForm;
  
  constructor(private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this.cols = TableConstants.caseStatusColumns;
    this.onView();
  }

  onSubmit() {
    const params = {
      'casestatusid': this.caseId,
      'casestatusname': this.caseStatus,
      'createddate': new Date(),
      'flag': (this.selectedType == 1) ? true : false
    }
    this._restApiService.post('CasestatusMaster/CasestatusMaster', params).subscribe(res => {
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
    this._restApiService.get('CasestatusMaster/GetCasestatusMaster').subscribe(res => {
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
      this.caseStatus = null;
      this.selectedType = null;
      this.caseId = 0;
  }

  onEdit(row: any) {
    this.caseId = row.casestatusid;
    this.caseStatus = row.casestatusname;
    this.selectedType = (row.flag === 'Active') ? 1 : 0;
  }
  onCheck() {
    this.data.forEach( i => {
      if(i.casestatusname  === this.caseStatus ) {
        this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'case status name is already exist, Please input different name' }];
          this.caseStatus = null;
      }
    })
  }
  }
  