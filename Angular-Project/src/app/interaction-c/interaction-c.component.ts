import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interaction-c',
  templateUrl: './interaction-c.component.html',
  styleUrls: ['./interaction-c.component.css']
})
export class InteractionCComponent implements OnInit {

//*********************Component Interaction*********************
@Input() public parentData: any;

@Output() public childEvent = new EventEmitter();

fireEvent(){
  this.childEvent.emit("in my life");
}

  constructor() { }

  ngOnInit(): void {
  }

}
