import React, { useState } from 'react';
import './EditEmployee.css'; 

const EditEmployee = ({ employee, onClose }) => {
  const [formData, setFormData] = useState(employee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Employee:", formData);
    onClose(); 
  };

  return (
    <div className="edit-employee-container">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        
      <div className="form-row">
          <label>Employee ID</label>
          <input name="employeeID" value={formData.employeeID} onChange={handleChange} />
        </div>
        
        <div className="form-row">
          <label>First Name</label>
          <input name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label>Last Name</label>
          <input name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label>Designation</label>
          <input name="designation" value={formData.designation} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Date of Birth</label>
          <input name="employeeID" value={formData.dob} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Gender</label>
          <input name="employeeID" value={formData.gender} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Phone Number</label>
          <input name="contact" value={formData.contact} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Emergency Contact Number</label>
          <input name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Reporting Manager</label>
          <input name="reportingmanager" value={formData.reportingmanager} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Department</label>
          <input name="department" value={formData.department} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Role</label>
          <input name="role" value={formData.role} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Date of Joining</label>
          <input name="doj" value={formData.doj} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>HR</label>
          <input name="hr" value={formData.hr} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Promotiondate</label>
          <input name="promotiondate" value={formData.promotiondate} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Resignation Date</label>
          <input name="resignation" value={formData.resignation} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Last working day</label>
          <input name="lastworking" value={formData.lastworking} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Company Email ID</label>
          <input name="companyemail" value={formData.companyemail} onChange={handleChange} />
        </div>
        
        
        <div className="form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
