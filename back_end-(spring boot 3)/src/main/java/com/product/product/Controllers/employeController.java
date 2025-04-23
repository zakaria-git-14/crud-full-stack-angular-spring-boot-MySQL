package com.product.product.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.product.product.Exception.ResourceNotFoundException;
import com.product.product.Model.employe;
import com.product.product.repository.employeRepo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/")
public class employeController {

  @Autowired
  private employeRepo employeRepo;

  // get all employe
  @GetMapping("/employees")
  public List<employe> getAllEmployees() {
    return employeRepo.findAll();
  }

  // create employee rest API
  @PostMapping("/employees")
  public employe createEmploye(@RequestBody employe employe) {
    return employeRepo.save(employe);

  }

  // get employee by ID rest API
  @GetMapping("/employees/{id}")
  public ResponseEntity<employe> getEmployeByID(@PathVariable Long id) {
    employe employe = employeRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Employe not exist with id :" + id));
    return ResponseEntity.ok(employe);
  }

  // update employe rest API
  @PutMapping("/employees/{id}")
  public ResponseEntity<employe> updateEmploye(@PathVariable Long id, @RequestBody employe employeDetails) {

    employe employe = employeRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Employe not exist with id :" + id));

    employe.setFirstName(employeDetails.getFirstName());
    employe.setLastName(employeDetails.getLastName());
    employe.setEmailId(employeDetails.getEmailId());

    employe updatedEmployee = employeRepo.save(employe);

    return ResponseEntity.ok(updatedEmployee);

  }

  // delete employe rest API
  @RequestMapping(path = "/employees/{id}", method = RequestMethod.DELETE)
  public ResponseEntity<Map<String, Boolean>> deleteEmploye(@PathVariable long id) {

    employe employe = employeRepo.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Employe not exist with id :" + id));

    employeRepo.delete(employe);
    Map<String, Boolean> response = new HashMap<>();
    return ResponseEntity.ok(response);

  }

}
