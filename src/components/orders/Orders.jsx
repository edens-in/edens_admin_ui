import React, { useEffect, useState } from 'react'
import "./Styles.css"
import DashboardCard from '../dashboard-card/DashboardCard';
import { FaShoppingBag } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import { useAuth } from '../../context/AuthContext';


import axios from '../../utils/axiosInstance';
import { readableDateTimeFormating } from '../../utils/readableDateTimeFormating';
import { orderStatusCustomBgColor, orderStatusCustomTextColor } from '../../utils/orderStatusCustomColor';
import CustomSelect2 from '../input-components/CustomSelect2';

import { FiFilter } from "react-icons/fi";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";


const dataset1 = [
  { param: "All Orders", value: 210 },
  { param: "Pending", value: 30 },
  { param: "Comleted", value: 90 },
]
const dataset2 = [
  { param: "Canceled", value: 0 },
  { param: "Returned", value: 0 },
  { param: "Damaged", value: 0 },
]
const dataset3 = [
  { param: "Abandoned Cart", value: 0 },
  { param: "Customers", value: 0 },
]

const statusOptions = [
  { value: "pending", label: "Pending" },
  { value: "processing", label: "Processing" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];


const ORDERS_PER_PAGE = 100;
const Orders = () => {
  const { user, isAuthenticated, loading } = useAuth();
  const [orders, setOrders] = useState({});
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(null);
  const [currentOrders, setCurrentOrders] = useState(null);
  const [totalPages, settotalPages] = useState(null);
  const [status, setStatus] = useState(null);

  if (loading) return <div>Loading . . . </div>

  if (!isAuthenticated) return <div>Unauthorised Access</div>
  console.log(user, "from profile order");

  useEffect(() => {
    fetchSellerOrders();
  }, [page]);

  const fetchSellerOrders = async () => {
    try {
      const response = await axios.get('/api/orders/seller/orders');
      console.log(response.data);
      setOrders(response.data);


      let index = (page - 1) * ORDERS_PER_PAGE;
      setStartIndex(index);

      let currOrder = response.data.orders.slice(index, index + ORDERS_PER_PAGE);
      // console.log(currOrder, "currenrOrders")
      setCurrentOrders(currOrder);

      let tp = Math.ceil(response.data.count / ORDERS_PER_PAGE);
      settotalPages(tp)
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleStatusChange = async (id, status) => {
    try {
      console.log(id);
      await axios.patch(`/api/orders/seller/status/${id}`, { status: status });
      fetchSellerOrders();
    } catch (er) {
      console.log(er.message);
    }
  }






  return (
    <div className="order-content-container">
      <div className='order-item order-item-A'><DashboardCard obj={dataset1} isSelect={true} Icon={FaShoppingBag} iconColor={'#fff7ed'} textColor={'#8b8d97'} /></div>
      <div className='order-item order-item-B'><DashboardCard obj={dataset2} isSelect={true} Icon={FaShoppingBag} iconColor={'#fff7ed'} textColor={'#8b8d97'} /></div>
      <div className='order-item order-item-C'><DashboardCard obj={dataset3} isSelect={true} Icon={IoCartOutline} iconColor={'#fff7ed'} textColor={'#8b8d97'} /></div>
      <div className='order-item order-item-D'>
        <div className='order-show-orders-filters'>
          <span className='order-show-orders-title'>Customer Orders</span>
          <div className='order-show-orders-filters-container'>
            <div className='order-show-orders-filters-filter'>
              <button className='order-show-orders-filters-filter-button'><FiFilter /> Filter</button>
            </div>
            <div className='order-show-orders-filters-by-date'>
              <button className='order-show-orders-filters-by-date-button'><HiOutlineCalendarDateRange /> Filter</button>
            </div>
          </div>
        </div>
        <div className="order-show-orders-container">
          <table className="order-show-orders-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Address</th>
                <th>Order Date</th>
                <th>Total</th>
                {/* <th>Tracking Url</th> */}
                <th>Payment</th>
                <th>Product Name</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders?.map((order) => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.address}</td>
                  <td>{readableDateTimeFormating(order.createdAt)}</td>
                  <td>₹{order.totalAmount}</td>
                  {/* <td>{order.trackingUrl}</td> */}
                  <td>{order.paymentStatus}</td>
                  <td>{order.productName}</td>
                  <td>
                    <CustomSelect2
                      value={order.status}
                      options={statusOptions}
                      onChange={(newStatus) => handleStatusChange(order.orderId, newStatus)}
                    />
                  </td>
                  <td >
                    <span
                      className='order-status'
                      style={{
                        backgroundColor: orderStatusCustomBgColor(order.status),
                        color: orderStatusCustomTextColor(order.status)
                      }}
                    >
                      {order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="order-show-orders-pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Previous
            </button>

            {/* {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={page === index + 1 ? "order-show-orders-active" : ""}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))} */}
            <div className='order-show-orders-pages'>
              {page} / {totalPages}
            </div>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders