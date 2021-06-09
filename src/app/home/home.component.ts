import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  // saver = 1;
  // binding() {
  //   this.saver ++;
  // }
  // users = [
  //   {name: "balaji", age: 23},
  //   {name: "deva", age: 23},
  //   {name: "pravin", age: 23}
  // ]
  // showusers: boolean= true;
 @Input() counter: number = 0;
 ngOnChanges() {
    if(this.counter == 5){
    alert('Exeeding 5 from Child 1')
  }
 }

}
