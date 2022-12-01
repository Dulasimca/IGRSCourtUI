import { Component, OnInit } from '@angular/core';
import { TableConstants } from 'src/app/constants/table-constants';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  zone: any;
  zoneOptions: SelectItem[] = [];
  district: any;
  districtOptions: SelectItem[] = [];
  sro: any;
  sroOptions: SelectItem[] = [];
  cols: any[] = [];
  data: any[] = [];
  
  
  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.reportsColumns;
    this.data = [];
  }

  onSave() { }

}
