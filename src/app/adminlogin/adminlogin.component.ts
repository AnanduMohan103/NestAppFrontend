import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private myRouter:Router) { }
  username=""
  password=""

  readValue=()=>{
    let data={
      "username":this.username,
      "password":this.password
    }
    if (this.username=="admin" && this.password=="admin") {
      this.myRouter.navigate(["/admindash"])
      
    } else {
      alert("Invalid Credentials")
      
    }
    console.log(data)
    alert("success")
  }

  ngOnInit(): void {
  }

}
