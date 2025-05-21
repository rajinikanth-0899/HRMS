import React, { useState } from 'react';
import './Leaves.css';
import ApplyLeaveForm from './Employee/ApplyLeaveForm';

const Leaves = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  // If form is shown, render only ApplyLeaveForm
  if (showForm) {
    return <ApplyLeaveForm onClose={toggleForm} />;
  }

  return (
    <div className="leaves-container">
      <div className="leaves-header">
        <h1 className="leaves-title">Leaves</h1>
        <div className="leaves-buttons">
          <button className="btn blue">MY LEAVES</button>
          <button className="btn cyan">ON LEAVE TODAY</button>
          <button className="btn green" onClick={toggleForm}>APPLY LEAVE</button>
        </div>
      </div>

      <div className="leaves-search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
        <div className="leaves-stats">
          <span className="stat orange">Balance Leaves</span>
          <span className="stat orange">This Month's Leave</span>
        </div>
      </div>

      <div className="leaves-table-container">
        <table className="leaves-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
              <th>Approver Name</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Reason By Manager</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="8" className="no-options">No available options</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaves;
