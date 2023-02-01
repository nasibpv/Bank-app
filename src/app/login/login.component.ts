import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // acno=''
  acnumber:any
  password:any

  // data="Your perfect banking partner"

  // inputplaceholder="Accound number"

  userdetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"zayn",password:"abc123",balance:0},
    1002:{acno:1002,username:"akil",password:"abc123",balance:0},
    1003:{acno:1003,username:"nail",password:"abc123",balance:0},
  }
  constructor(){}

  ngOnInit(): void {
    
  }

  // login1(){
  //   var acnum=this.acno
  //   var paswd=this.password
  //   var userdetails1=this.userdetails

  //   if(acnum in userdetails1){
  //     if(paswd==userdetails1[acnum]["password"]){
  //       alert("login success")
  //     }
  //     else{
  //       alert("incurrect password")
  //     }
  //   }
  //   else{
  //     alert("acno incurrect or not registered")
  //   }
  // }
  // --------------------------------

  // login1(a:any,b:any){
  //   var acnum=a.value
  //   var paswd=b.value
  //   var userdetails1=this.userdetails

  //   if(acnum in userdetails1){
  //     if(paswd==userdetails1[acnum]["password"]){
  //       alert("login success")
  //     }
  //     else{
  //       alert("incurrect password")
  //     }
  //   }
  //   else{
  //     alert("acno incurrect or not registered")
  //   }
  // }

  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   // console.log(this.acno);
  // }
// ------------------------------------------


login1(){
    var acnum=this.acnumber
    console.log(acnum);
    
    var paswd=this.password
    var userdetails1=this.userdetails

    if(acnum in userdetails1){
      if(paswd==userdetails1[acnum]["password"]){
        alert("login success")
      }
      else{
        alert("incurrect password")
      }
    }
    else{
      alert("acno incurrect or not registered")
    }
  }
  // --------------------------------

  // passChange(event:any){
  //   this.password=event.target.value
  //   // console.log(this.password);
  // }
}
