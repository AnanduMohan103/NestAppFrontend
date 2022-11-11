import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.css']
})
export class AddsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  sCode=""
  sName=""
  sPhone=""
  
  sUsername=""
  sPassword=""
  readValue=()=>{
    let data={
      "sCode":this.sCode,
      "sName":this.sName,
      "sPhone":this.sPhone,
      
      "sUsername":this.sUsername,
      "sPassword":this.sPassword
    }
    console.log(data)
    this.myapi.addSecurity(data).subscribe(
      (resp)=>{
        console.log("success")
      }
    )
    alert("Successfully-Added")
    this.sCode=""
    this.sName=""
    this.sPhone=""
   
    this.sUsername=""
    this.sPassword=""
  }


  ngOnInit(): void {
  }

}
