import axios from 'axios';
const token = localStorage.getItem('token');
const Axios = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: { 'Access-Control-Allow-Origin': '*', Authorization: `Bearer ${token}` }
})

export default Axios