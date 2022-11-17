import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IGRS-CC';
  show: boolean = false;

  openMenu($event: boolean) {
    this.show = $event; // setting value from header component whether to open/close menu
    this.show = !this.show; // changing show value to avoid double click of icon to open menu
  }

  onToggle($event: boolean) {
    this.show = $event; //setting show value from menu component
  }
}
