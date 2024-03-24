import express from 'express';
import ShipResources from '../../models/shipResourceSchema.mjs'
import { checkToken } from '../../middleware/auth.mjs';
import { resourceList } from '../../utilities/sampleResources.mjs';
const router = express.Router();
import dotenv from 'dotenv';
dotenv.config();


const baseURL = process.env.BASE_URL;

router.get('/', async (req, res) => {
    try {
        const allResources = await ShipResources.find({});
        res.send(allResources);
    } catch (error) {
        console.error(error);
    }
})

router.get('/seed', async (req, res)=>{
    await ShipResources.deleteMany({});
    await ShipResources.create(resourceList);
    res.send('Resource Database Seeded');
})

router.get('/photo/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const destination = await Destinations.findOne({ id: id });
        if (!destination) {
            return res.status(404).send("Destination not found")
        }

        const url = `${baseURL}/${destination.imageUrl}`;
        res.send(url);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

export default router;