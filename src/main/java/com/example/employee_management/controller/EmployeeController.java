package com.example.employee_management.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.employee_management.entity.Employee;
import com.example.employee_management.service.EmployeeService;

/**
 * Controller layer that exposes REST API's for Employee operations.
 */

@RestController   // Tells Spring this class handles API requests and returns JSON
@RequestMapping("api/employees")  // All API's will start with: /api/employee
@CrossOrigin(origins = "*") // allows react frontend to call these API's

public class EmployeeController {

    @Autowired
    private EmployeeService service;

    /**
     * Add new employee
     * POST: /api/employees
     */

    @PostMapping
    public Employee saveEmployee(@RequestBody Employee employee){
        return service.saveEmployee(employee);
    }

    /**
     * Get all employees
     * Get: /api/employee
     */

    @GetMapping
    public List<Employee> getAllEmployees(){
        return service.getAllEmployees();
    }

    /**
     * Get one employee by ID
     * GET: /api/employees/{id}
     */

    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id){
        return service.getEmployeeById(id);
    }

    /**
     * Delete employee by ID
     * DELETE: /api/employees/{id}
     */

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id){
        service.deleteEmployee(id);
        return "Employee deleted with id : " + id;
    }

}
