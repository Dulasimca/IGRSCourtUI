import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-rolemaster',
  templateUrl: './rolemaster.component.html',
  styleUrls: ['./rolemaster.component.scss']
})
export class RolemasterComponent implements OnInit {
  roleName: any;
  selectedType: any;
  cols: any[] = [];
  data: any[] = [];
  loading: boolean = false;
  responseMsg: Message[] = [];

  @ViewChild('f', {static: false}) _respondentForm!: NgForm;
  RowId: any;

  constructor(private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this.cols = TableConstants.RoleMasterColumns;
    this.onView();
  }

  onView() {
    this.loading = true;
    this._restApiService.get('RoleMaster/GetRoleMaster').subscribe(res => {
      if(res) {
        res.forEach((i:any) => {
          i.flag = (i.flag == true) ? 'Active' : 'InActive'
        })
  
      }
      this.data = res;
      this.loading = false;
    })
  }

  onSubmit() {
    const params = {
      'roleid': this.RowId,
      'rolename': this.roleName,
      'flag': (this.selectedType == 1) ? true : false
    }
    this._restApiService.post('RoleMaster/SaveRoleMaster', params).subscribe(res => {
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

  onEdit(row: any) {
    this.RowId = row.roleid;
    this.roleName = row.rolename;
    this.selectedType = (row.flag === 'Active') ? 1 : 0;
  }

  onClear() {
    this.RowId = 0;
    this.roleName = null;
    this.selectedType = null;
  }

}
