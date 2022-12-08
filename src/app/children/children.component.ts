import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  @Input()child="student";
  @Output()newchild=new EventEmitter<string>();
  constructor(){}
  ngOnInit():void{

  }
  
  addNewStudent(value:string){
    this.newchild.emit(value);
  }

}
