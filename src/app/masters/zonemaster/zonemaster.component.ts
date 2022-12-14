import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AppModule } from 'src/app/app.module';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-zonemaster',
  templateUrl: './zonemaster.component.html',
  styleUrls: ['./zonemaster.component.scss']
})
export class ZoneMasterComponent implements OnInit {

  selectedType: any;
  selectedCategory: any = null;
  zoneName: any;
  cols: any[] = [];
  data: any[] = [];
  loading: boolean = false;
  responseMsg: Message[] = [];
  RowId: any;
  block: RegExp = /^[^=<>*%(){}$@#_!+0-9&?,.;'"?/]/; 


  @ViewChild('f', { static: false }) _respondentForm!: NgForm;

  constructor(private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this.cols = TableConstants.zonemasterColumns;

    this.onView();
  }


  onView() {
    this.loading = true;
    this._restApiService.get('ZoneMaster/GetZoneMaster').subscribe(res => {
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
      'zoneid': this.RowId,
      'zonename': this.zoneName,
      'createddate': new Date(),
      'flag': (this.selectedType == 1) ? true : false
    }
    this._restApiService.post('ZoneMaster/SaveZoneMaster', params).subscribe(res => {
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

  onClear() {
    this.zoneName = null;
    this.selectedType = null;
    this.RowId = 0;
  }

  onEdit(row: any) {
    this.RowId = row.zoneid;
    this.zoneName = row.zonename;
    this.selectedType = (row.flag === 'Active') ? 1 : 0;
  }

  onCheck() {
    this.data.forEach(i => {
      if (i.zonename === this.zoneName) {
        this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'Zonename is already exist, Please input different name' }];
        this.zoneName = null;
      }
    })
  }
}
