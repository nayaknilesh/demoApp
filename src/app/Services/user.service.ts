import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userdata=[
    {name:'nilesh',job:'Techer',gender:'male',country:'india',age:25},
    {name:'manoj',job:'fisherman',gender:'male',country:'india',age:23},
    {name:'rajesh  ',job:'driver',gender:'male',country:'pakistan',age:25},
    {name:'dinesh',job:'enginer',gender:'male',country:'austrelia',age:25},
  ]

  OnshowDetailsClicked=new EventEmitter<{name:string,job:string,gender:string,country:string,age:number}>();

  ShowUserDetails(user:{name:string,job:string,gender:string,country:string,age:number}){
    this.OnshowDetailsClicked.emit(user);
  }
}
