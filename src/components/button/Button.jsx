import React from 'react'; 
import './Styles.css';

const Button = ({icon,innerText, onClick, disabled}) => {
  return (
    <button className={disabled ? 'create-new-button disabled-button' : 'create-new-button'} onClick={onClick} disabled={disabled}>
       <span className={`create-new-button-icon`} style={icon ? {} : {display: 'none'} }>{icon}</span> {innerText}
    </button>
  )
}

export default Button