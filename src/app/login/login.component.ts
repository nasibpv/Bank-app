import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // acno:any
  acno=''
  password:any

  data="Yur perfect banking partner"

  inputplaceholder="Accound number"

  userdetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:2000,username:"zayn",password:"zayn123",balance:0},
    1002:{acno:3000,username:"akil",password:"akil00",balance:0},
    1003:{acno:4000,username:"nail",password:"nail00",balance:0},
  }
  constructor(){}

  ngOnInit(): void {
    
  }

  login1(){
    alert('login click')
  }

  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
    
  }

  passChange(event:any){
    this.password=event.target.value
    console.log(this.password);
    
    
  }
}
