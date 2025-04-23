import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from './employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
   
   private baseUrl = "http://localhost:8080/api/v1/employees"

  constructor(private Http:HttpClient) {}
  
//get all employe method service
 getEmployList():Observable <Employe []> {

   return this.Http.get<Employe [] >(this.baseUrl)
 }


 //save new employ method service
 createEmploye(employe:Employe):Observable<object>{
  return this.Http.post(this.baseUrl,employe)
 }


 //get employee by id rest API
 getEmployeeById(id:number):Observable<Employe>{

   return this.Http.get<Employe>(`${this.baseUrl}/${id}`)
 }

 //update employe
 updateEmploye( id : number , employe : Employe ):Observable<Object>{
   
   return this.Http.put(`${this.baseUrl}/${id}`, employe )

 }
// delete employ by Id
deleteEmploye(id:number):Observable<Object>{
  return this.Http.delete(`${this.baseUrl}/${id}`)
}
}
