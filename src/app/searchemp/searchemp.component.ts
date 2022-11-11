import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemp',
  templateUrl: './searchemp.component.html',
  styleUrls: ['./searchemp.component.css']
})
export class SearchempComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  empcode=""

  readValues=()=>{
    let data={
      "empcode":this.empcode
    }
    console.log(data)
    this.myapi.searchEmp(data).subscribe(
      (resp)=>{
        this.dataEmp=resp
      }
    )
  }
  editEmp=()=>{
    this.myapi.editEmp(this.dataEmp[0]).subscribe(
      (res)=>{
        this.dataEmp=res
      }
    )
  }

  dataEmp:any=[]
  ngOnInit(): void {
  }

}
