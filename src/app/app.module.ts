import { BrowserModule } from '@angular/platform-browser';
import { NgModule, HostListener } from '@angular/core';
import {FormsModule} from '@angular/forms';//two way data binding 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import { from } from 'rxjs';
import { CompanyModule } from './company/company.module';
import { EmploginComponent } from './company/emplogin/emplogin.component';
import { MypipePipe } from './mypipe.pipe';
import { StudentComponent } from './student/student.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { CounterComponent } from './counter/counter.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { ChangecolorDirective } from './changecolor.directive';
import { ParentColorComponent } from './parent-color/parent-color.component';
import { ThemViewchildTempletComponent } from './them-viewchild-templet/them-viewchild-templet.component';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
                    AppComponent,
                    MypipePipe,
                    StudentComponent,
                    PagenotfoundComponent,
                    StudentregistrationComponent,
                    CounterComponent,
                    CounterParentComponent,
                    ChangecolorDirective,
                    ParentColorComponent,
                    ThemViewchildTempletComponent,
                   
                    
                ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,CompanyModule,HttpClientModule,
  ],

  providers: [MyserviceService],
  
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor()
  {
    console.log("this is module");
  }

  
}
