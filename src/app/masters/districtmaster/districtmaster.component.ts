import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message, SelectItem } from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';


@Component({
  selector: 'app-districtmaster',
  templateUrl: './districtmaster.component.html',
  styleUrls: ['./districtmaster.component.scss']
})
export class DistrictMasterComponent implements OnInit {

  selectedType:any;
  selectedCategory: any = null;
  zone: any;
  districtName:any;
  district: any;
  zoneOptions: SelectItem[] = [];
  masters?: any;
  cols: any[] = [];
  data: any[] = [];
  loading: boolean = false;
  responseMsg: Message[] = [];
  zoneid: any;
  RowId: any;
  @ViewChild('f', {static: false}) _respondentForm!: NgForm;

  
 
  constructor(private _masterService: MasterService, private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this.masters = this._masterService.masterData;
    this.cols = TableConstants.DistrictMasterColumns;
    this.onView();
  }

  onSelect(value: string) {
    if(this.masters) {
      let zoneList: any = [];
      switch(value) {
        case 'ZN':
          if (this.masters.zone_Masters) {
            this.masters.zone_Masters.forEach((zn: any) => {
              zoneList.push(
                { label: zn.zonename, value: zn.zoneid, }
              )
            })
            this.zoneOptions = zoneList;
          }
          break;
      }
    }

  }

  onSubmit() {
    const params = {
      'districtid': this.RowId,
      'zoneid': this.zone,
      'districtname': this.districtName,
      'createddate': new Date(),
      'flag': (this.selectedType == 1) ? true : false
    }
    this._restApiService.post('DistrictMaster/SaveDistrictMaster', params).subscribe(res => {
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
    this._restApiService.get('DistrictMaster/GetDistrictMaster').subscribe(res => {
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
    this.zone = null;
    this.zoneOptions = [];
    this.district = null;
    this.selectedType = null;
    this.RowId = 0;
  }

  onEdit(row: any) {
    this.RowId = row.districtid;
    this.zone = row.zoneid;
    this.zoneOptions = [{ label: row.zonename, value: row.zoneid}];
    this.districtName = row.districtname;
    this.selectedType = (row.flag === 'Active') ? 1 : 0;
  }
  onCheck() {
    this.data.forEach( i => {
      if(i.districtname  === this.districtName ) {
        this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'Respondent name is already exist, Please input different name' }];
          this.districtName = null;
      }
    })
  }
  
}
