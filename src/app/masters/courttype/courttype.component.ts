import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courttype',
  templateUrl: './courttype.component.html',
  styleUrls: ['./courttype.component.scss']
})
export class CourtTypeComponent implements OnInit {

  courtName:any;
  selectedType:any;


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
