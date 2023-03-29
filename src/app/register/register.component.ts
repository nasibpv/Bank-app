import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // uname=''
  // acnum=''
  // psw=''
  

  // create reactive form of register form {dependany injection} (import module=[reactiveFormmodule],class=[FormBuilder],method=Group)
  // (+:mini1 & max:...  /   *:min:0 & max:...)
  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  // create reactive form of register form
  registerForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]

  })

  ngOnInit(): void { }


  register() {

    // var userdetails=this.ds.userdetails
    var acname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var password = this.registerForm.value.psw

    if (this.registerForm.valid) {
      this.ds.register(acname, acno, password).subscribe((result:any)=>{
        alert(result.message)
        this.router.navigateByUrl("")
      },
      result=>{
        alert(result.error.message)
        this.router.navigateByUrl("")
      }
      )
      // if (result) {
      //   alert('registered')
      //   this.router.navigateByUrl('')
      // }
      // else {
      //   alert('acno is already present')
      // }
    }
    else {
      alert('invalid form')
    }
  }
}
