import { Component, OnInit } from '@angular/core';

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

}
