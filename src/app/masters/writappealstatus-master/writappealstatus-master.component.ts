import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-writappealstatus-master',
  templateUrl: './writappealstatus-master.component.html',
  styleUrls: ['./writappealstatus-master.component.scss']
})
export class WritappealstatusMasterComponent implements OnInit {

  selectedType: any;
  selectedCategory: any = null;
  writappealstatusName: any;
  cols: any[] = [];
  data: any[] = [];
  loading: boolean = false;
  responseMsg: Message[] = [];
  RowId: any;

  @ViewChild('f', { static: false }) _respondentForm!: NgForm;

  constructor(private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this.cols = TableConstants.writappealstatusmasterColumns;

    this.onView();
  }


  onView() {
    this.loading = true;
    this._restApiService.get('WritappealstatusMaster/GetWritappealstatusMaster').subscribe(res => {
      if (res) {
        res.forEach((i: any) => {
          i.flag = (i.flag == true) ? 'Active' : 'InActive'
        })

      }
      this.data = res;
      this.loading = false;
    })
  }

  onSubmit() {
    const params = {
      'writappealstatusid': this.RowId,
      'writappealstatusname': this.writappealstatusName,
      'createddate': new Date(),
      'flag': (this.selectedType == 1) ? true : false
    }
    this._restApiService.post('WritappealstatusMaster/SaveWritappealstatusMaster', params).subscribe(res => {
      if (res) {
        this.onView();
        this.onClear();
        this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.SuccessMessage }];
        setTimeout(() => this.responseMsg = [], 3000);
      } else {
        this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: ResponseMessage.ErrorMessage }];
        setTimeout(() => this.responseMsg = [], 3000)
      }
    })
  }

  onClear() {
    this.writappealstatusName = null;
    this.selectedType = null;
    this.RowId = 0;
  }

  onEdit(row: any) {
    this.RowId = row.writappealstatusid;
    this.writappealstatusName = row.writappealstatusname;
    this.selectedType = (row.flag === 'Active') ? 1 : 0;
  }

  onCheck() {
    this.data.forEach(i => {
      if (i.writappealstatusname === this.writappealstatusName) {
        this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'Writappealstatusname already exist, Please input different name' }];
        this.writappealstatusName = null;
      }
    })
  }
}
