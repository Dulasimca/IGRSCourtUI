import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../services/auth.service';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() status: boolean = false;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private _authService: AuthService, private _restApiService: RestapiService) { }

  items: MenuItem[] = [];

  ngOnInit() {
    this._authService.isLoggedIn.subscribe(value => {
      if (value) {
     const params = new HttpParams().append('roleid', this._authService.getUserInfo().roleid);
        this._restApiService.getByParameters('Masters/GetMenuMasters', params).subscribe(res => {
            this.checkChildItems(res);
            this.items = res;
            this._authService.setMenuStatus(true);
        });
      }
    });
  }

  checkChildItems(data: any) {
    if (data.length !== 0) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].items.length !== 0) {
                //  continue;
                this.checkChildItems(data[i].items);
            } else {
                delete data[i].items;
            }
        }
    }
}

  public onToggleSidenav = () => {
    this.status = !this.status; //closing menu once its been clicked
    this.sidenavToggle.emit(this.status); //emitting event that menu is closed to app component
  }

}