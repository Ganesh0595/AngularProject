import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  userName:any;
  passWord:any;
  stdname:any='Ganesh';
  stdage:any=25;
  stdcontact:any=992284156;
  Details:any=[];
  
  submitData(){
    // console.log("Submit Button Called");
    if(this.userName == '' || this.userName == undefined){
      alert("Enter UserName");
    }else if(this.passWord == '' || this.passWord == undefined){
      alert("Enter PassWord")
    }else{
      console.log("User Name:- " + this.userName + " PassWord:- " + this.passWord); 
      // alert("Data Added Successfully");
    }
    
  }
  
  blurF(){
  console.log("Focus Event Called");
  
  }
  
  inputEvent(data:any){
  
    console.log("Input Event Called  " + data);
    
  }
  
  
  addData(){
    console.log("add Button Called");
    if(this.stdname == '' || this.stdname == undefined || this.stdage == '' || this.stdage == undefined || this.stdcontact == '' || this.stdcontact == undefined){
      alert("Enter The complete Details To Proceed")
    }else{
      let student ={
        "Name" : this.stdname,
        "Age"  : this.stdage,
        "Contact":this.stdcontact
      }
    console.log(student);
    this.Details.push(student)
    
    }
  }
  
  clearField(){
    this.stdname='';
    this.stdage='';
    this.stdcontact='';
  }
  
  deleteData(index:any){
    console.log("Delete Data Called" + index);
    this.Details.splice(index,1)
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
