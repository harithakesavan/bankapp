import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //database

  database:any={1000:{acno:1000,username:'neer',password:1000,balance:5000},
  1001:{acno:1001,username:'neera',password:1001,balance:6000},
  1002:{acno:1002,username:'neerajana',password:1002,balance:50000}
}

  constructor() {
    this.getdetails()
   }
//save details
savedetails(){


  localStorage.setItem('database',JSON.stringify(this.database))
}
//getdetail
getdetails(){
  this.database=JSON.parse(localStorage.getItem('database')||'')
}


    //register
    register(username:any,acno:any,password:any){
      let database=this.database
      if(acno in database){
        return false
      }
      else{
        database[acno]={
          acno,username,password,balance:0
        }
        this.savedetails()
        return true
      }
    }
    login(acno:any,pswd:any){
      
      let userdetails=this.database
      if(acno in userdetails){
       if(pswd==userdetails[acno]['password']){
         return true
     
     
       }
       else{
         alert("incorrect password")
         return false
       }
     
      }
      else{
       alert("user does not exist")
       return false
      }
      
      }
  }

