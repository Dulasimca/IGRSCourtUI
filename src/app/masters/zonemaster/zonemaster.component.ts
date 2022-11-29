import { Component, OnInit } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';

@Component({
  selector: 'app-zonemaster',
  templateUrl: './zonemaster.component.html',
  styleUrls: ['./zonemaster.component.scss']
})
export class ZoneMasterComponent implements OnInit {

  selectedType:any;
  cols:any;
  selectedCategory: any = null;
  Zonename:any;

  constructor() { }

  ngOnInit(): void {
    this.cols = [

      {field:'Zonename',header: 'Zone'},
      {field:'Flag',header: 'Status'},

    ];
  }

  onSubmit() {
   
    }
  onview(){
  
  }

  onClear() {
    
  }

}
