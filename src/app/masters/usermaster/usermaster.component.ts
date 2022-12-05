import { Component, OnInit } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';

@Component({
  selector: 'app-usermaster',
  templateUrl: './usermaster.component.html',
  styleUrls: ['./usermaster.component.scss']
})
export class UsermasterComponent implements OnInit {

  selectedType: any;
  userName: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
   
    }

  onView(){
  
  }

  onClear() {
    
  }

}
