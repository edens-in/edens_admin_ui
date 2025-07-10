import React from 'react'
import './Styles.css'; 
import Button from '../../button/Button'
import { IoBagHandle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoAddOutline } from "react-icons/io5";

const ProductScreen = ({titleText}) => {
    const navigate = useNavigate(); 

    const handleClick = () => { 
        navigate('/inventory/new-inventory')
    }
  return (
    <div className='product-screen-container'>
        <div className='empty-product-screen'>
            <IoBagHandle style={{transform: "translateY(-6%)"}}/>
        </div>
        <span className='product-screen-title-text'>{titleText}</span>
        <span className='product-screen-body-text'>Add products to your store and start <br /> selling to see orders here</span>
        <Button 
            icon={<IoAddOutline />}
            innerText={"New Product"}
            onClick={handleClick}
            disabled={false}
        />
    </div>
  )
}

export default ProductScreen; 