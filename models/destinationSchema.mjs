import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  destinationName: {
    type: String,
    required: true
  },
  destinationDescription: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  }
});

export default mongoose.model('Destinations', destinationSchema);
