import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/postsRoute.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// app.listen(PORT, () => console.log(`Server is running on port ${ PORT }`));

app.get('/', (req, res) => res.send('API is running successfully...'));

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://dylan01:dylan01@cluster0.rk0ev.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server is running on port ${ PORT }`)))
  .catch(err => console.log(err.message));

mongoose.set('useFindAndModify', false);




