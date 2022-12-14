import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'IGRS-CC';
  show: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private _authService: AuthService) {
    this._authService.isLoggedIn.subscribe(value => {
      this.isLoggedIn = value;
    });
  }

  ngOnInit() { }

  openMenu($event: boolean) {
    this.show = $event; // setting value from header component whether to open/close menu
    this.show = !this.show; // changing show value to avoid double click of icon to open menu
  }

  onToggle($event: boolean) {
    this.show = $event; //setting show value from menu component
  }
}
