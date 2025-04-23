import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { DetailsEmployeComponent } from './details-employe/details-employe.component';

const routes: Routes = [
  { path: 'employees', component: ListEmployeeComponent },
  { path: 'create-employe', component: CreateEmployeComponent },
  { path: 'update-employe/:id', component: UpdateEmployeComponent },
  {path:'details-employe/:id', component : DetailsEmployeComponent},
  { path: '', redirectTo: 'employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
