import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getEmployees(): Employee[] {
    return JSON.parse(localStorage.getItem('Employees')) || [];
  }

  setEmployees(employees: Employee[]) {
    localStorage.setItem('Employees', JSON.stringify(employees))
  }

  addEmployees(employee: Employee) {
    const employees = this.getEmployees();
    employees.push(employee);
    this.setEmployees(employees);
  }

  getEmployeeById(employeeId: number) {
    const employees = this.getEmployees();
    return employees.find(emp => emp.employeeId == employeeId);
  }

  updateEmpoyee(employeeId: number, employee: Employee) {
    const employees = this.getEmployees();
    const index = employees.findIndex(emp => emp.employeeId == employeeId);
    employees[index] = employee;
    this.setEmployees(employees);
  }

  deleteEmployee(employeeId: number) {
    const employees = this.getEmployees();
    const newEmployees = employees.filter(emp => emp.employeeId != employeeId);
    this.setEmployees(newEmployees);
  }

  getNextId() {
    const employees: Employee[] = this.getEmployees();
    return employees?.length ? employees.length + 1 : 1;
  }
}
