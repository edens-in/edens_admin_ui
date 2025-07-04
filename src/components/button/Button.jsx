import React from 'react'; 
import './Styles.css';

const Button = ({icon,innerText, onClick}) => {
  return (
    <button className='create-new-button' onClick={onClick}>
       <span className='create-new-button-icon' style={icon ? {} : {display: 'none'} }>{icon}</span> {innerText}
    </button>
  )
}

export default Button