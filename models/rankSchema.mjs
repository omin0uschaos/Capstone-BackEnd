import mongoose from 'mongoose';

const rankSchema = new mongoose.Schema({
  rankName: {
    type: String,
    required: true,
  },
  rankDescription: {
    type: String,
    required: true,
  },
  rankSymbol: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Rank', rankSchema);
