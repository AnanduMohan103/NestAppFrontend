import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewEmp().subscribe(
      (data)=>{
        this.empData=data
      }
    )
  }
  deleteEmp=(empcode:any)=>{
   let data={
    "empcode":empcode
   }
   this.myapi.deleEmp(data).subscribe(
    (resp)=>{
      alert("Deleted")
      
    }
    
   )
   this.fetchData()
   
  }

empData:any=[]
  ngOnInit(): void {
  }

}
