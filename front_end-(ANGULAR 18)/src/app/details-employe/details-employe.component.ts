import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { ActivatedRoute } from '@angular/router';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-details-employe',
  standalone: false,
  templateUrl: './details-employe.component.html',
  styleUrl: './details-employe.component.css'
})
export class DetailsEmployeComponent implements OnInit {

id:number = 0

employeDetails:Employe = new Employe


  constructor(private activatedroute : ActivatedRoute ,
      private employeService : EmployeService
  ){}

 


  ngOnInit(): void {

    this.id = this.activatedroute.snapshot.params['id']     
      
    this.employeService.getEmployeeById(this.id).subscribe( data =>
    
      this.employeDetails = data
    )
  }
}
