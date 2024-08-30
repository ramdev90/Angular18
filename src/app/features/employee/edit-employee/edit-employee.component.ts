import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css',
})
export class EditEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  editEmployeeId: string = '';

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute, 
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getQueryParams();
  }

  private getQueryParams() {
    this.activatedRoute.queryParams.subscribe((q) => {
      if (q['id']) {
        this.editEmployeeId = q['id'];
        this.employeeService.getEmployee(q['id']).subscribe((res) => {
          this.employeeForm.patchValue(res);
          this.cd.detectChanges()
        });
      }
    });
  }

  private initForm() {
    this.employeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      agree: new FormControl(false, { nonNullable: true }),
    });
  }

  onSubmit(): void {
    if (!this.employeeForm.valid) {
      alert('invalid form');
      return;
    }

    if (this.editEmployeeId) {
      this.employeeService
        .putEmployees(this.editEmployeeId, this.employeeForm.value)
        .subscribe((res) => {
          this.employeeForm.reset();
        });
    } else {
      this.employeeService
        .postEmployees(this.employeeForm.value)
        .subscribe((res) => {
          this.employeeForm.reset();
        });
    }
  }

  onReset() {
    this.employeeForm.reset();
  }
}
