import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  constructor(private user:UserService){}
  users!:{name:string,job:string,gender:string,country:string,age:number};
 ngOnInit(){
  this.user.OnshowDetailsClicked.subscribe((data:{name:string,job:string,gender:string,country:string,age:number})=>{
    this.users=data;
  })
 }
}
