import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

header="welcome to our bank"
accplaceholder="account number please"
acno=""
pswd=""

  //database

  database:any={1000:{acno:1000,username:'neer',password:1000,balance:5000},
  1001:{acno:1001,username:'neera',password:1001,balance:6000},
  1002:{acno:1002,username:'neerajana',password:1002,balance:50000}
}

  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
  acnochange(event:any){
    this.acno=event.target.value
    // console.log(this.acno);
    

  }
  pwdchange(event:any){
    this.pswd=event.target.value
    // console.log(this.pswd);
    

  }


login(){
 var acno=this.acno
 console.log(acno);
 var pswd=this.pswd
 console.log(pswd);
 const result=this.dataService.login(acno,pswd)
 if(result){
  alert("log in successfull")
  this.router.navigateByUrl('Home')
 }
 
 
 }
// login(a:any,p:any){
//   var acno=a.value
//   console.log(acno);
//   var pswd=p.value
//   console.log(pswd);
//   let userdetails=this.database
//   if(acno in userdetails){
//    if(pswd==userdetails[acno]['password']){
//      alert("login successfull")
 
//    }
//    else{
//      alert("incorrect password")
//    }
 
//   }
//   else{
//    alert("user does not exist")
//   }
  
//   }
 }
 
 //(change)="pwdchange($event)"

