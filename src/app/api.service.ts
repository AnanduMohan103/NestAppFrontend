import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/addemp",data)
  }
  viewEmp=()=>{
    return this.http.get("http://localhost:8080/viewemp")
  }
  deleEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteemp",data)
  }
  searchEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/searchemp",data)
  } 
  editEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/updateemp",data)
  } 
  addSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/addsecurity",data)
  }
  viewSecurity=()=>{
    return this.http.get("http://localhost:8080/viewsecurity")
  }
  deleteSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/deletesecurity",data)
  }
  searchSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/searchsecurity",data)
  }
  editSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/updatesecurity",data)
  }
  loginEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/loginemp",data)
  }
  applyLeave=(data:any)=>{
    return this.http.post("http://localhost:8080/addleave",data)
  }
  viewLeave=()=>{
    return this.http.get("http://localhost:8080/viewallleaves")
  }
  updateLeave=(data:any)=>{
    return this.http.post("http://localhost:8080/updatestatus",data)
  }
  viewStatus=(data:any)=>{
    return this.http.post("http://localhost:8080/viewleavesbyempid",data)
  }
  loginSec=(data:any)=>{
    return this.http.post("http://localhost:8080/loginsecurity",data)
  }
  addcheckIn=(data:any)=>{
    return this.http.post("http://localhost:8080/addlog",data)
  }
  }

