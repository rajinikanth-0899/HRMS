
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './Login/Login';
import ProtectedRoute from './Layout/ProtectedRoute';  

import MainLayout from './Layout/MainLayout';

import Dashboard from './pages/Dashboard';
import Employee from './pages/Employee';
import Skills from './pages/Skills';
import Leaves from './pages/Leaves';
import Salary from './pages/Salary';
import Checkins from './pages/Checkins';
import Events from './pages/Events';
import Project from './pages/Project';
import Timesheet from './pages/Timesheet';
import Policies from './pages/Policies';
import Reimbursement from './pages/Reimbursement';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
     
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="employee" element={<Employee />} />
          <Route path="skills" element={<Skills />} />
          <Route path="leaves" element={<Leaves />} />
          <Route path="salary" element={<Salary />} />
          <Route path="checkins" element={<Checkins />} />
          <Route path="events" element={<Events />} />
          <Route path="project" element={<Project />} />
          <Route path="timesheet" element={<Timesheet />} />
          <Route path="policies" element={<Policies />} />
          <Route path="reimbursement" element={<Reimbursement />} />
      
        </Route>
      </Route>


    </Routes>
  );
}

export default App;














// import React, { useState } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';

// import './App.css';

// import Login from './Login/Login';
// import Navbar from './Mainpage/Navbar';
// import Sidebar from './Mainpage/Sidebar';
// import Dashboard from './pages/Dashboard';
// import Employee from './pages/Employee';
// import Skills from './pages/Skills';
// import Leaves from './pages/Leaves';
// import Salary from './pages/Salary';
// import Checkins from './pages/Checkins';
// import Events from './pages/Events';
// import Project from './pages/Project';
// import Timesheet from './pages/Timesheet';
// import Policies from './pages/Policies';
// import Reimbursement from './pages/Reimbursement';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const AuthenticatedLayout = () => (
//     <>
  
//       <Navbar />
//         <Sidebar />
//         <div style={{ flexGrow: 1, padding: '20px', marginLeft: 240 ,marginTop:100}}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/employee" element={<Employee />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/leaves" element={<Leaves />} />
//             <Route path="/salary" element={<Salary/>} />
//             <Route path="/checkins" element={<Checkins/>} />
//             <Route path="/events" element={<Events/>} />
//             <Route path="/project" element={<Project/>} />
//              <Route path="/timesheet" element={<Timesheet/>} />
//             <Route path="/policies" element={<Policies />} />
//             <Route path="/reimbursement" element={<Reimbursement />} />
            
//           </Routes>
//           </div>
      
//     </>
//   );

//   return (
//     <Routes>
//       <Route
//         path="/login"
//         element={<Login setIsAuthenticated={setIsAuthenticated} />}
//       />
//       {isAuthenticated ? (
//         <Route path="/*" element={<AuthenticatedLayout />} />
//       ) : (
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       )}
//     </Routes>
//   );
// }

// export default App;
