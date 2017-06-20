import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {mystudent} from "./student"
import {Student} from "./student"
import 'rxjs/add/observable/of';
import {NgForm} from '@angular/forms';
import { Http,RequestOptions,Headers } from '@angular/http';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private  http:Http,overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
    this.setstates();
    console.log(this.stud);


  }

  public selected:string;
  public states:string[]=[];
  public all;
  public stud:Student;
  public check:boolean=false;
public addmodal(){
  this.modal.alert()
    .size('sm')
    .showClose(true)
    .title('A simple Alert style modal window')
    .body(`确认`)
    .open();

}
 public setstates(){
    this.getall().subscribe(res=>{
      this.all=res;
      for(let i=0;i<res.length;i++)
      {
        this.states[i]=res[i].id;
      }
      //this.states.push("aa");
      console.log(this.all);
    });
 }
 public deletest(s:Student){
   console.log(s);
   let headers = new Headers({ 'Content-Type': 'application/json' });

   let options = new RequestOptions({ headers: headers });
   let id=s.id;
   this.http.delete("/student/"+id,options).map(res=>res.json()).subscribe(
     data=>{
       console.log(data);
     },
     err=>{
       console.log(err);
     }
   );
 }
 public change(s:Student){
   console.log(s);
   let headers = new Headers({ 'Content-Type': 'application/json' });

   let options = new RequestOptions({ headers: headers });
  this.http.put("/student",JSON.stringify(s),options).map(
    res=>res.json()
  ).subscribe(
    data=>{
      console.log(data);
    },
    err=>{
      console.log(err);
    }
  );
 }
  public getall(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get("/student/all", options)
      .map(res=>res.json());

  }
  addstu(f:NgForm){
    let headers = new Headers({ 'Content-Type': 'application/json' });

    let options = new RequestOptions({ headers: headers });

    this.http.post("/student", JSON.stringify( f.value), options).subscribe(function (data) {

      console.log(data)

    });
    //this.http.post("/studnet",f.value);
    console.log(f.value);
  }
  look(s:string){
    for(let i=0;i<this.all.length;i++)
    {
      if(s==this.all[i].id){
        this.check=true;
        // this.stu={
        //   id:this.all[i].id,
        //   name:this.all[i].name,
        //   sex:this.all[i].sex,
        //   tel:this.all[i].tel,
        //   stclass:this.all[i].stclass
        //
        // };
        this.stud=this.all[i];

        break;
      }
    }
    console.log(this.stud);
  }
  ngOnInit() {
  }

}
