import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function UpdateEmployee() {
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        salary: ""
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setEmployee(response.data);
        }).catch(error => console.log(error));
    }, [id]);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(id, employee).then(() => {
            navigate("/");
        }).catch(error => console.log(error));
    };

    return (
        <div className="container mt-3">
            <h2>Update Employee</h2>
            <form onSubmit={updateEmployee}>
                <input 
                    className="form-control mb-3"
                    placeholder="Name"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                />

                <input 
                    className="form-control mb-3"
                    placeholder="Email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                />

                <input 
                    className="form-control mb-3"
                    placeholder="Salary"
                    name="salary"
                    value={employee.salary}
                    onChange={handleChange}
                />

                <button type="submit" className="btn btn-success">Update</button>
            </form>
        </div>
    );
}

export default UpdateEmployee;
