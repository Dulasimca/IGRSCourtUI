import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';

@Component({
  selector: 'app-lawofficers-opinion-register',
  templateUrl: './lawofficers-opinion-register.component.html',
  styleUrls: ['./lawofficers-opinion-register.component.scss']
})
export class LawofficersOpinionRegisterComponent implements OnInit {

  zoneOptions: SelectItem[] = [];
  zone: any;
  districtOptions: SelectItem[] = [];
  district: any;
  sroOptions: SelectItem[] = [];
  sro: any;
  caseTypeOptions: SelectItem[] = [];
  caseType: any;
  caseNo: any;
  caseYear: any;
  stateOfCaseOptions: SelectItem[] = [];
  stateOfCase: any;
  subject:any;
  petitionerName: any;
  respondentsName: any;
  gistOfCase: any;
  gistOfOpinion:any;
  gistOfOpinionReceived:any;
  caseFiled:any;
  reason:any;
  nameofcourt:any;
  remarks:any;
  nameOfCourtameOptions:SelectItem[] = [];
  selectedValue: string = '1';
  cols: any[] = [];
  data: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.lawofficersopinionColumns;
    this.data = [];
  }

  onSave() { }

}
