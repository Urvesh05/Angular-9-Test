import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent implements OnInit {
  //child method call 
  @ViewChild(CounterComponent) countVariabale:CounterComponent;

  //child method call
  increase()
  {
    this.countVariabale.incresebyone(); 
  }
  decrease()
  {
    this.countVariabale.decresbyone();
  }

  resData;
  newsData;

  constructor(private http:HttpClient){}

  ngOnInit(){
    const url="http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-08&sortBy=publishedAt&apiKey=ad8a2ccb337f4d9682738e6217b76f90";
    this.http.get(url).subscribe(res=>
      {
        this.resData=res;
        this.newsData=this.resData.articles;
        
        console.log(this.newsData);

        
      })

    
      
  }

}
