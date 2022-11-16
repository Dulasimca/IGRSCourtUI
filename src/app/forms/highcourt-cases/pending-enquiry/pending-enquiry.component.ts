import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-pending-enquiry',
  templateUrl: './pending-enquiry.component.html',
  styleUrls: ['./pending-enquiry.component.scss']
})
export class PendingEnquiryComponent implements OnInit {

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
  subject:any;
  petitionerName: any;
  respondentsName: any;
  gistOfCase: any;
  Referencenumber:any;
  year:any;
  CaseYearOptions:any;
  selectedValue: string = '1';
  constructor() { }

  ngOnInit(): void {
  }

  onSave() { }

}
