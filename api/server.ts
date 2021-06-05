import express from 'express';
import { products } from './Mockdata';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter';
const app = express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
const PORT = process.env.PORT || 5000;
var cors = require('cors')
app.use(cors())
app.get('/api/products', (req, res) => {
  res.send(products);
});

app.get('/api/product/:id', (req, res) => {
  const product = products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.send(products);
  }
});

app.use('/api/users', userRouter);

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.use((err: any, req: any, res: any, next: any) => {
  res.status(500).send({ message: err.message });
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at 1 https://localhost:${PORT}`);
});