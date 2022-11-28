import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-igr-respondent',
  templateUrl: './igr-respondent.component.html',
  styleUrls: ['./igr-respondent.component.scss']
})
export class IgrRespondentComponent implements OnInit {

  zoneOptions: SelectItem[] = [];
  zone: any;
  districtOptions: SelectItem[] = [];
  district: any;
  sroOptions: SelectItem[] = [];
  sro: any;
  caseTypeOptions: SelectItem[] = [];
  caseType: any;
  caseNo: any;
  caseYearOptions:SelectItem[] = [];
  caseYear:any;
  highCourtNameOptions: SelectItem[] = [];
  highCourtName: any;
  stateOfCaseOptions: SelectItem[] = [];
  stateOfCase: any;
  petitionerName: any;
  respondentsName: any;
  gistOfCase: any;
  remarks: any;
  selectedValue: string = '1';
  constructor() { }

  ngOnInit(): void {
  }

  onSave() { }

}
