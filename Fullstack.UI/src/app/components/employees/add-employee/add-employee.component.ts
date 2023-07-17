import { EmployeeModel } from 'src/app/models/employee.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
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
  }
}
