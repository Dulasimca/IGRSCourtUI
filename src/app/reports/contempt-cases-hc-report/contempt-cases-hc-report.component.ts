import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';

@Component({
  selector: 'app-contempt-cases-hc-report',
  templateUrl: './contempt-cases-hc-report.component.html',
  styleUrls: ['./contempt-cases-hc-report.component.scss']
})
export class ContemptCasesHcReportComponent implements OnInit {
  court: any;
  courtOptions: SelectItem[] = [];

  cols: any[] = [];
  data: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.contemptCasesHcReportColumns;
    this.data = [];
  }
  onView() { }
}
