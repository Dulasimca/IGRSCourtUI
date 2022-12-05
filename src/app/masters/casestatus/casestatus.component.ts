import { Component, OnInit } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';

@Component({
  selector: 'app-casestatus',
  templateUrl: './casestatus.component.html',
  styleUrls: ['./casestatus.component.scss']
})
export class CasestatusComponent implements OnInit {

  selectedType:any;
  caseStatus:any;
  
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
