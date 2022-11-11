import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewsecurity',
  templateUrl: './viewsecurity.component.html',
  styleUrls: ['./viewsecurity.component.css']
})
export class ViewsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  
fetchData=()=>{
  this.myapi.viewSecurity().subscribe(
    (data)=>{
      this.secData=data
    }
  )
  
}
deleteSec=(sCode:any)=>{
  let data={
    "sCode":sCode
  }
  this.myapi.deleteSecurity(data).subscribe(
    (resp)=>{
      alert("Deleted")
    }
  )
  this.fetchData()
}
  secData:any=[]
  ngOnInit(): void {
  }

}
