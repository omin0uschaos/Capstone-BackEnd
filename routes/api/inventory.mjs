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


export default router;