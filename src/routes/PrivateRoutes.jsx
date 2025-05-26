import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const PrivateRoutes = () => {
    const {loading, isAuthenticated} = useAuth(); 
    if(loading) { 
        return <div>Loading</div> // can have a smooth loading screen 
    }


  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes; 