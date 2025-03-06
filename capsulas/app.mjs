import express, {json} from 'express';
import cors from 'cors';
import { CapsulasRouter } from './MVC/Routes/capsulas.mjs';

const PORT = process.env.PORT || 7070;

const app = express();
app.use(json());
app.use(cors());

app.use('/capsulas', CapsulasRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el http://localhost:${PORT}`);
})