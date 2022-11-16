import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

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
  highCourtNameOptions: SelectItem[] = [];
  highCourtName: any;
  stateOfCaseOptions: SelectItem[] = [];
  stateOfCase: any;
  petitionerName: any;
  respondentsName: any;
  gistOfCase: any;
  selectedValue: string = '1';
  dateValue: any;
  constructor() { }

  ngOnInit(): void {
    this.sroOptioins = [{ label: '-select-', value: 0 },
  { label: '1', value: 1},
{ label: '2', value: 2}];
  }

  onSave() { }

}
