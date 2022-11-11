import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { SecloginComponent } from './seclogin/seclogin.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { FormsModule } from '@angular/forms';
import { AdmindashComponent } from './admindash/admindash.component';
import { AddemployComponent } from './addemploy/addemploy.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewempComponent } from './viewemp/viewemp.component';
import { SearchempComponent } from './searchemp/searchemp.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { ViewsecurityComponent } from './viewsecurity/viewsecurity.component';
import { SearchsecurityComponent } from './searchsecurity/searchsecurity.component';
import { EmpdashComponent } from './empdash/empdash.component';
import { EmpnavbarComponent } from './empnavbar/empnavbar.component';
import { LeaveapplyComponent } from './leaveapply/leaveapply.component';
import { ViewallleaveComponent } from './viewallleave/viewallleave.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';

const appRoutes:Routes=[
  {
    path:"",component:NavbarComponent
  },
  {
    path:"admin",component:AdminloginComponent
  },
  {
    path:"emp",component:EmploginComponent
  },
  {
    path:"sec",component:SecloginComponent
  },
  {
    path:"admindash",component:AdmindashComponent
  },
  {
    path:"addemp",component:AddemployComponent
  },
  {
    path:"viewemp",component:ViewempComponent
  },
  {
    path:"searchemp",component:SearchempComponent
  },
  {
    path:"addsec",component:AddsecurityComponent
  },
  {
    path:"viewsec",component:ViewsecurityComponent
  },
  {
    path:"searchsec",component:SearchsecurityComponent
  },
  {
    path:"emplogin",component:EmploginComponent
  },
  {
    path:"empdash",component:EmpdashComponent
  },
  {
    path:"empapply",component:LeaveapplyComponent
  },
  {
    path:"viewleaves",component:ViewallleaveComponent
  },
  {
    path:"empstatus",component:LeavestatusComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminloginComponent,
    EmploginComponent,
    SecloginComponent,
    AdminnavbarComponent,
    AdmindashComponent,
    AddemployComponent,
    ViewempComponent,
    SearchempComponent,
    AddsecurityComponent,
    ViewsecurityComponent,
    SearchsecurityComponent,
    EmpdashComponent,
    EmpnavbarComponent,
    LeaveapplyComponent,
    ViewallleaveComponent,
    LeavestatusComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
