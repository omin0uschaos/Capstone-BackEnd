import mongoose from 'mongoose';

const militarySchema = new mongoose.Schema({
  militaryName: {
    type: String,
    required: true,
    unique: true,
  },
  militaryDescription: {
    type: String,
    required: true,
  },
  militarySymbol: {
    type: String,
    required: true,
  },
  militaryLogo: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Military', militarySchema);