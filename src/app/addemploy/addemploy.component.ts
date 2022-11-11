import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemploy',
  templateUrl: './addemploy.component.html',
  styleUrls: ['./addemploy.component.css']
})
export class AddemployComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  empcode=""
  name=""
  address=""
  email=""
  dob=""
  phone=""
  username=""
  password=""
  jod=""

  readValue=()=>{
    let data={
      "empcode":this.empcode,
      "name":this.name,
      "address":this.address,
      "email":this.email,
      "dob":this.dob,
      "phone":this.phone,
      "username":this.username,
      "password":this.password,
      "jod":this.jod
    }
    console.log(data)
    this.myapi.addEmp(data).subscribe(
      (res)=>{
        console.log("test")
      }
    )
    alert("success")
    this.address=""
    this.dob=""
    this.email=""
    this.empcode=""
    this.jod=""
    this.username=""
    this.password=""
    this.phone=""
    this.name=""

  }

  ngOnInit(): void {
  }

}
