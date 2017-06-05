import { Component, OnInit } from '@angular/core';
import {AllchangeComponent} from "../allchange/allchange.component";
import {content} from "../allchange/content";
import {myteacher} from "./teacher";
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() { }
  thisform:any;
  thisin:content[];
  thishead:string[];
  ngOnInit() {
    this .thisform=myteacher;
    this.thisin=[
      {name:"id",hint:"教师编号"},
      {name:"name",hint:"教师姓名"}
    ];
    this.thishead=["序号","教师编号","教师姓名"];

  }

}
