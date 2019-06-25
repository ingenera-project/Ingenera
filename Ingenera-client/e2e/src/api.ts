import axios from 'axios';
const token = localStorage.getItem('token');
const Axios = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 5000,
    headers: { 'Access-Control-Allow-Origin': '*', Authorization: `Bearer ${token}` }
})

export default Axios