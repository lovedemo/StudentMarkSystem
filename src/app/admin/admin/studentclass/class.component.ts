import { Component, OnInit } from '@angular/core';
import {myclass} from './studentclass'
import {AllchangeComponent} from "../allchange/allchange.component";
import {content} from "../allchange/content";


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() { }
 thisform:any;
  thisin:content[];
  thishead:string[];
  ngOnInit() {
    this .thisform=myclass;
    this.thisin=[
      {name:"id",hint:"班级编号"},
      {name:"name",hint:"班级名称"}
    ];
    this.thishead=["序号","班级编号","班级名称"];

  }


}
