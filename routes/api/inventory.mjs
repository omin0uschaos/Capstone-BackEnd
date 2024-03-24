import express from 'express';
import ShipInventory from '../../models/shipInventorySchema.mjs'
import { checkToken } from '../../middleware/auth.mjs';
import { inventoryList } from '../../utilities/sampleInventory.mjs';
const router = express.Router();
import dotenv from 'dotenv';
dotenv.config();


const baseURL = process.env.BASE_URL;

router.get('/', async (req, res) => {
    try {
        const allItems = await ShipInventory.find({});
        res.send(allItems);
    } catch (error) {
        console.error(error);
    }
})

router.get('/seed', async (req, res)=>{
    await ShipInventory.deleteMany({});
    await ShipInventory.create(inventoryList);
    res.send('Inventory Database Seeded');
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