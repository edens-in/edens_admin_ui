import React from 'react'
import "./Styles.css"
import DashboardCard from '../dashboard-card/DashboardCard';
import { FaShoppingBag } from "react-icons/fa"; 
import { IoCartOutline } from "react-icons/io5";
const dataset1 = [
  {param: "All Orders", value: 210}, 
  {param: "Pending", value: 30}, 
  {param: "Comleted", value: 90}, 
]
const dataset2 = [
  {param: "Canceled", value: 0}, 
  {param: "Returned", value: 0}, 
  {param: "Damaged", value: 0}, 
]
const dataset3 = [
  {param: "Abandoned Cart", value: 0}, 
  {param: "Customers", value: 0}, 
]
const Orders = () => {
  return (
    <div className="order-content-container">
    <div className='order-item order-item-A'><DashboardCard obj={dataset1} isSelect={true} Icon={FaShoppingBag} iconColor={'#fff7ed'} textColor={'#8b8d97'} /></div>
    <div className='order-item order-item-B'><DashboardCard obj={dataset2} isSelect={true} Icon={FaShoppingBag} iconColor={'#fff7ed'} textColor={'#8b8d97'} /></div>
    <div className='order-item order-item-C'><DashboardCard obj={dataset3} isSelect={true} Icon={IoCartOutline} iconColor={'#fff7ed'} textColor={'#8b8d97'} /></div>
    <div className='order-item order-item-D'></div>
  </div>
  )
}

export default Orders