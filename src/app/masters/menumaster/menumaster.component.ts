import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menumaster',
  templateUrl: './menumaster.component.html',
  styleUrls: ['./menumaster.component.scss']
})
export class MenumasterComponent implements OnInit {

  selectedType:any;
  menu: any;
  
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
