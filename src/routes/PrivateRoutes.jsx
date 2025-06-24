import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import CustomLoader from "../components/loading/CustomLoader";

const PrivateRoutes = () => {
    const {loading, isAuthenticated} = useAuth(); 
    if(loading) { 
        return <CustomLoader /> // can have a smooth loading screen 
    }


  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes; 