import React, { useState } from "react";
import { FaEye, FaEdit } from "react-icons/fa";
import "./Employee.css";
import EditEmployee from "./Employee/EditEmployee";
import ViewEmployee from "./Employee/ViewEmployee";


import { employeesData } from "./Employee/EmployeeData";


const Employee = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const [editEmployee, setEditEmployee] = useState(null); 
  const [viewEmployee, setViewEmployee] = useState(null); 


  const filtered = employeesData.filter((emp) =>
    Object.values(emp).some((val) =>
      val.toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentEmployees = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePrev = () => page > 1 && setPage((p) => p - 1);
  const handleNext = () => page < totalPages && setPage((p) => p + 1);

  if (editEmployee) {
    return (
      <EditEmployee
        employee={editEmployee}
        onClose={() => setEditEmployee(null)}
      />
    );
  }

  if (viewEmployee) {
    return <ViewEmployee employee={viewEmployee} onClose={() => setViewEmployee(null)} />;
  }
  

  return (
    <div className="employee-container">
      <h1>Employee Management</h1>

      <input
        className="search-input"
        type="text"
        placeholder="Global Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      <table className="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Designation</th>
            <th>Contact No</th>
            <th>Mail ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((emp, id) => (
            <tr key={id}>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.designation}</td>
              <td>{emp.contact}</td>
              <td>{emp.email}</td>
              <td>
                <button className="action-btn view-btn"
                   onClick={() => setViewEmployee(emp)}
                >
                  <FaEye />
                </button>
                <button
                  className="action-btn edit-btn"
                  onClick={() => setEditEmployee(emp)}
                >
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={handlePrev} disabled={page === 1}>
          &#8592;
        </button>

        <span className="page-count">
          {filtered.length === 0
            ? "0 of 0"
            : `${(page - 1) * itemsPerPage + 1} of ${filtered.length}`}
        </span>

        <button onClick={handleNext} disabled={page === totalPages}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Employee;
