import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';

@Component({
  selector: 'app-writ-appeals',
  templateUrl: './writ-appeals.component.html',
  styleUrls: ['./writ-appeals.component.scss']
})
export class WritAppealsComponent implements OnInit {

  zoneOptions: SelectItem[] = [];
  zone: any;
  districtOptions: SelectItem[] = [];
  district: any;
  sroOptioins: SelectItem[] = [];
  sro: any;
  caseTypeOptions: SelectItem[] = [];
  caseType: any;
  caseNo: any;
  highCourtRefOptions: SelectItem[] = [];
  highCourtRef: any;
  stageOfCaseOptions: SelectItem[] = [];
  stageOfCase: any;
  petitionerName: any;
  respondentsName: any;
  gistOfCase: any;
  selectedValue: string = '1';
  caseNoYear:any;
  caseYear:any;
  remark:any;
  natureOfCaseOptions:any;
  natureOfCase:any;
  natureofdisposal:any;
  natureOfDisposalOptions:any;
  cols: any[] = [];
  data: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.writeAppealsColumns;
    this.data = [];
  }

  onSave() { }

}