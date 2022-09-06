import axios from 'axios';
import { BASE_URL } from '../../Constants/urlconstants';
const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
   baseURL:BASE_URL,
   headers: {
       'Authorization' : token ? `Bearer ${token}` : ''
   }
});

export default axiosInstance;