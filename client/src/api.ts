import axios from 'axios';

const request = axios.create({
  baseURL: 'https://arcane-badlands-11766.herokuapp.com/'
});

export const productData = () => request.get('/api/products');