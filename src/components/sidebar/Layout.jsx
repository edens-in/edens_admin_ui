import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import "./Styles.css"
import Navbar from './Navbar'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true); 
  const handleSidebarToggle = (val) => { 
    setIsOpen(val); 
  }
  return (
    <div className="dashboard-container">
      <Sidebar onToggle={handleSidebarToggle}/>
      <Navbar />
      <main className="main-content" >
        <div className="content-wrapper" style={{marginLeft: isOpen ? "320px" : "70px", transition: "margin-left 0.3s ease-in-out"}}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout