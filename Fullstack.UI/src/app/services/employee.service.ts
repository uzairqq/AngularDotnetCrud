import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { EmployeeModel } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.baseApiUrl + '/api/employees');
  }

  addEmployee(addEmployeeRequest: EmployeeModel): Observable<EmployeeModel> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<EmployeeModel>(
      this.baseApiUrl + '/api/employees',
      addEmployeeRequest
    );
  }
}
