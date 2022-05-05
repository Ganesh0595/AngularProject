import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserAddComponent } from './user-add/user-add.component';


@NgModule({
  declarations: [
    UserAddComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
console.log('Admin Module Loaded');

