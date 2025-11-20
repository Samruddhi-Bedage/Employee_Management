package com.example.employee_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.employee_management.entity.Employee;
/**
    * Repository interfaces for Employee entity
    * Spring Data JPA automatically provides CRUD operations.
 */
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
}
