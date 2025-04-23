package com.product.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.product.product.Model.employe;

@Repository
public interface employeRepo extends JpaRepository<employe,Long> {



}
