import React from 'react'
import './Styles.css'
import DashboardCard from '../dashboard-card/DashboardCard';
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from 'react-icons/fa';
const dataset1 = [
  {param: "AllCustomers", value: 210}, 
  {param: "Active", value: 30}, 
  {param: "In-Active", value: 90}, 
]
const dataset2 = [
  {param: "New Customers", value: 210}, 
  {param: "Purchasiing", value: 70}, 
  {param: "Abandoned Cart", value: 0}, 
]
const Users = () => {
  return (
    <div className="users-content-container">
      <div className='users-item users-item-A'><DashboardCard obj={dataset1} isSelect={true} Icon={FaUser} iconColor={'#fff7ed'} textColor={'#8b8d97'} /></div>
      <div className='users-item users-item-B'><DashboardCard obj={dataset2} isSelect={true} Icon={FaShoppingBag} iconColor={'#fff7ed'} textColor={'#8b8d97'} /></div>
      <div className='users-item users-item-C'></div>
    </div>
  )
}

export default Users