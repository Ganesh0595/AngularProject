import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule  } from '@angular/forms';
import { InteractionCComponent } from './interaction-c/interaction-c.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { LogInComponent } from './log-in/log-in.component';
import { CivilService } from './civil.service';
import { NumberPipe } from './number.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { PracticeComponent } from './practice/practice.component';
import { HttpClientModule } from '@angular/common/http'

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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CivilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
