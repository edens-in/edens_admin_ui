import React from 'react'
import { useState } from 'react'
import "./Styles.css"
import { CiMail } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import logo from "../../assets/logo.png"

import axios from "../../utils/axiosInstance"; 
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const {refetchAuth} = useAuth(); 
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const hadleLogin = async (e) => {
        e.preventDefault();
        try{ 
            await axios.post('/api/sellers/login', formData)
            await refetchAuth(); 
            navigate('/'); 
        }catch( err ) { 
            console.log(err.message); 
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
                        <span className='sub-heading3' style={{marginBottom: '0.5rem'}}>Welcome Back</span>
                        <span className='paragraph2' style={{color: '#8b8d97'}}>Login to your account</span>
                    </div>
                    <form onSubmit={(e) => hadleLogin(e)}>
                        <div className='input-field'>
                            <CiMail className='icon paragraph2' />
                            <input className='paragraph2' type='email' name='email' value={formData.email} onChange={(e) => handleChange(e)} placeholder='Email Address' />
                        </div>
                        <div className='input-field'>
                            <CiLock className='icon paragraph2' />
                            <input className='paragraph2' type='password' name='password' value={formData.password} onChange={(e) => handleChange(e)} placeholder='Password' />
                        </div>
                        <div className='misselenious'>
                            <a className='paragraph2' href='#'>Recover Password</a>
                        </div>
                        <div className='redirected-link'>
                            <span className='paragraph2'>Dont have an account? <a href='/signup'>Sign Up</a></span>
                        </div>
                        <button className='auth-button paragraph1' type='submit'> Login </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login