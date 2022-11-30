import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';

@Component({
  selector: 'app-government-respondent',
  templateUrl: './government-respondent.component.html',
  styleUrls: ['./government-respondent.component.scss']
})
export class GovernmentRespondentComponent implements OnInit {
  zoneOptions: SelectItem[] = [];
  zone: any;
  districtOptions: SelectItem[] = [];
  district: any;
  sroOptions: SelectItem[] = [];
  sro: any;
  caseTypeOptions: SelectItem[] = [];
  caseType: any;
  caseNo: any;
  yearOptions: any;
  year: any;
  highCourtNameOptions: SelectItem[] = [];
  highCourtName: any;
  stateOfCaseOptions: SelectItem[] = [];
  stateOfCase: any;
  petitionerName: any;
  respondentsName: any;
  gistOfCase: any;
  remarks: any;
  selectedValue: string = '1';
  dateValue: any;
  cols: any[] = [];
  data: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.governmentRespondentColumns;
    this.data = [];
    this.sroOptions = [
    { label: '1', value: 1 },
    { label: '2', value: 2 }];
  }

  onSave() { }

}
