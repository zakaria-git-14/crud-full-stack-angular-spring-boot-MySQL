import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeService } from '../employe.service';
import { Employe } from '../employe';

@Component({
  selector: 'update-employe',
  standalone: false,
  templateUrl: './update-employe.component.html',
  styleUrl: './update-employe.component.css'
})
export class UpdateEmployeComponent implements OnInit {

  newEmploye: Employe = new Employe()
  
  id: number = 0

  constructor(private employeService: EmployeService,
    private route: ActivatedRoute ,
    private router : Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    
    this.employeService.getEmployeeById(this.id).subscribe({
     
      next: data => this.newEmploye = data,
     
      error: err => console.log(err)
    
    })

  }
  
  GoToEmployeList() {
    this.router.navigate(['/employees'])
  }

  onSubmit() {
     
    this.employeService.updateEmploye(this.id, this.newEmploye).subscribe({
      next: data => this.GoToEmployeList(),
      error: err => console.log(err)
    })
      
  }

}
