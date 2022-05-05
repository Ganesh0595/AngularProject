import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm!: FormGroup;
  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
    console.log("Reactive Component Load");
    
    this.createform();
  }

  createform(){
    this.reactiveForm = this.builder.group({
      username : ['',Validators.required],
      education : ['',Validators.required],
      year : ['',[Validators.required,Validators.minLength(4)]],
      dob : ['', Validators.required],
      contact : ['', [Validators.required,Validators.maxLength(10)]],
      email : ['', Validators.required],
     Gender : ['', Validators.required]
    })
  }
}
