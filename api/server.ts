import express from 'express';
import { products } from './Mockdata';
const app = express();
const PORT = process.env.PORT || 5000;
var cors = require('cors')
app.use(cors())
app.get('/api/products', (req, res) => {
  res.send(products);
});

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at 1 https://localhost:${PORT}`);
});