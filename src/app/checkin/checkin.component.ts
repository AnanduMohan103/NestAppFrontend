import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  loginsecId=localStorage.getItem("id")
  empcode=""
  readValue=()=>{
    let data={
      "loginsecId":localStorage.getItem("id"),
      "empcode":this.empcode
    }
    this.myapi.addcheckIn(data).subscribe(
      (resp)=>{

      }
     
    )
    alert("checkin")
  }

  ngOnInit(): void {
  }

}
