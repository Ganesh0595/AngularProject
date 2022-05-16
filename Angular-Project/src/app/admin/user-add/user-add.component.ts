import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log("User Component Loaded");
    
  }
Onclick(){
  this.router.navigateByUrl('Reactive');
}
}
