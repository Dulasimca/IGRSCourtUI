import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-counterfiled-master',
  templateUrl: './counterfiled-master.component.html',
  styleUrls: ['./counterfiled-master.component.scss']
})
export class CounterfiledMasterComponent implements OnInit {

  selectedType: any;
  counterfiledid: any;
  counterfiledName: any;
  responseMsg: Message[] = [];
  cols: any[] = [];
  data: any[] = [];
  loading: boolean = false;

  @ViewChild('f', { static: false }) _respondentForm!: NgForm;


  constructor(private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this.cols = TableConstants.counterfiledMaster;
    this.onView();
  }

  onSubmit() {
    const params = {
      'counterfiledid': this.counterfiledid,
      'counterfiledname': this.counterfiledName,
      'createddate': new Date(),
      'flag': (this.selectedType == 1) ? true : false
    }

    this._restApiService.post('CounterfiledMaster/SaveCounterfiledMaster', params).subscribe(res => {
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
    this._restApiService.get('CounterfiledMaster/GetCounterfiledMaster').subscribe(res => {
      if (res) {
        res.forEach((i: any) => {
          i.flag = (i.flag == true) ? 'Active' : 'InActive'
        })

      }
      this.data = res;
      this.loading = false;
    })

  }

  onClear() {
    this.counterfiledName = null;
    this.selectedType = null;
    this.counterfiledid = 0;

  }

  onEdit(row: any) {
    this.counterfiledid = row.counterfiledid;
    this.counterfiledName = row.counterfiledname;
    this.selectedType = (row.flag === 'Active') ? 1 : 0;
  }

  onCheck() {
    this.data.forEach( i => {
      if(i.counterfiledname  === this.counterfiledName ) {
        this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'Counterfiled name already exists, Please input different name' }];
          this.counterfiledName = null;
      }
    })
  }
}
