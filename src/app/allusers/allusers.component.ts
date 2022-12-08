import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  constructor( private user:UserService){}

  users:{name:string,job:string,gender:string,country:string,age:number}[]=[];
  ngOnInit(){
    this.users=this.user.userdata
  }
  showdetails(user:{name:string,job:string,gender:string,country:string,age:number}){
    this.user.ShowUserDetails(user);
  }

}
