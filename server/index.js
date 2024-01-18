const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connection');
const UserRouter = require('./Routes/users');




const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes

// Users
app.use('/users', UserRouter );




// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Hostel Bank Server running on port ${port}`);
});