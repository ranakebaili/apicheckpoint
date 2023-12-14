const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("database connected");
    } catch (error) {
        console.error("database not connected");
    }
}

module.exports = connectDB;
