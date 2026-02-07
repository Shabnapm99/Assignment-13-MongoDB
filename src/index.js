import express from 'express';
import postRoute from './routes/postRoutes.js';

const app = express();
const PORT = 3000;

app.use('/',postRoute);

app.listen(PORT,()=>console.log(`App is running on port ${PORT}`));

