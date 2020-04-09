import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  massege:string='';
  count:number=0;

  constructor() { }

  incresebyone()

  {
    this.count=this.count+1;
    this.massege="Counter:"+this.count;
  }
  decresbyone()
  {
    this.count=this.count-1;
    this.massege="Counter:"+this.count;
  }

postUd:number;
id:number;
name:string;
email:string;
body:string;
  ngOnInit(): void {
  }

}
