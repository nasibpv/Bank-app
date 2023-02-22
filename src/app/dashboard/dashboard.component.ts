import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any
  acno:any
  datedetails:any
  // acno:any
  // psw:any
  // amt:any

  // acno1:any
  // psw1:any
  // amt1:any
  constructor(private ds:DataService,private fb:FormBuilder,private router:Router){
    this.user=this.ds.currentuser
    this.datedetails= new Date
  }
  ngOnInit(): void {
  if(!localStorage.getItem("currentuser")){
    alert('please login')
    this.router.navigateByUrl("")
  }
  }
  // model form 
  depositform=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],
    amt:['',[Validators.required,Validators.pattern('[0-9]+')]],
  })
  // model form
  withdrawform=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],
    amt1:['',[Validators.required,Validators.pattern('[0-9]+')]],
  })

  deposit(){
var acno=this.depositform.value.acno
var psw=this.depositform.value.psw
var amt=this.depositform.value.amt
if(this.depositform.valid){
const result=this.ds.deposit(acno,psw,amt)
    if(result){
      alert(`your ac has been creadited with amount ${amt},and the current balance is ${result}`)
      // console.log(result);
      
    }
    else{
      alert('incurrect acno or password')
    }
  }
  else{
    alert('invalid form')
  }
}

  withdraw(){
    var acno1=this.withdrawform.value.acno1
    var psw1=this.withdrawform.value.psw1
    var amt1=this.withdrawform.value.amt1
    if(this.withdrawform.valid){
   const result=this.ds.withdraw(acno1,psw1,amt1)
    if(result){
      alert(`your ac has been debit with amount ${amt1},and the current balance is ${result}`)
    }
    else{
      alert('incurrect acno or password')
    }
  }

  else{
    alert('invalidform')
  }
  }

  logout(){
    localStorage.removeItem("currentuser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl('')
  }

  deleteParent(){
     // get acno number and store
    this.acno=JSON.parse(localStorage.getItem("currentAcno") ||"")

  }
  cancel(){
    this.acno=''
  }
}




