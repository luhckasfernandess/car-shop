import express from 'express';
import routes from './routes/index.routes';

const app = express();

app.use(express.json());
app.use('/cars', routes.carsRoute);

export default app;
