import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-casetype',
  templateUrl: './casetype.component.html',
  styleUrls: ['./casetype.component.scss']
})
export class CaseTypeComponent implements OnInit {

  selectedType:any;
  casetype:any;

  
  constructor() { }

  ngOnInit(): void {

   
  }

  onSubmit() {
   
    }
  onview(){
  
  }

  onClear() {
    
  }
  
}
