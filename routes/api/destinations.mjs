import express from 'express';
import Destinations from '../../models/destinationSchema.mjs'
import { checkToken } from '../../middleware/auth.mjs';
import { destinations } from '../../utilities/sampleDestinations.mjs';
const router = express.Router();
import dotenv from 'dotenv';
dotenv.config();


const baseURL = process.env.BASE_URL;

router.get('/', async (req, res) => {
    try {
        const allDestinations = await Destinations.find({});
        res.send(allDestinations);
    } catch (error) {
        console.error(error);
    }
})

router.get('/seed', async (req, res)=>{
    await Destinations.deleteMany({});
    await Destinations.create(destinations);
    res.send('Destinations Database Seeded');
})

router.get('/photo/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const destination = await Destinations.findById(id);
        if (!destination) {
            return res.status(404).send("Destination not found");
        }

        const url = `${baseURL}${destination.imageUrl}`;
        res.send(url);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

export default router;