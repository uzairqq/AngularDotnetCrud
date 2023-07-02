import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employeesList: EmployeeModel[] = [];

  constructor() {}

  ngOnInit(): void {}
}
