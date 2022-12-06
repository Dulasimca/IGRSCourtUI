import { Component, OnInit } from '@angular/core';
import { TableConstants } from 'src/app/constants/table-constants';

@Component({
  selector: 'app-sc-ca-not-filed',
  templateUrl: './sc-ca-not-filed.component.html',
  styleUrls: ['./sc-ca-not-filed.component.scss']
})
export class ScCaNotFiledComponent implements OnInit {
  
  cols: any[] = [];
  data: any[] = [];
  slpCaseNo:any;
  petitioner:any;
  Respondent:any;
  GistOfMatter:any;
  remarks:any;
  section:any;

  constructor() { }

  ngOnInit(): void {
    this.cols = TableConstants.ScCaNotFiledColumns;
    this.data = [];
  }

  onView(){

  }

}

