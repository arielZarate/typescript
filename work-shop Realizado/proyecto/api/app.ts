import express, { Application,Request, Response, NextFunction } from 'express';

import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();

import config from './src/lib/config';


app.use(express.urlencoded({ extended: true, limit: '50mb' })); //middleware
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(
    cors({
        origin: config.cors, // Cambiado a 3000 para coincidir con el origen del frontend
        credentials: true,
        methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    }) 

);



//======interface=========
interface error {
    status: number;
    message: string;
}

app.use((err: error, req: Request, res: Response, next: NextFunction) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});


 import indexRouter from './src/routes/index'
app.use('/api',indexRouter);


//exporto
export default app;