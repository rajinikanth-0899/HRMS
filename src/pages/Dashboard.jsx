import React from 'react';
import './Dashboard.css';
import { FaProjectDiagram, FaLaptopCode, FaUsers } from 'react-icons/fa';
import { quotes } from '../DashboardData/SampleData';
import { holidays } from '../DashboardData/Holidays';

const Dashboard = () => {
  const today = new Date();

  // Get the day of the year
  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );

  // Change every 1 days
  const quoteIndex = Math.floor(dayOfYear / 1) % quotes.length;
  const { text, author } = quotes[quoteIndex];


  const mayHolidays = holidays.filter(
    (holiday) => new Date(holiday.date).getMonth() === 4
  );

  return (
    <div className="dashboard-container">
      
      <div className="dashboard dashboard-top">
        <DashboardCard title="Overall Projects" value="2" icon={<FaProjectDiagram />} iconColor="blue" />
        <DashboardCard title="Current Projects" value="2" icon={<FaLaptopCode />} iconColor="red" />
        <DashboardCard title="Employees" value="10" icon={<FaUsers />} iconColor="green" />

        <div className="card">
          <h3 className="card-title">Dept. Employee Count</h3>
          <ul className="card-list">
            <li>HR-Accounts: 2</li>
            <li>Development: 6</li>
            <li>IT: 2</li>
          </ul>
        </div>


        <div className="card">
          <h3 className="card-title">Holidays for May</h3>
          {mayHolidays.length > 0 ? (
            <ul className="card-list">
              {mayHolidays.map((holiday, idx) => (
                <li key={idx}>
                  {holiday.name}: <span className="text-green">{holiday.date}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No holidays in May</p>
          )}
        </div>

      
      </div>

      <div className="dashboard dashboard-bottom">
        <div className="card">
          <h3 className="card-title">Birthday List</h3>
          <p className="text-muted">No birthdays today</p>
        </div>

        <div className="card">
          <h3 className="card-title">Daily Inspiration</h3>
          <p className="text-red bold-text">"{text}"</p>
          <p className="text-blue italic-text text-small">– {author}</p>
        </div>

        <div className="card">
          <h3 className="card-title">Your Notes</h3>
          <textarea
            placeholder="Write your temporary notes here..."
            className="notes-textarea"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, icon, iconColor }) => {
  return (
    <div className="card card-dashboard">
      <h3 className="card-title">{title}</h3>
      <div className="card-value">
        <span className={`icon icon-${iconColor}`}>{icon}</span>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default Dashboard;
