import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
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
  parentIdOptions: any;
  menuId: any;
  masters?: any;
  responseMsg: Message[] = [];
  @ViewChild('f', {static: false}) _respondentForm!: NgForm;
  loading: boolean = false;
  cols:any;
  data: any[] = [];
  priority: any;
  priorityOptions: any;
  userInfo!: User;
  parentData: any;


  constructor(private _restApiService: RestapiService, private _masterService: MasterService, private _authService: AuthService) { }

  ngOnInit(): void {
    this.cols = TableConstants.MenuMasterColumns;
    this.masters = this._masterService.getMastersAll();
    this.userInfo = this._authService.getUserInfo();
    console.log('role',this.userInfo)
    this.priorityOptions = [
      {label: '1', value: 1},
      {label: '2',value: 2},
      {label: '3',value: 3},
      {label: '4',value: 4},
      {label: '5',value: 5},
      {label: '6',value: 6},
      {label: '7',value: 7},
      {label: '8',value: 8},
      {label: '9',value: 9},
      {label: '10',value: 10},
      {label: '11',value: 11},
      {label: '12',value: 12},
      {label: '13',value: 13},
      {label: '14',value: 14},
      {label: '15',value: 15}
    ];
    this._restApiService.get('MenuMaster/GetMenuMasterCase').subscribe(res => {
      this.parentData = res;
    }) 
    this.onView();
  }
  onSelect(value: string) {
    if(this.masters) {
      let roleList: any = [];
      let menuList: any = [];
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
          case 'M':
              this.parentData.forEach((m: any) => {
                menuList.push(
                  { label: m.name, value: m.id }
                )
              })
              this.parentIdOptions = menuList;
            
      }
    }
  }
  onSubmit() {
    const params = {
      'menuid': this.menuId,
      'name': this.menuName,
      'url': (this.url !== null && this.url !== undefined) ? this.url : ' ',
      'parentid':this.parentId,
      'icon': (this.icon !== null && this.icon !== undefined) ? this.icon: '' ,
      'roleid':this.role,
      'priorities':this.priority,
      'createddate': new Date(),
      'isactive': (this.selectedType == 1) ? true : false
    }
    this._restApiService.post('MenuMaster/SaveMenuMaster', params).subscribe(res => {
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
    this._restApiService.get('MenuMaster/GetMenuMasterCase').subscribe(res => {
      if(res) {
        res.forEach((i:any) => {
          i.isactive = (i.isactive == true) ? 'Active' : 'InActive'
        })
      }
      this.data = res;
      this.loading = false;
    })
  }
  onClear() {
    this.menuName  = null;
    this.url=null;
    this.parentId=null;
    this.parentIdOptions = [];
    this.icon=null;
    this.role=null;
    this.roleidOptions = [];
    this.selectedType = null;
    this.priority = null;
    this.menuId = 0;
  }
  onEdit(row:any){
    this.menuId = row.menuid;
    this.menuName=row.name;
    this.url=row.url;
    this.parentId=row.parentid;
    this.parentIdOptions = [{ label: row.parentname, value: row.parentid}];
    this.icon=row.icon;
    this.role=row.roleid;
    this.roleidOptions = [{ label: row.rolename, value: row.roleid}];
    this.selectedType = (row.isactive === 'Active') ? 1 : 0;
    this.priority = row.priorities;
  }
  
  onCheck() {
    this.data.forEach( i => {
      if(i.name  === this.menuName ) {
        this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'Menu name is already exist, Please input different name' }];
          this.menuName = null;
      }
    })
  }
  }

