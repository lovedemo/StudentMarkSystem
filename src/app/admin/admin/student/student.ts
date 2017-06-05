/**
 * Created by YZ on 2017/6/3.
 */
import {Studentclass} from "../studentclass/studentclass"
import {myclass}from "../studentclass/studentclass"
export class Student{
  public id:string;
  public name:string;
  public sex:string;
  public tel:string;
  public stclass:Studentclass;
}
export const mystudent:Student[]=[
  {id:"000002",name:"aaaa",sex:"男",tel:"12333456",stclass:myclass[0]},
  {id:"000003",name:"bbb",sex:"女",tel:"122236",stclass:myclass[1]},
  {id:"000004",name:"cc",sex:"男",tel:"12333456",stclass:myclass[1]},
  {id:"000006",name:"ddd",sex:"男",tel:"12333456",stclass:myclass[2]},
];


