import React from 'react'
import Button from '../button/Button';
import { IoIosLogOut } from "react-icons/io";
import './Styles.css'

const Logout = ({isOpen}) => {
  const handleClick = () => {

  }
  return (

    <button className='logout-button' onClick={handleClick} style={{justifyContent: isOpen ? 'center' : 'flex-start', width: isOpen ? '90%' : '60%'}}>
      <IoIosLogOut style={{fontSize: '20px'}}/>
      <span className='logout-text' style={{display: isOpen ? 'block' : 'none'}}>Logout</span>
    </button>

  )
}

export default Logout 