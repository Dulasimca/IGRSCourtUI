import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';

@Component({
  selector: 'app-timebound-judgements-directions',
  templateUrl: './timebound-judgements-directions.component.html',
  styleUrls: ['./timebound-judgements-directions.component.scss']
})
export class TimeboundJudgementsDirectionsComponent implements OnInit {
  zoneOptions: SelectItem[] = [];
  zone: any;
  districtOptions: SelectItem[] = [];
  district: any;
  sroOptions: SelectItem[] = [];
  sro: any;
  caseTypeOptions: SelectItem[] = [];
  caseType: any;
  caseYearOptions: SelectItem[] = [];
  caseYear: any;
  caseNo:any;
  courtType: any;
  courtTypeOptions: SelectItem[] = [];
  yearOptions: SelectItem[] = [];
  judgementDate: any;
  petitionerName: any;
  respondentsName: any;
  receiptDate: any;
  timeLimit: any;
  expiryDate: any;
  directedTo: any;
  natureofDirection: any;
  compliedorNot: any;
  remarks: any;
  cols: any[] = [];
  data: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.timeboundjudgementColumns;
    this.data = [];
  }

  onSave() {}

}
