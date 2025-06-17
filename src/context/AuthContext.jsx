import React, {createContext, useContext, useEffect, useState} from 'react'
import axios from "../utils/axiosInstance"; 
const AuthContext = createContext(); 
export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({loading: true, isAuthenticated: false, user: null});
    const fetchAuth = async () => { 
        try { 
            const res = await axios.get('/api/sellers/verify-seller');
            console.log(res.data, "this is data");  
            setAuth({loading: false, isAuthenticated: true, user: res.data})
        }catch(err) { 
            setAuth({loading: false, isAuthenticated: false, user: null})

        }
    } 
    useEffect(( ) => { 
        // axios.get('/api/sellers/verify-seller')
        // .then(res => { 
        //     setAuth({loading: false, isAuthenticated: true, user: res.data})
        // })
        // .catch(err => { 
        //     setAuth({loading: false, isAuthenticated: false, user: null})
        // }); 
        fetchAuth(); 
    }, []); 
  return (
    <AuthContext.Provider value={{...auth, refetchAuth: fetchAuth}}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext); 