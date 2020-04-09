import { Component, OnInit ,ViewChild,ElementRef,AfterContentInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-them-viewchild-templet',
  templateUrl: './them-viewchild-templet.component.html',
  styleUrls: ['./them-viewchild-templet.component.css']
})
export class ThemViewchildTempletComponent implements OnInit ,AfterViewInit{
  @ViewChild('name') nameVariable:ElementRef; 
  @ViewChild('state')stateVariable:ElementRef;
  ngAfterViewInit()
  {
    this.nameVariable.nativeElement.style.backgroundColor='red';
    this.nameVariable.nativeElement.style.color='black';

    this.stateVariable.nativeElement.style.backgroundColor='green';
    this.stateVariable.nativeElement.style.color='pink';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
