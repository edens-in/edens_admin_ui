import React, { useState } from 'react';
import './CreateInventory.css';
import CustomInput from '../../input-components/CustomInput';
import CustomSelect from '../../input-components/CustomSelect';
import CustomTextArea from '../../input-components/CustomTextArea';
import Button from "../../button/Button";

const CreateInventory = () => {
  const [productData, setProductData] = useState({
    productName: "",
    category: "",
    color: "",
    size: "",
    price: "", 
    productDescription: ""
  })


  const handleClick = async (e) => {
    e.preventDefault();
    console.log(productData);
  }
  return (
    <div className='create-inventory'>

      <div className='create-inventort-add-button'>
        <Button innerText={"Save Item"}  icon={null} onClick={handleClick}/>
        <span className='paragraph1'>New Inventory Item</span>
      </div>
      <div className='create-inventory-wrapper'>
        <div className='create-inventory-item create-inventory-item-A'>
          <div className='create-inventory-item-A-collectons create-inventory-collection-inputs'>
            <CustomInput label={"Product name"} value={productData.productName} onChange={(e) => setProductData({...productData, productName: e.target.value})}/>
            <CustomSelect value={productData.category.option} onChange={(option) => setProductData({...productData, category: option? option.value : ''})}/>
            <div className='create-inventory-size-color'>
              <div className='create-inventory-size-color-inner'>
                <CustomInput label={"Color"} value={productData.color} onChange={(e) => setProductData({...productData, color: e.target.value})}/>
              </div>
              <div className='create-inventory-size-color-inner'>
                <CustomInput label={"Size"} value={productData.size} onChange={(e) => setProductData({...productData, size: e.target.value})}/>
              </div>
            </div>
            <CustomInput label={"Price"} value={productData.price} onChange={(e) => setProductData({...productData, price: e.target.value})}/>
            <div className='create-inventory-description'> 
              <CustomTextArea  label={"Description"} placeholder={"Product description..."} value={productData.productDescription} onChange={(e) => setProductData({...productData, productDescription: e.target.value})}/>
            </div>
          </div>
          {/* <div className='create-inventory-item-A-collectons create-inventory-collection-description'  >

          </div> */}
        </div>

        <div className='create-inventory-item create-inventory-item-B'>

        </div>
      </div>
    </div>
  )
}

export default CreateInventory