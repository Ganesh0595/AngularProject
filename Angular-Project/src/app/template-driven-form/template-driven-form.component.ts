import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
fullname:any;
email:any;
  constructor() { }

  ngOnInit(): void {
  }

  loginModel ={
    "username":"Ganesh Shivaji Ambhore",
    "age":26
  }

  
Gender ={
  "gender1":"Male",
  "gender2":"Female",
}
onSubmit(formData:any){
  console.log("Function Called and Passed Data is : " +JSON.stringify(formData.value));
  
}

}
