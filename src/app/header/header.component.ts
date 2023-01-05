import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string = '';
  isLoggedIn: boolean = false;
  @Input() public toggle: boolean = true; 
  @Output() public sidenavToggle = new EventEmitter();
  constructor(private _authService: AuthService) {
    this._authService.isLoggedIn.subscribe(value => {
      if(value) {
        this.isLoggedIn = value;
        this.username = this._authService.getUserInfo().username;
      }
    })
   }

  ngOnInit(): void {  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit(this.toggle); //sends 'true' i.e) says menu to open in app component
    this.toggle = !this.toggle; //set toggle to 'false' after opening menu
  }

  onLogout() {
    this.isLoggedIn = false;
    this._authService.logout();
  }

}
