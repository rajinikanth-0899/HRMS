import React from "react";
import "./ApplyLeaveForm.css";

const ApplyLeaveForm = ({ onClose }) => {
  return (
    <div className="leave-form">
      <h2 className="form-title">Add Leave</h2>
      <form className="leave-form-grid">
        <div className="form-group">
          <label>Reporting Manager ID</label>
          <input type="text" placeholder="" />
        </div>

        <div className="form-group">
          <label>
            Leave type<span className="required">*</span>
          </label>
          <select>
            <option value="">Select leave type</option>
            <option value="casual">Casual Leave</option>
            <option value="sick">Sick Leave</option>
            <option value="earned">Earned Leave</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            Start Date<span className="required">*</span>
          </label>
          <input type="date" placeholder="dd-mm-yyyy" />
        </div>

        <div className="form-group">
          <label>
            End Date<span className="required">*</span>
          </label>
          <input type="date" placeholder="dd-mm-yyyy" />
        </div>

        <div className="form-group full-width">
          <label>
            Leave Information<span className="required">*</span>
          </label>
          <textarea rows="4" placeholder="Enter leave information" />
        </div>

        <div className="form-buttons full-width">
          <button type="submit" className="btn blue">
            SUBMIT
          </button>
          <button type="button" className="btn red" onClick={onClose}>
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyLeaveForm;
