import { Component, OnInit } from '@angular/core';
import {AllchangeComponent} from "../allchange/allchange.component";
import {content} from "../allchange/content";
import {mysub} from "./subject";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }
  thisform:any;
  thisin:content[];
  thishead:string[];
  ngOnInit() {
    this .thisform=mysub;
    this.thisin=[
      {name:"id",hint:"课程编号"},
      {name:"name",hint:"课程名称"},
      {name:"point",hint:"学分"}
    ];
    this.thishead=["序号","课程编号","课程名称","学分"];

  }

}
