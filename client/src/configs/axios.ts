import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASEURL || 'http://localhost:6000'
        
})

export default api;