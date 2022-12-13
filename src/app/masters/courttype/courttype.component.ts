import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-courttype',
  templateUrl: './courttype.component.html',
  styleUrls: ['./courttype.component.scss']
})
export class CourtTypeComponent implements OnInit {

  courtName:any;
  selectedType:any;
  cols: any[] = [];
  data: any[] = [];
  loading: boolean = false;
  responseMsg: Message[] = [];
  caseId: any;

  @ViewChild('f', {static: false}) _respondentForm!: NgForm;
  
  

  constructor(private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this.cols = TableConstants.CourtTypeMaster;
    this.onView();
  }


  onSubmit() {
    const params = {
      'courtid': this.caseId,
      'courtname': this.courtName,
      'createddate': new Date(),
      'flag': (this.selectedType == 1) ? true : false
    }
    this._restApiService.post('CourtMaster/SaveCourtMaster', params).subscribe(res => {
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
  this._restApiService.get('CourtMaster/GetCourtMaster').subscribe(res => {
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
  this.courtName  = null;
  this.selectedType = null;
  this.caseId = 0;
}

onEdit(row:any) {
  this.caseId = row.courtid;
  this.courtName = row.courtname;
  this.selectedType = (row.flag === 'Active') ? 1 : 0;
}

onCheck() {
  this.data.forEach( i => {
    if(i.courtname  === this.courtName ) {
      this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'courtname is already exist, Please input different name' }];
        this.courtName = null;
    }
  })
}
}
