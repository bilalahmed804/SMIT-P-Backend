import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Route Imports
import userRoutes from "./routes/userRoute.js";
import courseRoutes from "./routes/courseRoute.js";
import batchRoutes from "./routes/batchRoute.js";
import sectionRoutes from "./routes/sectionRoute.js";

// Load Environment Variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the School Management System API');
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/batches', batchRoutes);
app.use('/api/sections', sectionRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch(err => console.error('Database connection error:', err));
