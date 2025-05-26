import React, { useState } from 'react'
import { Link,useLocation } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegWindowRestore } from "react-icons/fa";
import logo from "../../assets/logo.png"


import "./Styles.css"

function Sidebar({onToggle}) {
  const location = useLocation(); 

  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => { 
    setIsOpen(prev => {
      onToggle(!prev); // Pass the new state immediately
      return !prev;
    }); 
  }
  const menuItems = [
    { name: "Dashboard", icon: <LuLayoutDashboard />, path: "/" },
    { name: "Customers", icon: <FaUser />, path: "/customers" },
    { name: "Orders", icon: <FaBagShopping />, path: "/orders" },
    { name: "Inventory", icon: <FaRegWindowRestore />, path: "/inventory" },
    { name: "Settings", icon: <IoSettingsSharp />, path: "/settings" },
  ];
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="menu-button" onClick={() => handleToggle()}>
        <img src={logo} alt="logo" className="logo" style={{width: "50px", height: "50px"}}/>
      </button>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className={`menu-item ${location.pathname === item.path ? "active" : ""}`}>
            <Link to={item.path} className="menu-link">
              {item.icon}
              {isOpen && <span className="menu-text">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar