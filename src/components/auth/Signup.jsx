import React from 'react'
import { useState } from 'react'
import "./Styles.css"
import { CiMail } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import { CiUser } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";

import axios from "../../utils/axiosInstance"; 
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.png"

const Signup = () => {
    const {refetchAuth} = useAuth(); 
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        email: '',
        password: '', 
        phone: '', 
        businessName: '',
         

    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const hadleLogin = async(e) => {
        e.preventDefault();
        // console.log(formData);
        try{ 
            await axios.post('/api/sellers/signup', formData); 
            await refetchAuth(); 
            navigate('/'); 
        } catch (e) { 
            console.log(e.message); 
        }
    }

  return (
    <div className='login-container'>
    <div className='auth-header'>
        <img src={logo} alt='logo small' style={{width: '50px', height: '50px'}}/>
    </div>
    <div className='auth-body'>
        <div className='auth-form'>
            <div className='auth-form-header'>
                <img src={logo} alt='logo small' style={{marginBottom: '2rem', width: '50px', height: '50px'}}/>
                <span className='sub-heading3' style={{marginBottom: '0.5rem'}}>Get Started with <span style={{color: 'var(--primary-color)'}}>Edens</span></span>
                <span className='paragraph2' style={{color: '#8b8d97'}}>Create your free account</span>
            </div>
            <form onSubmit={(e) => hadleLogin(e)}>
                <div className='input-field'>
                    <CiUser className='icon paragraph2' />
                    <input className='paragraph2' type='text' name='businessName' value={formData.businessName} onChange={(e) => handleChange(e)} placeholder='Enter Name' />
                </div>
                {/* <div className='input-field'>
                    <CiMail className='icon paragraph2' />
                    <input className='paragraph2' type='text' name='username' value={formData.username} onChange={(e) => handleChange(e)} placeholder='Enter User Name' />
                </div> */}
                <div className='input-field'>
                    <CiMobile3 className='icon paragraph2' />
                    <input className='paragraph2' type='text' name='phone' value={formData.phone} onChange={(e) => handleChange(e)} placeholder='Enter Phone Number' />
                </div>
                <div className='input-field'>
                    <CiMail className='icon paragraph2' />
                    <input className='paragraph2' type='email' name='email' value={formData.email} onChange={(e) => handleChange(e)} placeholder='Email Address' />
                </div>
                <div className='input-field'>
                    <CiLock className='icon paragraph2' />
                    <input className='paragraph2' type='password' name='password' value={formData.password} onChange={(e) => handleChange(e)} placeholder='Password' />
                </div>
                <div className='redirected-link'>
                    <span className='paragraph2'>Already have an account? <a href='/login'>Login</a></span>
                </div>
                <button className='auth-button paragraph1' type='submit'> Login </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Signup