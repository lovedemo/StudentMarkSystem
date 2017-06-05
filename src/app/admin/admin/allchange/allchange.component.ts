import {Component, Input, OnInit} from '@angular/core';
import {content} from "./content";
import {NgForm} from '@angular/forms'
import {isUndefined} from "util";

@Component({
  selector: 'app-allchange',
  templateUrl: './allchange.component.html',
  styleUrls: ['./allchange.component.css']
})
export class AllchangeComponent implements OnInit {

  @Input() inputcontent:content[];
  @Input() head:string[];
  @Input() thisform:any[];
  haspoint:boolean;

  ngOnInit() {
  //  console.log(this.thisform.toString());

   //this. haspoint=true;
     //this.thisform[0].point.isUndefined;
    //console.log(this.thisform[0].point);
  }

  additem(f:NgForm){
    console.log(f.value);
    this.thisform.push(f.value);
  }
  deleteitem(a:any){
    this.thisform.splice(a as number,1);
    console.log(a);

  }
}
