
import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Mainpage/Navbar';
import Sidebar from '../Mainpage/Sidebar';

export default function MainLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <main style={{ flexGrow: 1, padding: 10, marginTop: 70 }}>
        <Outlet />
      </main>
    </div>
  );
}
