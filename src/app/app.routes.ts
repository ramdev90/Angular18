import { Routes } from '@angular/router';
import { EditEmployeeComponent } from './features/employee/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './features/employee/employee-list/employee-list.component';

export const routes: Routes = [
  { path: 'edit-employee', component: EditEmployeeComponent },
  { path: 'create-employee', component: EditEmployeeComponent },
  { path: 'employees', component: EmployeeListComponent },
];
