import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  amount=""
  acno=""
  pswd=""
  depositform=this.formBuilder.group({
    amount:['',[Validators.required,Validators.pattern('0-9')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  


  })
  withdrawform=this.formBuilder.group({
    amount:['',[Validators.required,Validators.pattern('0-9')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  

  constructor( private formBuilder:FormBuilder ){}

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.depositform.value.acno
    var amount=this.depositform.value.acno
    var pswd=this.depositform.value.acno
    if(this.depositform.valid){

    }
    else{
      alert("invalid form")
    }
  }
  withdraw(){
    var acno=this.withdrawform.value.acno
    var amount=this.withdrawform.value.acno
    var pswd=this.withdrawform.value.acno
    if(this.withdrawform.valid){

    }
    else{
      alert("invalid form")
    }
  }

  }


