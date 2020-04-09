import { Component ,HostListener, Inject, OnInit, OnChanges, SimpleChange, SimpleChanges, Input, DoCheck, AfterContentInit} from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 //template:`<h1>how are you  ?</h1>`,
 styleUrls: ['./app.component.css'],
 //styles:['h1{color:green}']
providers:[MyserviceService]

})
export class AppComponent implements OnInit {
 
  title = 'angula9app';
  // constructor(@Inject(MyserviceService)myserviceService)
  // {
  //   console.log(myserviceService);
  //   console.log("this is components ");
  // }

  // @HostListener('click',['$event'])
  // onhostclick(event:Event)
  // {
  //   alert("Host Listner hello");
  // }

  // btnclick()
  // {
  //   alert("you click me ");
  // }


  //checkngif=true;

//ngif check or not

//using ngIf then and else 
  // isvalid:boolean=true;
  // changevalue(valid)
  // {
  //   this.isvalid=valid;
  // }


  //swith case using
// public choose='';
// setvalue(dropdown:any)
// {
//   this.choose=dropdown.target.value;
// }



// //ngFor

// Student:any[]=[
//   {
//     'name':'Rahul'
//   },
//   {
//     'name':'Ronak'
//   },
//   {
//     'name':'Ramesh'
//   },
//   {
//     'name':'Kamal'
//   }
// ];


// Student:any[];
// constructor()
//   {
//     this.Student=[
//       {
//         studentId:1,
//         name:'urvesh',
//         gender:'Male',
//         age:'20'
//       },
//       {
//         studentId:2,
//         name:'Mohan',
//         gender:'Male',
//         age:'20'
//       },
//       {
//         studentId:3,
//         name:'ganesh',
//         gender:'Male',
//         age:'20'
//       }

//     ];
//   }


// getmoreStudent():void

// {
// this.Student=[
//   {
//     studentId:1,
//     name:'urvesh',
//     gender:'Male',
//     age:'20'
//   },
//   {
//     studentId:2,
//     name:'Mohan',
//     gender:'Male',
//     age:'20'
//   },
//   {
//     studentId:3,
//     name:'ganesh',
//     gender:'Male',
//     age:'20'
//   },

//   {
//     studentId:4,
//     name:'prabha',
//     gender:'female',
//     age:'20'
//   }

// ];
// }

// trackbystudentId(index:number,Student:any):string
// {
//   return Student.studentId;
// }}


//*ngFor
// student:any[]=[
//   {
//     'name':'Rahul'
//   },
//   {
//     'name':'Rohan'
//   },
//   {
//     'name':'Amit'
//   }
// ];


//*ngFor TrackBy

// Student:any[];
// constructor()
// {
//   this.Student=[
//     {
//       'id':1,
//       'name':'Tarun',
//       'age':'20',
//       'gender':'male'
//     },

//     {
//       'id':2,
//       'name':'Tara',
//       'age':'20',
//       'gender':'female'
//     },

//     {
//       'id':3,
//       'name':'Anu',
//       'age':'20',
//       'gender':'male'
//     }
//   ];
// }

// getmoreStudent():void
// {
//   this.Student=[
//     {
//       'id':1,
//       'name':'Tarun',
//       'age':'20',
//       'gender':'male'
//     },

//     {
//       'id':2,
//       'name':'Tara',
//       'age':'20',
//       'gender':'female'
//     },

//     {
//       'id':3,
//       'name':'Anu',
//       'age':'20',
//       'gender':'male'
//     },
//     {
//       'id':4,
//       'name':'Ananika',
//       'age':'20',
//       'gender':'male'
//     },
//     {
//       'id':5,
//       'name':'Anuradha',
//       'age':'20',
//       'gender':'male'
//     }
//   ];
// }

// //trackBy using
// trackbyid(index:number,Student:any):string{
//   return Student.id;
// }



  // countryDetails:any[]=[
  //   {
  //     'counrty':'India',
  //     'people':[
  //       {
  //         "name":"Ajit"
  //       },
  //       {
  //         "name":"Pavan"
  //       },
  //       {
  //         "name":"Haresh"
  //       }
  //     ]
  //   },

  //   {
  //     'counrty':'usa',
  //     'people':[
  //       {
  //         "name":"john"
  //       },
  //       {
  //         "name":"Martin"
  //       },
  //       {
  //         "name":"Iswer"
  //       }
  //     ]
  //   } 
  // ];


//ngStyle

// people:any[]=[
//   {
//     'name':'anu',
//     'country':'India'
//   },
//   {
//     'name':'Amit',
//     'country':'Us'
//   },
//   {
//     'name':'amiral',
//     'country':'UK'
//   },
//   {
//     'name':'Karan',
//     'country':'Us'
//   },
// ];
// getcolor(country)
// {
//   switch(country)
//   {
//     case 'India':
//     return 'green';

//     case 'Us':
//       return 'red';

//       case 'UK':
//         return 'pink';
//   }
// }


// //using ngclass with Componet Method
// users=[
// 'nau',
// 'ajit',
// 'nohan'
// ];

// getcssclass(flag:String)
// {
//   let cssclass;
// if(flag=="mode")
// {
//   cssclass=
//   {
//     'one':true,
//     'two':true
//   }
// }

// else
// {
//   cssclass=
//   {
//     'one':false,
//     'two':true
//   }
// }

// return cssclass;
// }


// //using interpolation
// empFirstName:string ='pavan';
// empLastName:string='Kumar';
// a:number=10;
// b:number=20;


// //using Property Binding
// firstName:string='Karan';


// //Attribute binding
// cols:number=3;
// bod:number=4;



// //event binding
// showdatada()
// {
//   console.log("event binding example")
// }
// show()
// {
//   alert("hello")
// }


// //two way databinding
// data:string ='urvesh';
// data1:string='rahul';



// //using pipe 
// emp:any[]=[
//   {
//     code:'emp001',name:'urvesh'

//   },
//   {
//     code:'emp002',name:'urvesh gaykwad'

//   },
//   {
//     code:'emp003',name:'tarun'

//   }
// ];


// //paramererized pipes 
// dob =new Date (2000-2-2);
// salary =40000;


// //pipe with String
// name:string ="Rahul";
// position:string="Software";
// work:string="computer";


// //pipe example using date
//  currentdate=new Date;
//  mynumber:number=0.12343;



// //joson pipe example
// public emloyees=[
//   {
//   "id":1,"name":"Rahul "
// },
// {
//   "id":2,"name":"Karan "
// },
// {
//   "id":3,"name":"Kisan "
// }
// ];



// //costome pipe

// employee:any=[{
//   code:'001',name:"ajit",gender:"male",salary:20000
// },
// {
//   code:'002',name:"amit",gender:"male",salary:20000
// },
// {
//   code:'003',name:"rekha",gender:"female",salary:20000
// },
// {
//   code:'004',name:"anu",gender:"female",salary:10000
// }
// ];


// //using routing example
// //button  mate
// constructor(private router:Router){}

// student()
// {
//   this.router.navigate(['/student']);
// }


// //using service input data
// text:string;
// constructor(private _myservice:MyserviceService){}//inject karel

// emp:any[];

// ngOnInit()
// {
//   this.text=this._myservice.dispaly();
//   this.emp=this._myservice.employee;
// }



// //using pipes 
// title1='mypipes';
// todaydate =new Date();
// salary='10000';
// decimalpipe='0.21233';

// emp:any[]=[
//   {
//     id:'001',name:'Urvesh',mo:10101,gender:'male'
//   },
//   {
//     id:'002',name:'Mohini',mo:101022221,gender:'female'
//   },
//   {
//     id:'003',name:'Tarun',mo:10101,gender:'male'
//   }
// ];

// //Pipe with String 
// name:string ='Ramesh ';
// position:string='software engineer';
// salary1:number=20000;
// mynumber:number=0.2533465676;


// //json pipe

// jsonvalue={name:"Ajay", age:'30',address:{a1:'India',a2:'France'}};


// //Toggle format
// birthday = new Date(2020, 3, 31); 
// toggle= true;

// get format()
// {
//   return this.toggle ? 'shortDate' : 'fullDate';
// }

// toggleFormat()
// {
//   this.toggle=!this.toggle;
// }


// //@input (Parent to child) 
// inputvariable ="hi im  your parent ";


// //output data
// getdata(value)
// {
//   console.log(value);
// }


// //extra
// clickMessage = '';
// onClickMe() {
//   this.clickMessage = 'You are my hero!';
// }


// value = '';
//   update(value: string) { this.value = value; }



// //@Input data  parent to child data 
// public CData: number;


// //parent data show to child  file example 3
// value:string;
// submitParenData(parentValue)
// {
//   this.value=parentValue.value;

// }



//hook life  cycle..
//allwes  constractor call first 
// constructor()
// {
//   //console.log('constractor call first ')
// }

// //@Input() myparentvalue="hello";
// value:string;
// com1Exits:boolean=true;
// pavalue(parentvalue)
// {
//   this.value=parentvalue.value;
// }


// //Componet life cycle hook
// ngOnChanges(changes:SimpleChanges)
// {
//   //console.log('ngChanges callled ')
// }

// ngOnInit()
// {
//   //console.log('ngOnInit called ')
// }

// destroy()
// {
//   this.com1Exits=false;
// }

ngOnInit(): void {
}

}
