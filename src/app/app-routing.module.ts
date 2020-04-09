import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EmploginComponent } from './company/emplogin/emplogin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';


const routes: Routes = [
  //all page link 
  // {
  //   path:'',redirectTo:'student',pathMatch:'full'
  // },
  // {
  //   path:'student',component:StudentComponent
  // },
  // {
  //   path:'emplogin',component:EmploginComponent
  // },
  // {
  //   path:'studentregistration',component:StudentregistrationComponent
  // },

  // {
  //   path:'**',component:PagenotfoundComponent
  // },



  //parent to child page show 
//   {
//     path:'student',
//     children:[
//       {
//         path:'',component:StudentComponent
//       },

//       {
//         path:'emplogin',component:EmploginComponent
//       },
//       {
//         path:'studentregistration',component:StudentregistrationComponent
//       },
//     ]

//   },
//   {
//     path:'**',component:PagenotfoundComponent
//   }

 ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
