import express from 'express';
import mongoose from 'mongoose';
import Missions from '../../models/missionSchema.mjs';
import User from '../../models/userSchema.mjs';
import { missionsData } from '../../utilities/sampleMissions.mjs'

const router = express.Router();

router.get('/', async (req, res) => {
  try {
      const allMissions = await Missions.find({});
      res.send(allMissions);
  } catch (error) {
      console.error(error);
  }
})

//Route only works on Localhost
router.get('/seed', async (req, res) => {
  try {
    await Missions.deleteMany({});
    const missions = [...missionsData];

    for (let mission of missions) {
      const difficulty = mission.MissionDifficulty;
      let crewCount;
      switch (difficulty) {
        case 1: crewCount = 3; break;
        case 2: crewCount = 4; break;
        case 3: crewCount = 5; break;
        case 4: crewCount = 6; break;
        default: crewCount = 2;
      }

      // Get random user ids
      const crewIds = await User.aggregate([
        { $sample: { size: crewCount } },
        { $project: { _id: 1 } }
      ]);

      mission.CrewIds = crewIds.map(crew => crew._id);

      // Create and save the mission
      const newMission = new Missions(mission);
      await newMission.save();
    }

    res.status(200).send('Missions seeded successfully');
  } catch (error) {
    console.error('Error seeding missions:', error);
    res.status(500).send('Error seeding missions');
  }
});

export default router;
