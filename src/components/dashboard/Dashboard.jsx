import React from 'react'
import './Styles.css'
import PiechartComponent from './dashboard-components/piechart/PiechartComponent'
import Barchart from './dashboard-components/barchart/Barchart';
import DashboardCard from '../dashboard-card/DashboardCard';
import { FaHome } from 'react-icons/fa';
import { FaUsers } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { IoFolderSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";


const dataSets = {
  today: [10, 20, 30],
  week: [50, 40, 30],
  month: [100, 80, 70],
};
const dataset1 = [
  {param: "Sales", value: 123245}, 
  {param: "Volume", value: 30}, 
]

const dataset2 = [
  {param: "Customers", value: 120}, 
  {param: "Active", value: 30}, 
]
const dataset3 = [
  {param: "All Orders", value: 210}, 
  {param: "Pending", value: 30}, 
  {param: "Comleted", value: 90}, 
]
const dataset4 = [
  {param: "All Products", value: 190}, 
  {param: "Active", value: 181}, 
]
const dataset5 = [
  {param: "Abandoned Cart", value: 0}, 
  {param: "Customers", value: 0}, 
]

const timeRanges = {
    "Last 7 Days": 7,
    "Last 30 Days": 30,
    "Last 2 Months": 60,
    "Last 6 Months": 180,
};

const dataTypes = ["Sales Amount", "Day Count"];
const Dashboard = () => {
  return (
    <div className='dashboard-content-container'>
      <div className='dashboard-item dashboard-item-A'>
        <DashboardCard obj={dataset1} isSelect={true} Icon={FaHome} iconColor={'rgb(234,237,253)'} textColor={'#8b8d97'}/>
      </div>
      <div className='dashboard-item dashboard-item-B'><DashboardCard obj={dataset2} isSelect={true} Icon={FaUsers} iconColor={'#fff7ed'} textColor={'#8b8d97'}/></div>
      <div className='dashboard-item dashboard-item-C'><DashboardCard obj={dataset3} isSelect={true} Icon={FaShoppingBag} iconColor={'#fff7ed'} textColor={'#8b8d97'}/></div>
      <div className='dashboard-item dashboard-item-D'><PiechartComponent dataSets={dataSets}/></div>
      <div className='dashboard-item dashboard-item-E'><DashboardCard obj={dataset4} isSelect={false} Icon={IoFolderSharp} iconColor={'#7087f3'} /></div>
      <div className='dashboard-item dashboard-item-F'></div>
      <div className='dashboard-item dashboard-item-G'><DashboardCard obj={dataset5} isSelect={true} Icon={IoCartOutline} iconColor={'#fff7ed'} textColor={'#8b8d97'}/></div>
      <div className='dashboard-item dashboard-item-H'><Barchart timeRanges={timeRanges} dataTypes={dataTypes}/></div>
    </div>

  )
}

export default Dashboard