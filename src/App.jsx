import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/DashboardPage'

import Dashboard from './components/dashboard/Dashboard'

import InventoryLayout from './components/inventory/InventoryLayout'
import Inventory from './components/inventory/Inventory'
import CreateInventory from './components/inventory/create-inventory/CreateInventory'

import Profile from './components/profile/Profile'
import Orders from './components/orders/Orders'
import Users from './components/users/Users'
import PrivateRoutes from './routes/PrivateRoutes'




function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />

          {/* Main dashboard layout with nested routes */}
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/" element={<DashboardPage />}>
              <Route index element={<Dashboard />} />
              <Route path="inventory" element={<InventoryLayout />}>
                <Route index element = {<Inventory />} />
                <Route path="new-inventory" element={<CreateInventory />} />
              </Route>
              <Route path="customers" element={<Users />} />
              <Route path="orders" element={<Orders />} />
              <Route path="settings" element={<Profile />} />
            </Route>  
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
