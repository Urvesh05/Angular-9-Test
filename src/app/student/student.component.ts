import { Component,Input,Output,EventEmitter, OnInit, OnChanges, SimpleChange, SimpleChanges, AfterContentInit, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  // outputs: ['childEvent']
})
export class StudentComponent implements OnInit , OnChanges, DoCheck, AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
//  @Input() myinput:string;
//  @Output() myoutput:EventEmitter<string>=new EventEmitter();
//  outputstring ="Hi im Child Data ";

//   constructor() { }

//   ngOnInit() {
//     console.log(this.myinput);
//   }

//   sendData()
//   {
//     this.myoutput.emit(this.outputstring);
//   }


//   values = '';

//   onKey(event: KeyboardEvent) { // without type info
//     this.values += (event.target as HTMLInputElement).value + ' | ';
//   }



// //child data 
// @Input() PData:number;

// @Output() childEvent = new EventEmitter();
// onChange(value)
// {
//   this.childEvent.emit(value);
// }



// //parent to child data transfer example 3
// constructor(){}
//  ngOnInit(){}

//  @Input() PData:number;

constructor()
{
  console.log('constartor call...')
}

@Input() PData:number;

counter;
num:number= 1;

ngOnChanges(changes:SimpleChanges)
{
  //console.log('ngOnChanges Call.., ')
  console.log('ngOnChange call..'+' ' + changes.PData.currentValue)
}

ngOnInit()
{ 
  console.log('ngOnInit call ...')
  this.counter= setInterval(()=>
  {
    this.num=this.num+1;
    console.log(this.num)
  },1000)
}

ngDoCheck()
{
  console.log('ngDoCkeck call..')
}
ngAfterContentInit()
{
  console.log('ng after contents call ....')
}

ngAfterContentChecked()
{
  console.log('ngAfterContent  ckeck.... ')
}

ngAfterViewInit()
{
  console.log('ngAfterView Call...')
}

ngAfterViewChecked()
{
  console.log('ng AfterViewCheck calll..')
}


ngOnDestroy()
{
  console.log('ngOnDestroy calll ...')
  clearInterval(this.PData);
}


}
