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

//Route only works on localhost where I have SampleSeedData
router.get('/seed', async (req, res)=>{
    await ShipResources.deleteMany({});
    await ShipResources.create(resourceList);
    res.send('Resource Database Seeded');
})


export default router;