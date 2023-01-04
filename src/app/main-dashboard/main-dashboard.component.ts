import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  govCount: any;
  igrCount: any;
  othersCount: any;
  writCount: any;
  pendingCount: any;
  lawCount: any;
  supremeCount: any;
  items: any[] = [];
  constructor(private _restApiService: RestapiService) { }

  ngOnInit(): void {
    this._restApiService.get('Dashboard').subscribe(res => {
      if (res) {
        res.forEach((item: any) => {
          const result = this.setFields(item.key);
          item.title = result.title;
          item.src = result.url;
          item.count = item.value;
        })
        this.items = res;
      }
    })
  }

  setFields(key: any) {
    let title = '', url = '';
    switch (key) {
      case 'GOV':
        title = 'Government Respondents';
        url = 'assets/images/layout/government.png';
        break;
      case 'IGR':
        title = 'IGR Respondents';
        url = 'assets/images/layout/inspector.png';
        break;
      case 'OTHERS':
        title = 'Other Respondents';
        url = 'assets/images/layout/others.png';
        break;
      case 'WRIT':
        title = 'Writ Appeals';
        url = 'assets/images/layout/appeal.png';
        break;
      case 'PENDING':
        title = 'Pending Enquiries';
        url = 'assets/images/layout/pending.png';
        break;
      case 'TIMEBOUND':
        title = 'Time Bound/Judgement';
        url = 'assets/images/layout/time-bound.png';
        break;
      case 'SUPREME':
          title = 'Supreme Court Cases';
          url = 'assets/images/layout/law.png';
          break;
      case 'LAW':
        title = 'Law Officers Opinion';
        url = 'assets/images/layout/opinion.png';
        break;
    }
    return { title: title, url: url };
  }

}
