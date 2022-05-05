import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'reactiveForm',component:ReactiveFormComponent},
  {path:'login', component:LogInComponent},
  {path:'addUser', component:AddUserComponent},
  {path:'table', component:DynamicTableComponent},
  {path:'UserList', component:UserListComponent},
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
