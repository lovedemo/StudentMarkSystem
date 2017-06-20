import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-myadmin',
  templateUrl: './myadmin.component.html',
  styleUrls: ['./myadmin.component.css']
})
export class MyadminComponent implements OnInit {

  public oldpwdisright:boolean=true;
  constructor() { }

  ngOnInit() {
  }

}
