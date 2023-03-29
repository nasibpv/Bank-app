import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// overloading header as globel

const option={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  currentuser: any
  currentAcno: any
  userdetails: any = {}
  constructor(private http:HttpClient) {
    // this.getData()
    
  }

  // userdetails: any = {
  //   1000: { acno: 1000, username: "anu", password: "abc123", balance: 0, transaction: [] },
  //   1001: { acno: 1001, username: "zayn", password: "abc123", balance: 0, transaction: [] },
  //   1002: { acno: 1002, username: "akil", password: "abc123", balance: 0, transaction: [] },
  //   1003: { acno: 1003, username: "nail", password: "abc123", balance: 0, transaction: [] }
  // }

  saveData() {
    if (this.userdetails) {
      localStorage.setItem('database', JSON.stringify(this.userdetails))
      console.log(this.userdetails);

    }
    if (this.currentuser) {
      localStorage.setItem('currentuser', this.currentuser)
    }
    if (this.currentAcno) {
      localStorage.setItem('currentAcno', JSON.stringify(this.currentAcno))
    }
  }

  // getData(){
  //   if(localStorage.getItem('database')){
  //     this.userdetails=JSON.parse(localStorage.getItem('database') || "")
  //   }
  //   if(localStorage.getItem('currentuser')){
  //     this.currentuser=localStorage.getItem('currentuser')
  //   }
  //   if(localStorage.getItem('currentAcno')){
  //     this.currentAcno=JSON.parse(localStorage.getItem('currentAcno') ||'')
  //   }
  // }
  gettoken(){
    // access token
  const token=JSON.parse(localStorage.getItem("token")||"")

  // generate headers
let headers=new HttpHeaders()

if(token){
  // append token in header
  option.headers=headers.append("access_token",token)

}
return option
  }

  register(uname: any, acno:any, psw: any) {

// create body data
 const data={uname,acno,psw}
 return this.http.post("http://localhost:3000/register",data)

    // if (acno in this.userdetails) {
    //   return false
    // }
    // else {
    //   this.userdetails[acno] = { acno, username: uname, password: psw, balance: 0, transaction: [] }
    //   console.log(this.userdetails);
    //   this.saveData()
    //   return true
    
  }

  //
  // 
  login(acno: any, psw: any) {

  const data1={acno,psw}
  return this.http.post("http://localhost:3000/login",data1)

  //  ! local storage use
       // var userdetails1 = this.userdetails
    // if (acnum in userdetails1) {
    //   if (psw == userdetails1[acnum]["password"]) {
    //     this.currentuser = this.userdetails[acnum]['username']

    //     this.currentAcno = acnum
    //     this.saveData()
    //     return true
    //   }
    //   else {
    //     return false
    //   }
    // }
    // else {
    //   return false
    // }
  }
  //
  deposit(acno: any, psw: any, amont: any) {
    // const Http=new HttpHeaders({"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50QWNubyI6MTAwMSwiaWF0IjoxNjc3NTU4NTAwfQ.-iMtLzuZlwGYrs9_JYtbjq7Qc6mWmOhMB8wFPAPcWoM"})
    // var amont = parseInt(amt)

const data={acno,psw,amont}
    return this.http.post('http://localhost:3000/deposit',data,this.gettoken())

    // let userdetails1 = this.userdetails
    // // convert string amount to number

    // var amont = parseInt(amt)
    // if (acno in userdetails1) {
    //   if (psw == userdetails1[acno]["password"]) {

    //     // update balance
    //     userdetails1[acno]["balance"] += amont

    //     // transaction data store
    //     userdetails1[acno]["transaction"].push({ Type: "CREDIT", Amount: amont })

    //     // return current balance

    //     this.saveData()
    //     return userdetails1[acno]["balance"]
    //   }
    //   else {
    //     return false
    //   }
    // }
    // else {
    //   return false
    // }

  }
  withdraw(acno: any, passwd: any, amont: any) {

    var amount=parseInt(amont)
    const data= {acno,passwd,amont:amount}
return this.http.post('http://localhost:3000/withdraw',data,this.gettoken())

  //   let userdetails1 = this.userdetails
  //   var amount = parseInt(amont)
  //   if (acno in userdetails1) {
  //     if (passwd == userdetails1[acno]["password"]) {
  //       if (amount <= userdetails1[acno]["balance"]) {
  //         // update balance
  //         userdetails1[acno]['balance'] -= amount

  //         userdetails1[acno]["transaction"].push({ Type: "DEBIT", Amount: amount })
  //         // console.log(userdetails1);

  //         this.saveData()

  //         return userdetails1[acno]['balance']
  //       }
  //       else {
  //         alert('insufficient balance')
  //         return false
  //       }
  //     }
  //     else {
  //       alert('incurrecct password')
  //       return false
  //     }
  //   }
  //   else {
  //     return false
  //   }
  }
  getTransaction(acno: any) {
    // const Http=new HttpHeaders({"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50QWNubyI6MTAwMSwiaWF0IjoxNjc3NTU4NTAwfQ.-iMtLzuZlwGYrs9_JYtbjq7Qc6mWmOhMB8wFPAPcWoM"})

    // return this.userdetails[acno]["transaction"]
    // const acno1=localStorage.getItem("currentAcno")
    const data={acno}
    return this.http.post('http://localhost:3000/Transaction',data,this.gettoken())
  }


deleteAcc(acno:any){
return this.http.delete('http://localhost:3000/delete/'+acno,this.gettoken())
}

}