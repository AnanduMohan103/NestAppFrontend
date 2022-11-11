import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})
export class LeavestatusComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.readValues()
  }
  
  empcode=localStorage.getItem("id")
  status:boolean=false
  readValues=()=>{
    let data={
      "empcode":localStorage.getItem("empcode"),
    }
    console.log(data)
    this.myapi.viewStatus(data).subscribe(
      (res)=>{
        this.leaveData=res
        this.status=true
      }
    )
  }
  leaveData:any=[]
  ngOnInit(): void {
      
  }
}
