import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';


@Component({
  selector: 'app-dro-sdc-report',
  templateUrl: './dro-sdc-report.component.html',
  styleUrls: ['./dro-sdc-report.component.scss']
})
export class DroSdcReportComponent implements OnInit {

  droOptions: SelectItem[] = [];
  dro: any;
  cols: any[] = [];
  data: any[] = [];
  caseFromDate:any;
  caseToDate:any;
  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.drosdcColumns;
    this.data = [];
    
  }


  onView() { }
}


