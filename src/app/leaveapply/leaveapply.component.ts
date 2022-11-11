import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leaveapply',
  templateUrl: './leaveapply.component.html',
  styleUrls: ['./leaveapply.component.css']
})
export class LeaveapplyComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  type=""
  discrip=""
  leaveDate=""
  empcode=localStorage.getItem("empcode")

  readValues=()=>{
    let data={
      "type":this.type,
      "discrip":this.discrip,
      "leaveDate":this.leaveDate,
      "empcode":this.empcode
    }
    console.log(data)
    this.myapi.applyLeave(data).subscribe(
      (resp)=>{
        alert("Data Added")
      }
    )
  }

  ngOnInit(): void {
  }

}
