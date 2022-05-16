import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { InteractionCComponent } from './interaction-c/interaction-c.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { LogInComponent } from './log-in/log-in.component';
import { CivilService } from './civil.service';
import { NumberPipe } from './number.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { PracticeComponent } from './practice/practice.component';
import { HttpClientModule } from '@angular/common/http';
import { LearnvernComponent } from './learnvern/learnvern.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InteractionCComponent,
    AddStudentComponent,
    DynamicTableComponent,
    LogInComponent,
    NumberPipe,
    TemplateDrivenFormComponent,
    PracticeComponent,
    LearnvernComponent,
    ReactiveFormComponent,
    AddUserComponent,
    UserListComponent,
    ParentComponent,
    ChildComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CivilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
