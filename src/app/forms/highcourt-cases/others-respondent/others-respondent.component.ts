import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';

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
  cols: any[] = [];
  data: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.otherRespondentColumns;
    this.data = [];
  }

  onSave() { }

}
