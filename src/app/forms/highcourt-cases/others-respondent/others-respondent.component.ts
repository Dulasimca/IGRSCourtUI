import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-others-respondent',
  templateUrl: './others-respondent.component.html',
  styleUrls: ['./others-respondent.component.scss']
})
export class OthersRespondentComponent implements OnInit {

  zoneOptions: SelectItem[] = [];
  zone: any;
  districtOptions: SelectItem[] = [];
  district: any;
  sroOptions: SelectItem[] = [];
  sro: any;
  caseTypeOptions: SelectItem[] = [];
  caseType: any;
  caseNo: any;
  caseYearOptions: SelectItem[] = [];
  caseYear: any;
  year: any;
  highCourtNameOptions: SelectItem[] = [];
  highCourtName: any;
  remarks: any;
  stateOfCaseOptions: SelectItem[] = [];
  stateOfCase: any;
  petitionerName: any;
  respondentsName: any;
  gistOfCase: any;
  selectedValue: string = '1';
  constructor() { }

  ngOnInit(): void {
  }

  onSave() { }

}
