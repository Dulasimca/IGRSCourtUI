import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  display: boolean = true;
  constructor() { }

  items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Dashboard',
                icon: 'pi pi-pw pi-home',
            },
            {
                label: 'Forms',
                icon: 'pi pi-fw pi-file-o',
                items: [
                    { label: 'High Court Cases', 
                  items: [
                    {label: 'Government Respondent', routerLink: '/government-respondent-hight-court-cases'},
                    {label: 'IGR Respondent', routerLink: '/igr-respondent'},
                    {label: 'Other Respondent', routerLink: '/others-respondent'},
                    {label: 'Time Bound/Judgements', routerLink: '/time-bound'},
                    {label: 'Pending Enquiry', routerLink: '/pending-enquiry-hight-court-cases'},
                    {label: 'Writ Appeals', routerLink: '/writ-appeals-hight-court-cases'}
                  ]},
                  { label: 'Supreme Court Case Details', routerLink: '/supreme-court-case-details'},
                  {label: 'Law Officers Opinion Register', routerLink: '/lawofficers-opinion-register'},

                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
            },
        ];
    }
}