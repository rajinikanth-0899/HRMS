// ViewEmployee.js
import React from "react";
import "./ViewEmployee.css"; // Create this CSS file for styling

const ViewEmployee = ({ employee, onClose }) => {
  return (
    <div className="overlay">
      <div className="content">
        <div className="header">
          <h2>Employee Details</h2>
          <button className="btn" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="body">
          <h2>{employee.firstName} {employee.lastName}</h2>
          <p><strong>Designation:</strong> {employee.designation}</p>
          <p><strong>Email:</strong> {employee.companyemail}</p>
          <p><strong>Phone:</strong> {employee.contact}</p>
          <p><strong>Emergency contact :</strong> {employee.emergencyContact}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
