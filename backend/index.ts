import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import loanRoutes from './routes/loanRoutes';

const app = express();
const PORT = 5000;
const MONGO_URI = 'your-mongodb-uri';

app.use(cors());
app.use(bodyParser.json());
app.use('/api/loans', loanRoutes);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

