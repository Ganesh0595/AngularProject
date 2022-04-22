import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
fullName:any;
email:any;
  constructor() { }

  ngOnInit(): void {
  }

  loginForm={
    "fullName":"Ganesh Ambhore",
    "Age":26
  }

  onSubmit(formData:any){
    console.log("Function Called And Data Passed " + JSON.stringify(formData.value));
    
  }

}
