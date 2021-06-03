import express from 'express';
import * as data from './Mockdata';
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/products', (req, res) => {

  res.send(data)
});

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});