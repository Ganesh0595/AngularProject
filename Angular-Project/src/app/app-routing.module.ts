import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ChildComponent } from './child/child.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { LogInComponent } from './log-in/log-in.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'reactiveForm',component:ReactiveFormComponent},
  {path:'login', component:LogInComponent},
  {path:'addUser', component:AddUserComponent},
  {path:'table', component:DynamicTableComponent},
  {path:'UserList', component:UserListComponent},
  {path:'Child', component:ChildComponent},
  {path:'Parent', component:ParentComponent},
  {
    path:'AdminLoad',
    loadChildren : ()=> import('../app/admin/admin.module').then(m => m.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
