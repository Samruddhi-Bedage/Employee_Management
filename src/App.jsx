import { BrowserRouter } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import { Routes, Route } from 'react-router-dom';
import UpdateEmployee from "./pages/UpdateEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeList/>}/>
        <Route path="/employees" element={<EmployeeList/>}/> {/* Added this route */}
        <Route path="/add-employee" element={<AddEmployee/>}/>
        <Route path="/update-employee/:id" element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;