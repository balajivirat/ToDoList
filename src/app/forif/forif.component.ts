import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forif',
  templateUrl: './forif.component.html',
  styleUrls: ['./forif.component.css']
})
export class ForifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // showelements: boolean = true;
  // today = new Date();
  // name = 'Balaji';
  // mynumber = 12345.67890;
  // mycurrency = 4500.50;

  animals = [
    'lion',
    'tiger',
    'cat',
    'dog',
    'mouse'
  ]
  animalname: string = '';

  count: number = 0;
  increment(){
    this.count++;
    if(this.count == 10){
      alert('Exeeding 10 from Parent')
    }
  }
  decrement(){
    this.count--;
  }
  
}
