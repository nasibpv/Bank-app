import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser: any
  currentAcno: any
  userdetails: any = {}
  constructor() {
    this.getData()
    
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

  getData(){
    if(localStorage.getItem('database')){
      this.userdetails=JSON.parse(localStorage.getItem('database') || "")
    }
    if(localStorage.getItem('currentuser')){
      this.currentuser=localStorage.getItem('currentuser')
    }
    if(localStorage.getItem('currentAcno')){
      this.currentAcno=JSON.parse(localStorage.getItem('currentAcno') ||'')
    }
  }

  register(uname: any, acno:any, psw: any) {
    if (acno in this.userdetails) {
      

      return false
    }
    else {
      this.userdetails[acno] = { acno, username: uname, password: psw, balance: 0, transaction: [] }
      console.log(this.userdetails);

      this.saveData()

      return true
    }
  }

  // 
  // 
  login(acnum: any, psw: any) {

    var userdetails1 = this.userdetails

    if (acnum in userdetails1) {
      if (psw == userdetails1[acnum]["password"]) {
        this.currentuser = this.userdetails[acnum]['username']

        this.currentAcno = acnum
        this.saveData()
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }
  //
  deposit(acno: any, psw: any, amt: any) {
    let userdetails1 = this.userdetails
    // convert string amount to number

    var amont = parseInt(amt)
    if (acno in userdetails1) {
      if (psw == userdetails1[acno]["password"]) {

        // update balance
        userdetails1[acno]["balance"] += amont

        // transaction data store
        userdetails1[acno]["transaction"].push({ Type: "CREDIT", Amount: amont })

        // return current balance

        this.saveData()
        return userdetails1[acno]["balance"]
      }
      else {
        return false
      }
    }
    else {
      return false
    }

  }
  withdraw(acno: any, passwd: any, amont: any) {
    let userdetails1 = this.userdetails
    var amount = parseInt(amont)
    if (acno in userdetails1) {
      if (passwd == userdetails1[acno]["password"]) {
        if (amount <= userdetails1[acno]["balance"]) {
          // update balance
          userdetails1[acno]['balance'] -= amount

          userdetails1[acno]["transaction"].push({ Type: "DEBIT", Amount: amount })
          // console.log(userdetails1);

          this.saveData()

          return userdetails1[acno]['balance']
        }
        else {
          alert('insufficient balance')
          return false
        }
      }
      else {
        alert('incurrecct password')
        return false
      }
    }
    else {
      return false
    }
  }
  getTransaction(acno: any) {
    return this.userdetails[acno]["transaction"]
  }

}
