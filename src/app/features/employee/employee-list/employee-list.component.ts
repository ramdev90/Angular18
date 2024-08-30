import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent implements OnInit {
  employees: any;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employees = res;
    });
  }

  onDelete(id: string) {
    this.employeeService.deleteEmployees(id).subscribe((res) => {
      this.getEmployees();
    });
  }

  onEdit(id: string) {
    this.router.navigate(['/edit-employee'], { queryParams: { id: id } });
  }
}
