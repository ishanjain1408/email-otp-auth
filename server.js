require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');


const app = express();
app.use(bodyParser.json());


connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/emailAuthDB');


app.use('/api/auth', authRoutes);


app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).json({ message: 'Something broke!' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));