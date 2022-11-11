import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallleave',
  templateUrl: './viewallleave.component.html',
  styleUrls: ['./viewallleave.component.css']
})
export class ViewallleaveComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.view()
   }
   status=""



  view=()=>{
    this.myapi.viewLeave().subscribe(
      (resp)=>{
        this.leaveData=resp
      }
    )
  }
  updateStatus=(id:any)=>{
    let data={
      "id":id,
      "status":this.status
    }
    console.log(data)
    this.myapi.updateLeave(data).subscribe(  
    )
    alert("Updated Succesfully")
    this.view()
  }
  leaveData:any=[]

  ngOnInit(): void {
  }

}
