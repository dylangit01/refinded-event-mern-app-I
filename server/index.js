import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/postsRoute.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// app.listen(PORT, () => console.log(`Server is running on port ${ PORT }`));

app.get('/', (req, res) => res.send('API is running successfully...'));

app.use('/posts', postRoutes);

// const CONNECTION_URL = 'mongodb+srv://user01:user01@cluster0.lxcvk.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server is running on port ${ PORT }`)))
  .catch(err => console.log(err.message));

mongoose.set('useFindAndModify', false);




