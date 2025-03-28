import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

import { useLocation } from 'react-router-dom';

import "./Styles.css"

const Navbar = () => {
    const location = useLocation();

    const getHeader = (path) => {
        switch (path) {
            case '/':
                return 'Dashboard';
            case '/orders':
                return 'Orders';
            case '/customers':
                return 'Customers';
            case '/inventory':
                return 'Inventory';
            case '/settings':
                return 'Settings';
            default:
                return 'Dashboard';
        }
    }
    const formatedPath = (path) => { 
        return ' / ' +  path
        .split('/')
        .filter(Boolean)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' / '); 
    }
    return (
        <nav className='nav-container'>
            <div className='nav-header'>
                <div className='nav-heading'>
                    <span className='sub-heading3'>{getHeader(location.pathname)}</span>  
                </div>
                <div className='nav-info'>
                    <div className='my-shop-area'>
                        <span className='paragraph2'>Nanny's Shop </span>
                        <RiArrowDropDownLine />
                    </div>
                    <FaBell style={{ color: 'var(--primary-color)' }} />
                    <img className='nav-profile-img' src='https://picsum.photos/id/252/1920/1080' alt='profile image' style={{ width: '28px', height: '28px', borderRadius: 'var(--input-corner-radius)' }} />
                </div>
            </div>
            <div className='nav-footer'>
                <FaHouse style={{ color: 'var(--primary-color)' }} />  {location.pathname === '/' ? '' : formatedPath(location.pathname)}
            </div>
        </nav>
    )
}

export default Navbar