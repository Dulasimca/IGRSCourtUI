import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courttype',
  templateUrl: './courttype.component.html',
  styleUrls: ['./courttype.component.scss']
})
export class CourttypeComponent implements OnInit {

  courtname:any;
  selectedType:any;


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
