import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {
  employees: Employee[];
  searchText = '';

  constructor(private localStorageService: LocalStorageService, private router: Router) {
    this.resetEmployees();
  }

  resetEmployees() {
    this.employees = this.localStorageService.getEmployees();
  }

  onAddUser() {
    this.router.navigate(['/add-user']);
  }

  onEditEmployee(employeeId: number) {
    this.router.navigate([`${employeeId}/edit-user`])
  }

  onDeleteEmployee(employeeId: number) {
    this.localStorageService.deleteEmployee(employeeId);
    this.resetEmployees();
  }

  onViewUser(employeeId: number) {
    this.router.navigate([`${employeeId}/view-user`])
  }

  search() {
    this.resetEmployees()
    if(!this.searchText) return ;
    this.employees = this.employees.filter(emp => emp.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}
