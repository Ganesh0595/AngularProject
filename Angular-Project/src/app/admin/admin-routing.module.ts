import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from '../child/child.component';
import { DynamicTableComponent } from '../dynamic-table/dynamic-table.component';
import { ParentComponent } from '../parent/parent.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  {path : 'userAdd',component : UserAddComponent},
  {path : 'Reactive',component :ReactiveFormComponent},
  {path : 'table',component :DynamicTableComponent},
  {path : 'parent',component :ParentComponent},
  {path : 'child',component :ChildComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
