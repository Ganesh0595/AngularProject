import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  dataFromParentToChild ="I'm Come From The Parent To see The Child Component";

  ngOnInit(): void {
  }

}
