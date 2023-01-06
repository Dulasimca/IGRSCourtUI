import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-mainprayermaster',
  templateUrl: './mainprayermaster.component.html',
  styleUrls: ['./mainprayermaster.component.scss']
})
export class MainprayermasterComponent implements OnInit {
  
  selectedType: any;
  mainprayerid: any;
  mainprayerDesc: any;
  responseMsg: Message[] = [];
  cols: any[] = [];
  data: any[] = [];
  loading: boolean = false;

  @ViewChild('f', { static: false }) _mainprayerForm!: NgForm;


  constructor(private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this.cols = TableConstants.judgementMaster;
    this.onView();
  }

  onSubmit() {
    const params = {
      'mainprayerid': this.mainprayerid,
      'mainprayerdesc': this.mainprayerDesc,
      'createddate': new Date(),
      'flag': (this.selectedType == 1) ? true : false
    }

    this._restApiService.post('MainprayerMaster/SaveMainprayerMaster', params).subscribe(res => {
      if (res) {
        this.onView();
        this.onClear();
        this._mainprayerForm.reset();
        this._mainprayerForm.form.markAsUntouched();
        this._mainprayerForm.form.markAsPristine();
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
    this._restApiService.get('MainprayerMaster/GetMainprayerMaster').subscribe(res => {
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
    this.mainprayerDesc = null;
    this.selectedType = null;
    this.mainprayerid = 0;

  }

  onEdit(row: any) {
    this.mainprayerid = row.mainprayerid;
    this.mainprayerDesc = row.mainprayerdesc;
    this.selectedType = (row.flag === 'Active') ? 1 : 0;
  }

  onCheck() {
    this.data.forEach( i => {
      if(i.mainprayerdesc  === this.mainprayerDesc ) {
        this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'Mainprayer description already exist, Please input different description' }];
          this.mainprayerDesc = null;
      }
    })
  }
}
