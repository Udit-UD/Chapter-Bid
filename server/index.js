import express from "express";
import cors from 'cors'; 
import morgan from 'morgan';
import dotenv from 'dotenv'; 
import connect from "./services/connectDb.js";

dotenv.config(); 

const app = express(); 

// Middlewares
app.use(express.json()); 
app.use(cors()); 
app.use(morgan('tiny')); 
app.disable('x-powered-by'); 
// Middlewares

const port = process.env.PORT || 3000; 


// Start the server only when a valid database connection is established
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        });
    } catch (error) {
        console.log('Cannot connect to the server');
    }
}).catch(error => {
    console.log("Invalid database connection...!");
});