import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function AddEmployee() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");

    const navigate = useNavigate();

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = { name, email, salary };

        EmployeeService.createEmployee(employee)
        .then(() => {
            navigate("/employees");
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="container mt-4">
            <h2>Add New Employee</h2>
            <form onSubmit={saveEmployee}>
                <div className="form-group mb-3">
                    <label>Name:</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label>Email:</label>
                    <input 
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label>Salary:</label>
                    <input 
                        type="number"
                        className="form-control"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-success">Save</button>
                <button 
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => navigate("/employees")}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default AddEmployee;
