import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUserGraduate, FaChalkboardTeacher, FaUsers, FaClipboardList, FaCalendarCheck, FaList } from 'react-icons/fa';

function Sidebar() {
  const [showClassOptions, setShowClassOptions] = useState(false);

  // Fonction pour basculer l'affichage des sous-options de classe
  const handleClassClick = () => {
    setShowClassOptions(!showClassOptions);
  };

  return (
    <div className="sidebar">
      <ul>
        <li><h2>لوحة القيادة</h2></li>
        <li>
          <Link to="/">
            Dashboard <FaTachometerAlt />
          </Link>
        </li>
        <li>
          <Link to="/students">
            Students <FaUserGraduate />
          </Link>
        </li>
        <li>
          <Link to="#teachers">
            Teachers <FaChalkboardTeacher />
          </Link>
        </li>
        <li>
          <Link to="#users">
            Utilisateurs <FaUsers />
          </Link>
        </li>
        
        {/* Lien principal pour les classes */}
        <li>
          <div onClick={handleClassClick} >
            Class <FaClipboardList />
          </div>

          {/* Sous-options pour List class et Add class, affichées uniquement si showClassOptions est true */}
          {showClassOptions && (
            <ul>
              <li>
                <Link to="/add-classes">
                  Add class <FaList />
                </Link>
              </li>
              <li>
                <Link to="/classes-list">
                  List class <FaList />
                </Link>
              </li>
              
            </ul>
          )}
        </li>

        <li>
          <Link to="#attendance">
            Attendance <FaCalendarCheck />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
