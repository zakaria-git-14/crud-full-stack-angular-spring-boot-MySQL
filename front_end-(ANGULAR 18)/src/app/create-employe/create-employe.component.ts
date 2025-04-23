import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'create-employe',
  standalone: false,
  templateUrl: './create-employe.component.html',
  styleUrl: './create-employe.component.css'
})
export class CreateEmployeComponent implements OnInit {

  newEmploye: Employe = new Employe()

  constructor(private employeService: EmployeService,
    private router: Router
  ) { }

  saveEmploye() {
    this.employeService.createEmploye(this.newEmploye).subscribe({
      next : () => this.GoToEmployeList(),
      error : err => console.log(err)
    })
  }

  GoToEmployeList() {
    this.router.navigate(['/employees'])
  }

  ngOnInit(): void {

  }
  
  onSubmit() {
    
    this.saveEmploye()

  }

}
