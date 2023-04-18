import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  { path: '', component: EmployeeTableComponent},
  { path: 'add-user', component: AddEditUserComponent},
  { path: ':employeeId/edit-user', component: AddEditUserComponent},
  { path: ':employeeId/view-user', component: ViewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
