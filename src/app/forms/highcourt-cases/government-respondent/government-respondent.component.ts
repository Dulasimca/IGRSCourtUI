import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';
import { RestapiService } from 'src/app/services/restapi.service';


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
  caseYearOptions: any;
  caseYear: any;
  caseDate: Date = new Date();
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

  constructor(private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this.cols = TableConstants.governmentRespondentColumns;
    this.sroOptions = [
      { label: '1', value: 1 },
      { label: '2', value: 2 }];
  }

  onSelect(value: string) {
    switch (value) {
      case 'ZN':
        break;
      case 'DT':
        break;
      case 'SR':
        break;
      case 'CT':
        break;
      case 'CY':
        break;
      case 'HC':
        break;
      case 'SC':
        break;
    }
  }

  onSave() {
    const params = {
      'courtcaseid': 0,
      'zoneid': this.zone.value,
      'districtid': this.district.value,
      'sroid': this.sro.value,
      'petitionername': this.petitionerName,
      'remarks': this.remarks,
      'responsetypeid': 1,
      'mainprayer': this.gistOfCase,
      'mainrespondents': this.respondentsName,
      'courtid': this.highCourtName.value,
      'casedate': this.caseDate,
      'casenumber': this.caseNo,
      'casestatusid': this.stateOfCase.value,
      'casetypeid': this.caseType.value,
      'caseyear': this.caseYear.value,
      'counterfiled': this.selectedValue,
      'flag': 1,
      'createdate': new Date()
    }
    this._restApiService.post('Respondent/SaveRespondentCase', params).subscribe(res => {
      if (res) {
        console.log(res);
      } else {
        console.log('error occured')
      }
    })
  }

}
