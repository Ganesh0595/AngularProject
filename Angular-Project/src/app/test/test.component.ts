import { Component, OnInit } from '@angular/core';
import { CivilService } from '../civil.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  //*********************Interpolation Binding*********************
title:any;

OnClick(){
  this.title="Ganesh";
console.log(this.title);

}

//*********************Property Binding*********************
public myId = "testId";
public isDisabled =false;

//*********************Class Binding*********************
public name = 'color';
public hasError = false;
public isSpecial = true;
public messageClasses = {
  "color" : !this.hasError,
  "danger" : this.hasError,
  "style" : this.isSpecial
}

//*********************Style Binding*********************
public highlightColor = 'orange';
public titleStyle = {
  color : "Purple",
  fontStyle : "italic",
  textDecoration : "underline"
}

//*********************Event Binding*********************
public string ="";

onClick(event: any){
  console.log(event);
  this.string = event.type;
}

//*********************Template Reference Variables*********************
logMessage(value: any){
  console.log(value);
}
  
//*********************Two Way Binding*********************  
public name1="";

//*********************Structural Directives*********************
//*********************ngIf Directives*********************
pick:boolean=true;
// pick:boolean=false;

//*********************ngSwitch Directives*********************
public color ="orange";
// public color ="red";
// public color ="blue";

//*********************ngFor Directives*********************
public color1=['red','green','blue','pink','yellow'];

//*********************Pipes*********************
public key ="Ankush";
public num = 254654564645;
public message ="Hello Ganesh";
public person ={
  "firstName":"Ganesh",
  "lastName":"Ambhore"
}


public date =new Date();

//*********************Services*********************
public Employees =[
  {"id":1, "name0":"Ganesh", "age":26},
  {"id":2, "name0":"Nilesh", "age":27},
  {"id":3, "name0":"Tushar", "age":28},
  {"id":4, "name0":"Pramod", "age":24},
  {"id":5, "name0":"Vinod", "age":29}
];

person1:any=[];
  constructor(private _employeeService:CivilService ) { }

  ngOnInit(): void {
    this.person1 = this._employeeService.getEmployees();
    console.log("this is the data of person "+ this.person1);
    
  }

}
