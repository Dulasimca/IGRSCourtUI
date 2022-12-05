import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';

@Component({
  selector: 'app-aee-report',
  templateUrl: './aee-report.component.html',
  styleUrls: ['./aee-report.component.scss']
})
export class AeeReportComponent implements OnInit {
  aee: any;
  aeeOptions: SelectItem[] = [];
  caseFromDate: any;
  caseToDate: any;
  cols: any[] = [];
  data: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.aeereportColumns;
    this.data = [];
  }
 onView()
 {

 }
}
