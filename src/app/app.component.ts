import { EmployeeService } from './services/employee.service';
import { Component } from '@angular/core';
import { Employee } from './interfaces/employee.interface';
import { OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().toPromise().then((employees: Employee[]) => {
      this.employees = employees
    }).catch((error:HttpErrorResponse) => {
        console.error(error.message);
    });
  }

}
