import React from 'react';

function DashboardContent() {
  return (
    <div className="dashboard-content">
      <h1>Admin Dashboard</h1>
      <div className="cards">
        <div className="card">Students: 150000</div>
        <div className="card">Teachers: 2250</div>
        <div className="card">Parents: 5690</div>
        <div className="card">Earnings: $193000</div>
      </div>
      <div className="cards">
        <div className="card">Earnings: $75,000</div>
        <div className="card">Expenses</div>
        <div className="card">Students</div>
      </div>
    </div>
  );
}

export default DashboardContent;
