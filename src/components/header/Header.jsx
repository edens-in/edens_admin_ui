import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegWindowRestore } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import './Header.css';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "Orders", icon: <FaBagShopping />, path: "/orders" },
    { name: "Inventory", icon: <FaRegWindowRestore />, path: "/inventory" },
    { name: "Settings", icon: <IoSettingsSharp />, path: "/settings" },
  ];

  return (
    <header className="header">
      <nav className="nav-links">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      
      <div className="user-profile">
        <Link to="/profile" className="profile-link">
          <FaUser className="profile-icon" />
          <span>Profile</span>
        </Link>
      </div>
    </header>
  );
};

export default Header; 