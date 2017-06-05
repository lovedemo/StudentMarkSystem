import { Component, OnInit } from '@angular/core';
import {mystudent} from "./student"
import {Student} from "./student"
import 'rxjs/add/observable/of';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
  public selected:string;
  public states:string[] ;
  public isCollapsed:boolean = true;

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }
  addstu(f:NgForm){
    console.log(f.value);
  }
  ngOnInit() {
  }

}
