import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  employee: Employee;
  employeeId: number = 0;

  constructor(private localStorageService: LocalStorageService, private router: Router, private route: ActivatedRoute) {
    this.employee = {
      employeeId : this.localStorageService.getNextId(),
      name: '',
      address: '',
      mobile: null,
      salary: null
    }
  }
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.employeeId = param['employeeId'];
      if(this.employeeId) {
        this.employee = this.localStorageService.getEmployeeById(this.employeeId);
        return;
      }
    });
    
  }

  onSubmit() {
    this.employeeId ?
      this.localStorageService.updateEmpoyee(this.employeeId, this.employee) :
      this.localStorageService.addEmployees(this.employee);
    this.router.navigate(['/']);
  }

}
