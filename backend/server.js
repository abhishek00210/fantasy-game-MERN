const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const playerRoutes = require('./routes/playerRoutes');
const teamRoutes = require('./routes/teamRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Body parser

// Routes
app.use('/api', playerRoutes);
app.use('/api', teamRoutes);

// Listen on PORT
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
