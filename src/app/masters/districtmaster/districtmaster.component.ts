import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';


@Component({
  selector: 'app-districtmaster',
  templateUrl: './districtmaster.component.html',
  styleUrls: ['./districtmaster.component.scss']
})
export class DistrictmasterComponent implements OnInit {

  selectedType:any;
  cols:any;
  selectedCategory: any = null;
  zone: any;
  districtName:any;
  district: any;
  zoneOptions: SelectItem[] = [];
  
 
  constructor() { }

  ngOnInit(): void {

    this.cols = [

      {field:'zone',header: 'Zone'},
      {field:'Districtname',header: 'District'},
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
