import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {

  constructor(private myRouter:Router,private myapi:ApiService) { }
  username=""
  password=""
  readValues=()=>{
    let data={
      "username":this.username,
      "password":this.password
    }
   
     this.myapi.loginEmp(data).subscribe(
      (response:any)=>{
        if (response.length>0) {
         localStorage.setItem("empcode",response[0].empcode)
         console.log(response[0].empcode)
          this.myRouter.navigate(["/empdash"])
        } else {
          alert ("invalid")
          
          
        }
      }
     )
   
  }

  ngOnInit(): void {
  }

}
