import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acno=""
  uname=""
  pswd=""
  //form group

  registerForm=this.formBuilder.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:[''],
    pswd:['']
  })

  constructor(private formBuilder:FormBuilder, private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
 var acno=this.registerForm.value.acno
 var uname=this.registerForm.value.uname
 var pswd=this.registerForm.value.pswd
 if(this.registerForm.valid){
  const result =this.dataservice.register(uname,acno,pswd)
  if(result){
   alert("registration successful")
 
   this.router.navigateByUrl('')
  }
  else{
   alert("user already exist")
  }
   }
   else{
    alert("invalid form")
   }
 
 }


}
