import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() status: boolean = false;
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-pw pi-home',
        routerLink: '/dashboard'
      },
      {
        label: 'Forms',
        icon: 'pi pi-fw pi-file-o',
        items: [
          {
            label: 'High Court Cases',
            items: [
              {
                label: 'Government Respondent', routerLink: '/government-respondent-hight-court-cases',
                command: () => this.onToggleSidenav()
              },
              {
                label: 'IGR Respondent', routerLink: '/igr-respondent',
                command: () => this.onToggleSidenav()
              },
              {
                label: 'Other Respondent', routerLink: '/others-respondent',
                command: () => this.onToggleSidenav()
              },
              {
                label: 'Time Bound/Judgements', routerLink: '/time-bound',
                command: () => this.onToggleSidenav()
              },
              {
                label: 'Pending Enquiry', routerLink: '/pending-enquiry-hight-court-cases',
                command: () => this.onToggleSidenav()
              },
              {
                label: 'Writ Appeals', routerLink: '/writ-appeals-hight-court-cases',
                command: () => this.onToggleSidenav()
              }
            ]
          },
          {
            label: 'Supreme Court Case Details', routerLink: '/supreme-court-case-details',
            command: () => this.onToggleSidenav()
          },
          {
            label: 'Law Officers Opinion Register', routerLink: '/lawofficers-opinion-register',
            command: () => this.onToggleSidenav()
          },

        ]
      },
      {
        label: 'Masters',
        icon: '',
        items: [
          {
            label: 'Zone Master',
            routerLink: '/zone-master',
            command: () => this.onToggleSidenav()
          },
          {
            label: 'District Master',
            routerLink: '/district-master',
            command: () => this.onToggleSidenav()
          },
          {
            label: 'Court Type',
            routerLink: '/court-type',
            command: () => this.onToggleSidenav()
          },
          {
            label: 'SRO Master',
            routerLink: '/sro',
            command: () => this.onToggleSidenav()
          },
          {
            label: 'Case Master',
            routerLink: '/case-type',
            command: () => this.onToggleSidenav()
          }
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
      },
    ];
  }

  public onToggleSidenav = () => {
    this.status = !this.status; //closing menu once its been clicked
    this.sidenavToggle.emit(this.status); //emitting event that menu is closed to app component
  }


}