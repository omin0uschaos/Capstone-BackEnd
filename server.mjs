import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Users from './models/userSchema.mjs';
import usersRouter from './routes/api/users.mjs';
import missionsRouter from './routes/api/missions.mjs';
import resourceRouter from './routes/api/resources.mjs';
import inventoryRouter from './routes/api/inventory.mjs';
import destinationRouter from './routes/api/destinations.mjs';
import tokenRouter from './routes/api/token.mjs'
import cors from 'cors';


// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Connect to MongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
}

// Call the function to connect to MongoDB
connectToDatabase();

// Middleware
app.use(express.json());
app.use('/images', express.static('images'));

// Routes
app.use('/api/users', usersRouter);
app.use('/api/missions', missionsRouter);
app.use('/api/resources', resourceRouter);
app.use('/api/inventory', inventoryRouter);
app.use('/api/destinations', destinationRouter)
app.use('/api/token', tokenRouter)

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Voyatika OS!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
