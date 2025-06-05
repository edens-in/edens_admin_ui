import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

import { useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'

import "./Styles.css"

const Navbar = () => {
    const location = useLocation();

    const { user, loading } = useAuth();

    if (loading) return <div>Loading . . .</div>
    const SellerName = () => {
        return user.user.seller.email.split('@')[0].split('.').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ');
    }

    const getHeader = (path) => {
        const segment = path.split('/').filter(Boolean);
        if (segment.length === 0) return 'Dashboard';

        const lastSegment = segment[segment.length - 1];

        return lastSegment
            .split(/[-_]/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    
    // const formatedPath = (path) => {
    //     const segment = path.split('/').filter(Boolean);
    //     if (segment.length === 0) return 'Dashboard';

    //     return ' / ' + segment
    //         .map(segment =>
    //             segment
    //                 .split(/[-_]/) // split by hyphen or underscore
    //                 .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    //                 .join(' ')
    //         )
    //         .join(' / ');
    // }

    const formatSegmentName = (segment) => {
        return segment
            .replace(/-/g, ' ')           // Replace dashes with spaces
            .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize each word
    };

    return (
        <nav className='nav-container'>
            <div className='nav-header'>
                <div className='nav-heading'>
                    <span className='sub-heading3'>{getHeader(location.pathname)}</span>
                </div>
                <div className='nav-info'>
                    <div className='my-shop-area'>
                        <span className='paragraph2'>{SellerName()}</span>
                        <RiArrowDropDownLine />
                    </div>
                    <FaBell style={{ color: 'var(--primary-color)' }} />
                    <img className='nav-profile-img' src='https://picsum.photos/id/252/1920/1080' alt='profile image' style={{ width: '28px', height: '28px', borderRadius: 'var(--input-corner-radius)' }} />
                </div>
            </div>
            {/* <div className='nav-footer' >
                <Link to={(e) => generatePath(e)}><FaHouse style={{ color: 'var(--primary-color)' }} />  {location.pathname === '/' ? '' : formatedPath(location.pathname)}</Link>
            </div> */}

            <div className='nav-footer'>
                <FaHouse style={{ color: 'var(--primary-color)' }} />
                {location.pathname !== '/' && (
                    <>
                        {location.pathname.split('/').filter(Boolean).map((segment, index, arr) => {
                            const path = '/' + arr.slice(0, index + 1).join('/');
                            const isActive = path === location.pathname; 
                            return (
                                <span key={index}>
                                    {' / '}
                                    <Link to={path} style={{ color: isActive ? 'grey' : 'var(--primary-color)'}}>
                                        {formatSegmentName(segment)}
                                    </Link>
                                </span>
                            );
                        })}
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar