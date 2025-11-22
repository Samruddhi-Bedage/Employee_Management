import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import EmployeeService from "../services/EmployeeService";

function EmployeeList(){
    const[employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        /**
         * Calls API when page loads
         */
        loadEmployees();
    }, []);

    const loadEmployees = () => { //Fetch all employees
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const deleteEmployee = (id) => { //Deletes a row reloads list
        EmployeeService.deleteEmployee(id).then( () => {
            loadEmployees();
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return(
        <div style = {{padding: "20px"}}>
            <h2>Employee List</h2>
            <button className="btn btn-primary mb-3" onClick={() => navigate("/add-employee")}>
            + Add Employee   
            </button>

            <table border="1" cellPadding="10"> 
                <thead>
                    <tr>
                        <th>Emp ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.salary}</td>
                            <td>
                                <button
                                className="btn btn-danger btn-sm "
                                onClick={() => deleteEmployee(emp.id)}>Delete</button>
                                <button 
    className="btn btn-warning btn-sm ms-2"
    onClick={() => navigate(`/update-employee/${emp.id}`)}>
    Update
</button>

                                {/** Update button will be added later */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;