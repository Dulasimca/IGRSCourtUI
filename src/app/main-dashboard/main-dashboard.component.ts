import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private _restApiService: RestapiService, private _router: Router) { }

  ngOnInit(): void {
    const colors = ['#ed4981', '#e67a07', '#30b5d1', '#dc3545', '#459e74', '#4770ad', '#fbc02d', '#b586cd', '#d63384', '#4caf50'];
    this._restApiService.get('Dashboard').subscribe(res => {
      if (res) {
        res.forEach((item: any, index: number) => {
          const result = this.setFields(item.key);
          item.id = result.id;
          item.title = result.title;
          item.src = result.url;
          item.goto = result.goto;
          item.count = item.value;
          item.color = colors[index];
        })
        this.items = res;
      }
    })
  }

  setFields(key: any) {
    let title = '', url = '', goto = '', id = 0;
    switch (key) {
      case 'GOV':
        id = 1;
        title = 'Government Respondents';
        url = 'assets/images/layout/government.png';
        goto = '/court-case';
        break;
      case 'IGR':
        id = 2;
        title = 'IGR Respondents';
        url = 'assets/images/layout/inspector.png';
        goto = '/court-case';
        break;
      case 'OTHERS':
        id = 3;
        title = 'Other Respondents';
        url = 'assets/images/layout/others.png';
        goto = '/court-case';
        break;
      case 'WRIT':
        id = 4;
        title = 'Writ Appeals';
        url = 'assets/images/layout/appeal.png';
        goto = '/court-case';
        break;
      case 'PENDING':
        id = 5;
        title = 'Pending Enquiries';
        url = 'assets/images/layout/pending.png';
        goto = '/court-case';
        break;
      case 'TIMEBOUND':
        id = 6;
        title = 'Time Bound/Judgement';
        url = 'assets/images/layout/time-bound.png';
        goto = '/court-case';
        break;
      case 'SUPREME':
          id = 7;
          title = 'Supreme Court Cases';
          url = 'assets/images/layout/law.png';
        goto = '/court-case';
        break;
      case 'LAW':
        id = 8
        title = 'Law Officers Opinion';
        url = 'assets/images/layout/opinion.png';
        goto = '/court-case';
        break;
    }
    return { id: id, title: title, url: url, goto: goto };
  }

  onNavigate(goto: string) {
    this._router.navigate([goto]);
  }

}
