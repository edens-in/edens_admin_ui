import React, { useState } from 'react';
import './CreateInventory.css';
import CustomInput from '../../input-components/CustomInput';
import CustomSelect from '../../input-components/CustomSelect';
import CustomTextArea from '../../input-components/CustomTextArea';
import CustomFileInput from '../../input-components/CustomFileInput';
import Button from "../../button/Button";

import axios from '../../../utils/axiosInstance';

import { toast } from 'react-toastify';
const CreateInventory = () => {
  const [productData, setProductData] = useState({
    productName: "",
    productCategory: "",
    color: "",
    size: "",
    price: "",
    productDescription: ""
  });

  const [files, setFiles] = useState([]);

  const [promise, setPromise] = useState(true);


  const isFormIncomplete =
    !productData.productName ||
    !productData.productCategory ||
    !productData.color ||
    !productData.size ||
    !productData.price ||
    !productData.productDescription ||
    files.length === 0;

  const handleClick = async (e) => {
    e.preventDefault();

    setPromise(false);
    const formData = new FormData();

    for (let key in productData) {
      formData.append(key, productData[key]);
    }

    for (let i = 0; i < files.length; i++) {
      formData.append('productImages', files[i]);
    }

    const uploadPromise = axios.post('/api/products/create-product', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    // toast notification for the upload process
    toast.promise(
      uploadPromise,
      {
        pending: 'Uploading and saving product...',
        success: 'Product created successfully!',
        error: 'Failed to create product. Please try again.',
      },
      {
        position: 'top-right',
        autoClose: 3000,
        theme: 'light',
      }
    );
    try {

      const result = await uploadPromise;
      console.log(result);
      setPromise(true);
      setProductData({
        productName: '',
        productDescription: '',
        productCategory: '',
        price: '',
        color: '',
        size: '',
      });
      setFiles([]);

    } catch (err) {
      console.log(err.message);
      setPromise(true);
    }



  }
  return (
    <div className='create-inventory'>

      <div className='create-inventort-add-button'>
        <Button
          innerText={promise ? "Save Item" : "Saving..."}
          icon={null}
          onClick={handleClick}
          disabled={
            isFormIncomplete
          }
          enableTransform={true}

        />
        <span className='paragraph1'>New Inventory Item</span>
      </div>
      <div className='create-inventory-wrapper'>
        <div className='create-inventory-item create-inventory-item-A'>
          <div className='create-inventory-item-A-collectons create-inventory-collection-inputs'>
            <CustomInput label={"Product name"} value={productData.productName} onChange={(e) => setProductData({ ...productData, productName: e.target.value })} />
            <CustomSelect value={productData.productCategory.option} onChange={(option) => setProductData({ ...productData, productCategory: option ? option.value : '' })} />
            <div className='create-inventory-size-color'>
              <div className='create-inventory-size-color-inner'>
                <CustomInput label={"Color"} value={productData.color} onChange={(e) => setProductData({ ...productData, color: e.target.value })} />
              </div>
              <div className='create-inventory-size-color-inner'>
                <CustomInput label={"Size"} value={productData.size} onChange={(e) => setProductData({ ...productData, size: e.target.value })} />
              </div>
            </div>
            <CustomInput label={"Price"} value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
            <div className='create-inventory-description'>
              <CustomTextArea label={"Description"} placeholder={"Product description..."} value={productData.productDescription} onChange={(e) => setProductData({ ...productData, productDescription: e.target.value })} />
            </div>
          </div>
          {/* <div className='create-inventory-item-A-collectons create-inventory-collection-description'  >

          </div> */}
        </div>

        <div className='create-inventory-item create-inventory-item-B'>
          <div className='create-inventory-item-B-drag-drop-select' >
            <CustomFileInput files={files} setFiles={setFiles} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateInventory