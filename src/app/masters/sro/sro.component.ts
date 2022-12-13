import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message, SelectItem } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { TableConstants } from 'src/app/constants/table-constants';
import { MasterService } from 'src/app/services/master.service';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-sro',
  templateUrl: './sro.component.html',
  styleUrls: ['./sro.component.scss']
})
export class SroComponent implements OnInit {
 zoneName:any;
 districtName:any;
 sroName:any;
 selectedType:any;
 zoneOptions:SelectItem[] = [];
 districtOptions:SelectItem[] = [];
 cols: any[] = [];
 data: any[] = [];
 loading: boolean = false;
 responseMsg: Message[] = [];
 masters?: any;


 @ViewChild('f', {static: false}) _respondentForm!: NgForm;
  RowId: any;
 

  constructor(private _masterService: MasterService, private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this.masters = this._masterService.masterData;
    this.cols = TableConstants.SroMasterColumns;
    this.onView();
  }

  onSelect(value: string) {
    if(this.masters) {
      let zoneList: any = [];
      let districtList: any = [];

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
          case 'DT':
            if (this.masters.district_Masters) {
              if (this.zoneName) {
                this.masters.district_Masters.forEach((dt: any) => {
                  if (dt.zoneid === this.zoneName) {
                    districtList.push(
                      { label: dt.districtname, value: dt.districtid, zoneId: dt.zoneid }
                    )
                  }
                })
              }
              this.districtOptions = districtList;
            }
            break;
      }
    }

  }

  onSubmit() {
    const params = {
      'sroid': this.RowId,
      'sroname': this.sroName,
      'zoneid': this.zoneName,
      'districtid': this.districtName,
      'createddate': new Date(),
      'flag': (this.selectedType == 1) ? true : false
    }
    this._restApiService.post('SROMaster/SaveSroMaster', params).subscribe(res => {
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
    this._restApiService.get('SROMaster/GetSroMaster').subscribe(res => {
      if(res) {
        res.forEach((i:any) => {
          i.flag = (i.flag == true) ? 'Active' : 'InActive'
        })  
      }
      this.data = res;
    })
  }

  onClear() {
    this.zoneName = null;
    this.zoneOptions  = [];
    this.districtName = null;
    this.districtOptions = [];
    this.sroName = null;
    this.selectedType = null;
    this.RowId = 0;
  }

  onEdit(row: any) {
    this.RowId = row.sroid;
    this.zoneName = row.zoneid;
    this.zoneOptions = [{ label: row.zonename, value: row.zoneid}];
    this.districtName = row.districtid;
    this.districtOptions  = [{ label: row.districtname, value: row.districtid}];
    this.sroName = row.sroname;
    this.selectedType = (row.flag === 'Active')? 1 : 0;
  }
  

  }


