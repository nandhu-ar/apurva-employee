import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
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
}
