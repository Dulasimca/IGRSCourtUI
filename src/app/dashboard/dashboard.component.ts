import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  deputyItems: any[] = [];
  caItems: any [] = [];
  scCaseItems: any[] = [];
  contemptItems: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.deputyItems = [
      { 'title': 'No of CA not filed', 'value': '93' },
      { 'title': 'New affidavits received', 'value': '18' },
      { 'title': 'No of CA filed', 'value': '25' },
      { 'title': 'No of CA pending', 'value': '39' },
    ];
    this.caItems = [
      { 'title': 'GOVT Respondent', 'value': '12' },
      { 'title': 'IGR Respondent', 'value': '31' },
      { 'title': 'OTHERS Respondent', 'value': '43' },
      { 'title': 'Pending with G.P for vetting', 'value': '39' },
    ];
    this.scCaseItems = [
      { 'title': 'Government as petitioner', 'value': '-' },
      { 'title': 'IGR as petitioner', 'value': '19' },
      { 'title': 'Others as petitioner', 'value': '1' },
      { 'title': 'Individual as petitioner', 'value': '5' },
    ];
    this.contemptItems = [
      { 'title': 'Implemented', 'value': '1' },
      { 'title': 'Not Implemented', 'value': '-' },
      { 'title': 'Appealed', 'value': '7' },
      { 'title': 'Not Appealed', 'value': '-' },
      { 'title': 'Affidavit filed', 'value': '15' },
      { 'title': 'Affidavit not filed', 'value': '7' },

    ];

  }

}
