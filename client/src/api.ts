import axios from 'axios';

const request = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 
  'http://localhost:5000/' :
  'https://arcane-badlands-11766.herokuapp.com/'
});

export const productData = () => request.get('/api/products');