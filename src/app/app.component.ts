import { Component,ElementRef,ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements AfterViewInit{
  title = 'burgerApp';
  constructor(private user:UserService){

  }
  @ViewChild('headline')
  headline!:ElementRef;
  ngAfterViewInit():void{
    
  }


  employees:any=[
    {
      code:'emp001',
      name:'chandan',
      salary:'65000',
      gender:'male',
      dob:'02/aug/1998'
    },
    {
      code:'emp002',
      name:'rakesh',
      salary:'55000',
      gender:'female',
      dob:'03/aug/1998'
    },
    {
      code:'emp003',
      name:'ramesh',
      salary:'75000',
      gender:'female',
      dob:'09/aug/1998'
    },

  ]

}
