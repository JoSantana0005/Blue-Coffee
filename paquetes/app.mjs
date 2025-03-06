import express, {json} from 'express';
import cors from 'cors';
import { ProductRouter } from './MVC/Routes/Paquete.mjs';

const PORT = process.env.PORT || 6060;

const app = express();
app.use(json());
app.use(cors());

app.use('/paquetes', ProductRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el http://localhost:${PORT}`);
})