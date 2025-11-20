package com.example.employee_management.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.employee_management.entity.Employee;
import com.example.employee_management.repository.EmployeeRepository;

/**
 * Service layer that contains business logic for Employee operations
 */

@Service // Tells Spring this class contains the business logic
public class EmployeeService {
    @Autowired  // Injects the repository so service can call database methods
    private EmployeeRepository repository;

    /**
     * Save employee to database
     * method - saveEmployee() => add new employee
     */

    public Employee saveEmployee(Employee employee){
        return repository.save(employee);
    }    
    
    /**
     * Get all employees
     * method - getAllEmployees() => list all employees
     */

    public List<Employee> getAllEmployees(){
        return repository.findAll();
    }

    /**
     * Get employee by ID
     * method -  getEmployeeById() => fetch 1 employee
     */

    public Employee getEmployeeById(Long id){
        return repository.findById(id).orElse(null);
    }

    /**
     * Delete employee by ID
     * method - deleteEmployee() => remove employee
     */

    public void deleteEmployee(Long id){
        repository.deleteById(id);
    }
}
