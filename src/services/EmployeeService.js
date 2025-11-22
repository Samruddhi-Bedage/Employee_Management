import axios from "axios"; // We are importing axios, a library used to make HTTP API class (GET, POST, PUT, DELETE), Without axios, React cannot talk to the backend.

const BASE_URL = "/api/employees";  
/*
 *This is the base API link of your spring boot backend 
 *All employee-related API calls will start from this URL
 *It reduces repetition - we don't write the URL again and again
*/

class EmployeeService{ 
    /**
     * creating a class to group all API functions together
     * This keeps code clean and structured
     */
    getAllEmployees(){

        /**
         * This function makes a GET request to backend
         * It fetches all employees from the database
         * axios.get() calls GET/employees
         */
        return axios.get(BASE_URL);
    }

    createEmployee(employee){
        /**
         * Sends employee data to backend using POST request.
         * Used when adding a new employee.
         * employee is the onject you send (name,enail,salary,etc).
         */
        return axios.post(BASE_URL, employee);
    }

    getEmployeeById(id){
        /**
         * Fetches a single employee by ID.
         * Ex.- /employee/5
         * This API is used when opening "Update Employee" page.
         */
        return axios.get(`${BASE_URL}/${id}`);
    }

    updateEmployee(id, employee){
        /**
         * Send updated employee data to backend using PUT request.
         * ex.- /employee/5 with updated details.
         * Used for editing employee records.
         */
        return axios.put(`${BASE_URL}/${id}`, employee);
    }

    deleteEmployee(id){
        /**
         * Deleted an employee recird using DELETE request.
         * ex.- /employee/10 will delete employeewith ID 10.
         */
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new EmployeeService(); 
/**
 * Creates a single object of EmployeeService class.
 * We export it so we can use it in other files.
 * This lets you write : EmployeeService.getAllEmployees()
 */