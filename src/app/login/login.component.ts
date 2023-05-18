import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // acno=''
  // acnumber:any  [[ngmodel]]
  // password:any

  // data="Your perfect banking partner"

  // inputplaceholder="Accound number"

 
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder){}

  ngOnInit(): void {  }



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
// dependancy injection FormBuilder

// model form create  (reactive form Module(app.module.ts))
loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],  //
  psw:['',[Validators.required,Validators.pattern('[a-z A-z 0-9]+')]]
  // validator is class, [] is rule
})

login(){
    var acnum=this.loginForm.value.acno   
    var paswd=this.loginForm.value.psw
    if(this.loginForm.valid){
      // loginForm is valid true
    this.ds.login(acnum,paswd).subscribe((result:any)=>{
      localStorage.setItem("currentUser",JSON.stringify(result.currentuser))
      localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno))
      localStorage.setItem("token",JSON.stringify(result.token))

      alert(result.message)
      this.router.navigateByUrl('dashboard')
    },
    result=>{
      console.log(result);
      
      alert(result.error.message)
    })
    
    
    // if(result){
    //  alert('login success')
    //  this.router.navigateByUrl('dashboard')     
    // }
    // else{
    //   // false
    //   alert('incurrect acno or password')
    // }
  }
  else{
    alert('invalid form')
  }
  //   var userdetails1=this.ds.userdetails

  //   if(acnum in userdetails1){
  //     if(paswd==userdetails1[acnum]["password"]){
  //       alert("login success")
  //       this.router.navigateByUrl('dashboard')
  //     }
  //     else{
  //       alert("incurrect password")
  //     }
  //   }
  //   else{
  //     alert("acno incurrect or not registered")
  //   }
  // }
  // // --------------------------------

  // passChange(event:any){
  //   this.password=event.target.value
  //   // console.log(this.password);
  // }
}
}
