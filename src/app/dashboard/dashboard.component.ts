import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  deputyItems: any[] = [];
  caItems: any[] = [];
  scCaseItems: any[] = [];
  contemptItems: any[] = [];
  constructor(private _restApiService: RestapiService) { 
  }

  ngOnInit(): void {
    this._restApiService.get('Dashboard').subscribe(res => {
      if(res) {
        res.forEach((item: any) => {
          item.title = item.key;
        })
        this.caItems = res;
      }
    })
    this.deputyItems = [
      { 'title': 'No of CA not filed', 'value': '0' },
      { 'title': 'New affidavits received', 'value': '0' },
      { 'title': 'No of  CA filed', 'value': '0' },
      { 'title': 'No of  CA pending', 'value': '0' },
    ];
    
    this.scCaseItems = [
      { 'title': 'Government as petitioner', 'value': '0' },
      { 'title': 'IGR as petitioner', 'value': '0' },
      { 'title': 'Others as petitioner', 'value': '0' },
      { 'title': 'Individual as petitioner', 'value': '0' },
    ];
    this.contemptItems = [
      { 'title': 'Implemented', 'value': '0' },
      { 'title': 'Not Implemented', 'value': '0' },
      { 'title': 'Appealed', 'value': '0' },
      { 'title': 'Not Appealed', 'value': '0' },
      { 'title': 'Affidavit filed', 'value': '0' },
      { 'title': 'Affidavit not filed', 'value': '0' },

    ];

  }

}
