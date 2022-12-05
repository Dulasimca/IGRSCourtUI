import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';


@Component({
  selector: 'app-ca-not-filed-report',
  templateUrl: './ca-not-filed-report.component.html',
  styleUrls: ['./ca-not-filed-report.component.scss']
})
export class CaNotFiledReportComponent implements OnInit {
  
  zoneOptions: SelectItem[] = [];
  zone: any;
  cols: any[] = [];
  data: any[] = [];
  govtRespondent:any;
  igrRespondent:any;
  othersRespondent:any;
  total:any;
  pendingGp:any;

  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.caNotfiledreportColumns;
    this.data = [];
  }

  onSave() { }
  }
  



