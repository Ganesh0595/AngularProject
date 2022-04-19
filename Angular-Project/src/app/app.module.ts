import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule  } from '@angular/forms';
import { InteractionCComponent } from './interaction-c/interaction-c.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { LogInComponent } from './log-in/log-in.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InteractionCComponent,
    AddStudentComponent,
    DynamicTableComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
