const express = require("express");
const app = express();
require('dotenv').config();
app.use(express.json());

const PORT = process.env.PORT || 5000;


const connectDB = require("./config/connectDB");
connectDB();

app.use('/api/user', require('./routes/User'));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server running on port ${PORT}`);
});

