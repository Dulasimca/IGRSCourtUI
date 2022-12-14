import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-slp-master',
  templateUrl: './slp-master.component.html',
  styleUrls: ['./slp-master.component.scss']
})
export class SlpMasterComponent implements OnInit {
  Name:any;
  selectedType:any;
  cols: any[] = [];
  data: any[] = [];
  loading: boolean = false;
  responseMsg: Message[] = [];
  slpid: any;

  @ViewChild('f', {static: false}) _respondentForm!: NgForm;
  constructor(private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this.cols = TableConstants.SlpMaster;
    this.onView();
  }
  onSubmit() {
    const params = {
      'slpid': this.slpid,
      'name': this.Name,
      'createddate': new Date(),
      'flag': (this.selectedType == 1) ? true : false
    }
    this._restApiService.post('SlpMaster/SaveSlpMaster', params).subscribe(res => {
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
  this._restApiService.get('SlpMaster/GetSlpMaster').subscribe(res => {
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
  this.Name  = null;
  this.selectedType = null;
  this.slpid=0;
}

onEdit(row:any) {
  this.slpid = row.slpid;
  this.Name = row.name;
  this.selectedType = (row.flag === 'Active') ? 1 : 0;
}
onCheck() {
  this.data.forEach( i => {
    if(i.name  === this.Name ) {
      this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'Name is already exist, Please input different name' }];
        this.Name = null;
    }
  })
}
}
