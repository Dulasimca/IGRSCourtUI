import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';

@Component({
  selector: 'app-supreme-court-cases-report',
  templateUrl: './supreme-court-cases-report.component.html',
  styleUrls: ['./supreme-court-cases-report.component.scss']
})
export class SupremeCourtCasesReportComponent implements OnInit {
  dept: any;
  deptOptions: SelectItem[] = [];
  caseFromDate: any;
  caseToDate: any;
  cols: any[] = [];
  data: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.supremeCourtCaseReportColumns;
    this.data = [];
  }
  onView() { }
}
