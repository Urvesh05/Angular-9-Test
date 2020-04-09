import { ChangecolorDirective } from './changecolor.directive';

describe('ChangecolorDirective', () => {
  it('should create an instance', () => {
    const directive = new ChangecolorDirective();
    expect(directive).toBeTruthy();
  });
});



// export class ChangecolorDirective implements AfterViewInit {

//   constructor(private elref:ElementRef) { }
//   ngAfterViewInit()
//   {
//     this.elref.nativeElement.style.color='red';
//   }

//   change(changecolor:string )
//   {
//     this.elref.nativeElement.style.color=changecolor;
//   }

// }