import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';
import { Message } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-casetype',
  templateUrl: './casetype.component.html',
  styleUrls: ['./casetype.component.scss']
})
export class CaseTypeComponent implements OnInit {

  ActiveType:any; 
  nflag : any;
  //caseTypeOptions: SelectItem[] = [];
  caseType: any;
  caseNo: any;
  //selectedValue: string = '1';
  cols: any[] = [];
  data: any[] = [];
  masters?: any;
  responseMsg: Message[] = [];
  caseId: any;
  loading: boolean = false; 
  roleId: any;
  RowId: any;
  @ViewChild('f', {static: false}) _respondentForm!: NgForm;
  constructor(private _restApiService: RestapiService, private _masterService: MasterService, private _authService: AuthService) { }

  ngOnInit(): void {
    this.cols = TableConstants.CaseTypeColumn;
    //this.masters = this._masterService.masterData;
    this.roleId = this._authService.getUserInfo().roleId;   
    this.ActiveType = 1;
    this.onView();
  }
  // onSelect(value: string) {
  //   if (this.masters) {     
  //     let caseTypeList: any = [];     
  //     switch (value) {  
  //       case 'CT':
  //         if (this.masters.casetype_Masters) {
  //           this.masters.casetype_Masters.forEach((ct: any) => {
  //             caseTypeList.push(
  //               { label: ct.casetypename, value: ct.casetypeid }
  //             )
  //           })
  //           this.caseTypeOptions = caseTypeList;
  //         }
  //         break; 
  //     }
  //   }
  // }
  onSubmit() {
    console.log(this.ActiveType);
   const params = {
      'casetypeid': this.RowId,   
      'casetypename': this.caseType,
      'createddate': new Date(),
      'flag': (this.ActiveType === '1') ? true : false,
    }
   
    this._restApiService.post('CasetypeMaster/SaveCasetypeMaster', params).subscribe(res => {
      if (res) {
        this.onView();       
        this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: ResponseMessage.SuccessMessage }];
        setTimeout(() => this.responseMsg = [], 3000);
        
      } else {
        this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: ResponseMessage.ErrorMessage }];
        setTimeout(() => this.responseMsg = [], 3000)
      }
      console.log(this.responseMsg)
    })
  }
    
  onView(){
    this._restApiService.get('CasetypeMaster/GetCasetypeMaster').subscribe(res => {
      if(res) {
        res.forEach((i:any) => {
          i.flag = (i.flag == true) ? 'Active' : 'InActive'
        })
         this.data = res;
      } else {
        this.loading = false;
      }
    })
  
  }

  onClear() {
    this.data = [];
    this.caseType = null;
    this.ActiveType = null;
  }

  onEdit(row:any) {
    this.RowId = row.casetypeid;
    this.caseType = row.casetypename;
    this.ActiveType = (row.flag === 'Active') ? 1 : 0;
  }
  
}
