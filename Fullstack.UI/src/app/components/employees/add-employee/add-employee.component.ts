import { EmployeeModel } from 'src/app/models/employee.model';
import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  addEmployeeRequest: EmployeeModel = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
    salary: 0,
    department: '',
  };

  addEmployee() {
    console.log(this.addEmployeeRequest);

    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) => {
        console.log('ABC:-', employee);
        this.router.navigate(['employees']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
