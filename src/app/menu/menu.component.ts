import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];
  @Input() status: boolean = false;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private _authService: AuthService) {
    this._authService.isLoggedIn.subscribe(value => {
      if (value) {
        var menuList = this._authService.fetchMenu;
        console.log('menu', menuList)
        if(this.items === undefined || this.items === null) {
        this.checkChildItems(menuList);
        this.items = menuList;
        }
      }
    });
  }


  ngOnInit() { }

  checkChildItems(data: any) {
    if (data.length !== 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i]) {
          if (data[i].items.length !== 0) {
            //  continue;
            this.checkChildItems(data[i].items);
          } else {
            delete data[i].items;
          }
        }
      }
    }
  }

  public onToggleSidenav = () => {
    this.status = !this.status; //closing menu once its been clicked
    this.sidenavToggle.emit(this.status); //emitting event that menu is closed to app component
  }

}