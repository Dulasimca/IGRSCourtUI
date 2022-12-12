import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-menumaster',
  templateUrl: './menumaster.component.html',
  styleUrls: ['./menumaster.component.scss']
})
export class MenumasterComponent implements OnInit {

  selectedType:any;
  menuName: any;
  url: any;
  parentId:any;
  icon:any;
  role:any;
  priorities:any;
  roleidOptions:any;
  menuId: any;
  masters?: any;
  responseMsg: Message[] = [];
  @ViewChild('f', {static: false}) _respondentForm!: NgForm;
  data: any;
  loading: boolean = false;
  cols:any;
  constructor(private _restApiService: RestapiService, private _masterService: MasterService) { }

  ngOnInit(): void {
    this.cols = TableConstants.MenuMasterColumns;
    this.masters = this._masterService.masterData;
  }
  onSelect(value: string) {
    if(this.masters) {
      let roleList: any = [];
      switch(value) {
        case 'R':
          if (this.masters.rolemaster) {
            this.masters.rolemaster.forEach((r: any) => {
              roleList.push(
                { label: r.rolename, value: r.roleid }
              )
            })
            this.roleidOptions = roleList;
          }
          break;
      }
    }
  }
  onSubmit() {
    const params = {
      'menuid': this.menuId,
      'menuName': this.menuName,
      'url':this.url,
      'parentId':this.parentId,
      'icon':this.icon,
      'role':this.role,
      'priorities':this.priorities,
      'createddate': new Date(),
      'flag': (this.selectedType == 1) ? true : false
    }
    this._restApiService.post('CourtMaster/SaveCourtMaster', params).subscribe(res => {
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
  onView(){
    this._restApiService.get('CourtMaster/GetCourtMaster').subscribe(res => {
      if(res) {
        res.forEach((i:any) => {
          i.flag = (i.flag == true) ? 'Active' : 'InActive'
        })
      }
      this.data = res;
    })
  }
  onClear() {
    this.menuName  = null;
    this.url=null;
    this.parentId=null;
    this.icon=null;
    this.role=null;
    this.selectedType = null;
  }
  onEdit(row:any){
    this.menuName=row.menuName;
    this.url=row.url;
    this.parentId=row.parentId;
    this.icon=row.icon;
    this.role=row.roleId;
    this.selectedType = (row.flag === 'Active') ? 1 : 0;
  }

  }

