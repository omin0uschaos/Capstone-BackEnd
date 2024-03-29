import mongoose from 'mongoose';

const missionSchema = new mongoose.Schema({
  DateAssigned: {
    type: String,
    required: true
  },
  DateCompleted: {
    type: String
  },
  MissionObjective: {
    type: String,
    required: true
  },
  MissionDetails: {
    type: String,
    required: true
  },
  MissionDifficulty: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4]
  },
  MissionPhoto: {
    type: String
  },
  CrewUsernames: [{
     type: String 
    }]
});


export default mongoose.model('Missions', missionSchema);
