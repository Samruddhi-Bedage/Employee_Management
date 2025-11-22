// Employee.java - represents one employee table in the database
//Java class = Database Table row(record)

package com.example.employee_management.entity; 

import jakarta.persistence.*; // This ensures Spring can Automatically detect all components

@Entity // This java class should become a table in the database (Without @Entity, Hibernate will ignore the class.)
@Table(name = "employees")  // Sets the table name in MySQL and table will be created as employees
// if don't write this Spring will create table as employee by default.

public class Employee {
    @Id  // Mark this field as the PRIMARY KEY
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generates the ID, IDENTITY => MySQL AUTO_INCREMENT meaning=> You dont need to insert id, MySQL will generate it.

    private Long id;
    private String name;
    private String email;
    private double salary;

    public Employee(){} // default constructor - Required by JPA, Hibernate uses it internally

    public Employee(Long id, String name, String email, double salary){  //parameterized constructor - helps you to create objects easily.

        this.id=id;
        this.name=name;
        this.email=email;
        this.salary=salary;
    }

    /*Getters/Setters =>
        Getter - get values
        Setter - update values (Needed for JSON, Hibernate, REST API's)

        these methods used for encapsulation, allows controlled access to private fields

        - Spring Boot can read the values when sending JSON
        - Spring Boot can set the values while receiving JSON
        - Hibernate can save and update these values in the database
        - They help the private fields communicate safely with JSON and the database
*/


    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id=id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name=name;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email=email;
    }

    public double getSalary(){
        return salary;
    }

    public void setSalary(double salary){
        this.salary=salary;
    }


}
