//36.00
import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import DefaultData from './default.js';
import route from './routes/route.js';
import dotenv from 'dotenv';


const app=express();
dotenv.config();
app.use(cors());
app.use('/',route);

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);
DefaultData();


app.listen(process.env.PORT || 8000, function(){
  console.log(`Server is running successfully on port ${PORT}`);
})