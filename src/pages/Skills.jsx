import React from 'react';
import "./Skills.css"
const Skills = () => {
  return (
    <div className="container">
     
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Skills</h2>
          <div className="card-actions">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="action-button">+ Add/Edit Skills</button>
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" className="no-data">No available options</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Certifications Section */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Certifications</h2>
          <div className="card-actions">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="action-button">+ Add Certificate</button>
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Certification</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3" className="no-data">No available options</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skills;
