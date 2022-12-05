import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';

@Component({
  selector: 'app-dig-report',
  templateUrl: './dig-report.component.html',
  styleUrls: ['./dig-report.component.scss']
})
export class DIGReportComponent implements OnInit {
  dig: any;
  digOptions: SelectItem[] = [];
  caseFromDate: any;
  caseToDate: any;
  cols: any[] = [];
  data: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.digreportColumns;
    this.data = [];
  }
  onView() { }
}
