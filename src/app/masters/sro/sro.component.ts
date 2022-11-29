import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sro',
  templateUrl: './sro.component.html',
  styleUrls: ['./sro.component.scss']
})
export class SroComponent implements OnInit {
 zoneName:any;
 districtName:any;
 sroName:any;
 cols:any;
 selectedType:any;
 zoneOptions:any;
 districtOptions:any;
  constructor() { }

  ngOnInit(): void {
    this.cols = [

      {field:'zoneName',header: 'ZoneName'},
      {field:'districtName',header: 'DistrictName'},
      {field:'sroName',header: 'SROName'},
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


