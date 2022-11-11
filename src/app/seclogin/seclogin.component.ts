import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-seclogin',
  templateUrl: './seclogin.component.html',
  styleUrls: ['./seclogin.component.css']
})
export class SecloginComponent implements OnInit {

  constructor(private myRouter:Router,private myapi:ApiService) { }
  sUsername=""
  sPassword=""
  readValues=()=>{
    let data={
      "sUsername":this.sUsername,
      "sPassword":this.sPassword
    }
      console.log(data)
      this.myapi.loginSec(data).subscribe(
        (response:any)=>{
          if (response.length>0) {
            localStorage.setItem("name",response[0].sName),
            localStorage.setItem("id",response[0].id),
            localStorage.setItem("sCode",response[0].sCode)
            this.myRouter.navigate(["/secdash"])
            
          } else {
            alert("invalid")
            
          }
        }
      )
  }

  ngOnInit(): void {
  }

}
