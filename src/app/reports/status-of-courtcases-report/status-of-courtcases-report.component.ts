import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';

@Component({
  selector: 'app-status-of-courtcases-report',
  templateUrl: './status-of-courtcases-report.component.html',
  styleUrls: ['./status-of-courtcases-report.component.scss']
})
export class StatusOfCourtcasesReportComponent implements OnInit {

  fromDate: any;
  toDate: any;
  DeputyInspCols: any;
  DeputyInspData: any[]= [];
  counterData: any[] = [];
  counterCols: any;
  stampCols: any;
  stampData: any[] = [];  
  buildingCols: any;
  buildingData: any[] = [];
  loading: boolean = false;
  responseMsg: Message[] = [];

  constructor() { }

  ngOnInit(): void {
    this.DeputyInspCols = TableConstants.DeputyInspColumns;
    this.stampCols = TableConstants.stampColumns;
    this.buildingCols = TableConstants.buildingColumns;
  }

   //PDF
    

}
