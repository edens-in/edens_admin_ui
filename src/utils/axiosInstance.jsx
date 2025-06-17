import axios from "axios";

const axiosInstance = axios.create({ 
    // baseURL: "http://localhost:8000", 
    baseURL: "https://kickstart-59ea.onrender.com", 
    // withCredentials: true, // important for cookies
    credentials: true,
}); 
export default axiosInstance; 