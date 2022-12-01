import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';

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
  caseYear:any;
  caseYearOptions:any;
  caseNo: any;
  highCourtNameOptions: SelectItem[] = [];
  highCourtName: any;
  stateOfCaseOptions: SelectItem[] = [];
  stateOfCase: any;
  subject:any;
  petitionerName: any;
  respondentsName: any;
  gistOfCase: any;
  referenceNo:any;
  selectedValue: string = '1';
  cols: any[] = [];
  data: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.pendingEnquiryColumns;
    this.data = [];
  }

  onSave() { }

}
