import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'list-employee',
  standalone: false,
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent implements OnInit {


  employees: Employe[] = []

  constructor(private employeservice: EmployeService,
    private router :Router ) { }

  updateEmploye(id:number){

      this.router.navigate(['update-employe/',id])
  }

  deleteEmploye(id:number){

    this.employeservice.deleteEmploye(id).subscribe( data =>
    this.getEmployes())

  }
  detailsEmploye(id:number){
   
    this.router.navigate(['details-employe/',id])
  
  }

  ngOnInit(): void {
   
    this.getEmployes()
  
  }

  private getEmployes() {
    this.employeservice.getEmployList().subscribe(data => {
    this.employees = data
    })
  }

}
