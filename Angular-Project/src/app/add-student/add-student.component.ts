import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  stdName: any = "Ganesh" ;
  stdAge: any = 25;
  stdContact: any = 9922841956;
  studentList: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  addStudentInfo() {
    console.log("Add Entry Called");
    
    if (this.stdName == '' || this.stdName == undefined || this.stdAge == '' || this.stdAge == undefined || this.stdContact == '' || this.stdContact == undefined) {
      alert("Please Enter All The Details To Proceed");
    } else {
      // console.log("Name: " + this.stdName + " Age " + this.stdAge + " Contact " + this.stdContact);

      let studentInfo = {
        "Name": this.stdName,
        "age": this.stdAge,
        "contact": this.stdContact
      }
      console.log(studentInfo);
      this.studentList.push(studentInfo);
      alert("Student info Added Successfully")

    }
  }
  clearEntery() {
    this.stdName = '';
    this.stdAge = '';
    this.stdContact = '';
  }
  deleteEntery(index: any){
    console.log("Delete Entry Called "+ index);
    this.studentList.pop(index,1)
  }


}
