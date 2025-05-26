import React from 'react'
import './Styles.css'
import DashboardCard from '../dashboard-card/DashboardCard';
import { FaUsers } from "react-icons/fa6";      
import { IoFolderSharp } from "react-icons/io5";

const dataset1 = [
  {param: "All Products", value: 210}, 
  {param: "Active", value: 30}, 
]
const dataset2 = [
  {param: "Low Stock Alert", value: 210}, 
  {param: "Expired", value: 30}, 
  {param: "1 Star Rating", value: 90}, 
]
const Inventory = () => {
  return (
    <div className="inventory-content-container">
      <div className='inventory-item inventory-item-A'><DashboardCard obj={dataset1} isSelect={false} Icon={IoFolderSharp} iconColor={'#7087f3'}  /></div>
      <div className='inventory-item inventory-item-B'><DashboardCard obj={dataset2} isSelect={true} Icon={FaUsers} iconColor={'#fff7ed'} textColor={'#8b8d97'} /></div>
      <div className='inventory-item inventory-item-C'></div>
    </div>
  )
}

export default Inventory