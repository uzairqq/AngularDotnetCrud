import { EmployeeModel } from 'src/app/models/employee.model';
import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  constructor(private employeeService: EmployeeService) {}

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
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
