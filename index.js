import express from 'express';
import dotenv from 'dotenv';
import ejs from 'ejs';
import connectDB from './config/db.js';

dotenv.config();


const PORT = process.env.PORT;
// create server

const app = express();
connectDB();

// middlewares setup

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine','ejs');
app.set('views','views');


// import routes
import productRoutes from './routes/productRoutes.js';

app.use('/',productRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})