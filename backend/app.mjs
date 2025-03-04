import express, {json} from 'express';
import cors from 'cors';
import { ProductRouter } from './MVC/Routes/Paquete.mjs';
import { CapsulasRouter } from './MVC/Routes/capsulas.mjs';
import { RouteUser } from './MVC/Routes/UserRoutes.mjs';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(json());
app.use(cors());

app.use('/paquetes', ProductRouter);
app.use('/capsulas', CapsulasRouter);
app.use('/Users', RouteUser);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el http://localhost:${PORT}`);
})