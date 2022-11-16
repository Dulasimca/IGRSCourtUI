import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
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
  constructor() { }

  ngOnInit(): void {
  }

  onSave() { }

}
