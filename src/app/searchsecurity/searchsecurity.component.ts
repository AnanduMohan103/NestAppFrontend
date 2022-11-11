import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchsecurity',
  templateUrl: './searchsecurity.component.html',
  styleUrls: ['./searchsecurity.component.css']
})
export class SearchsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  sCode=""

  readValues=()=>{
    let data={
      "sCode":this.sCode
    }
    console.log(data)
    this.myapi.searchSecurity(data).subscribe(
      (resp)=>{
        this.dataSec=resp
      }
    )
  }
  editSec=()=>{
    this.myapi.editSecurity(this.dataSec[0]).subscribe(
      (res)=>{
        this.dataSec=res
      }
    )
  }
  dataSec:any=[]
  ngOnInit(): void {
  }

}
