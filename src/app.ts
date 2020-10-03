import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app=express();

import indexRoutes from './routes/index'
import authRoutes from './routes/auth'

//settings
app.set('port', process.env.PORT || 3000)

//middlewares

app.use(morgan('dev'));
app.use(express.json());


//routes

app.use('/api', indexRoutes);
app.use('/api/auth',authRoutes);

//store img

app.use('/uploads',express.static(path.resolve('uploads')));

export default app;