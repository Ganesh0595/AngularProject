import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CivilService } from './../civil.service'
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  friendDetails:any=[];
  constructor(private civil:CivilService,private router : Router) { 

    this.friendDetails=[
      {
        title:"Ganesh",
        Age:26,
        Contact:9922841956
      },
      {
        title:"Nilesh",
        Age:27,
        Contact:9011650445
      },
      {
        title:"Ankush",
        Age:25,
        Contact:9922822544
      },
      {
        title:"Tushar",
        Age:28,
        Contact:7542841956
      },
      {
        title:"Pramod",
        Age:24,
        Contact:7546524856
      }
    ]
  }
  titleArray:any=["Ganesh","Pramod","Nilesh","Ankush","Tushar","Vishal"]

  ngOnInit(): void {
    console.log("Log-In Component Load");
    
    console.log(this.civil.name);

  }
  AddToTable(){
    this.friendDetails.push(
      {
        title:"Pallavi",
        Age:21,
        Contact:9922841435
      }
    )
    }

    gotoReactive(){
      this.router.navigateByUrl('reactiveForm');
    }
}
