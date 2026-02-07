import express from 'express';
import postRoute from './routes/postRoutes.js';
import { dbConnect } from './config/db.js';

const app = express();
const PORT = 3000;

app.use('/',postRoute);
dbConnect();
app.listen(PORT,()=>console.log(`App is running on port ${PORT}`));

