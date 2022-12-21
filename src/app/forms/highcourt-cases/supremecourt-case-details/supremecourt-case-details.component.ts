import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TableConstants } from 'src/app/constants/table-constants';

@Component({
  selector: 'app-supremecourt-case-details',
  templateUrl: './supremecourt-case-details.component.html',
  styleUrls: ['./supremecourt-case-details.component.scss']
})
export class SupremecourtCaseDetailsComponent implements OnInit {

  zoneOptions: SelectItem[] = [];
  zone: any;
  districtOptions: SelectItem[] = [];
  district: any;
  sroOptions: SelectItem[] = [];
  sro: any;
  caseno: any;
  caseNo: any;
  caseDate: any;
  respondents: string = '';
  respondentCadre: any;
  respondentCadreOptions: any;
  highCourtNameOptions: SelectItem[] = [];
  highCourtName: any;
  stateOfCaseOptions: SelectItem[] = [];
  stateOfCase: any;
  subject:any;
  petitionerName: any;
  respondentsName: any;
  gistOfCase: any;
  remarks: any;
  casefiled:any;
  slpNumber: any;
  slpnumberOptions: SelectItem[] = [];
  filedValue: string = '1';
  selectedValue: string = '1';
  disableAutoDisplay: boolean = false;
  cols: any[] = [];
  data: any[] = [];
  isEditable: boolean = false;
  slpType: any;
  slpOptions: SelectItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.supremeCourtCaseColumns;
    this.data = [];
  }


  onSave() { }

}
