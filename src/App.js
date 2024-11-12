import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar'; // Si vous avez un Topbar
import DashboardContent from './components/DashboardContent'; // Si vous avez une page d'accueil
import Classes from './pages/Classes'; 
import  Listclasses  from './pages/Listclasses';
function App() {
  return (
    <Router>
      <div className="dashboard-container">
        <Sidebar />
        <div className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<DashboardContent />} />
            <Route path="/add-classes" element={<Classes />} />
            <Route path="/classes-list" element={<Listclasses/>} />

            {/* Ajoutez d'autres routes ici si nécessaire */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
