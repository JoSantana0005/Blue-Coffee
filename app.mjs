import express, {json} from 'express';
import cors from 'cors';
import {ProductRouter } from './src/MVC/Routes/Product.mjs';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(json());
app.use(cors());

app.use('/products', ProductRouter);