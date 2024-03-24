import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema({
  resourceId: {
    type: String,
    required: true
  },
  resourceName: {
    type: String,
    required: true
  },
  resourceQuantity: {
    type: Number,
    required: true
  },
  resourceType: {
    type: String,
    required: true
  },
  resourceSource: {
    type: String,
    required: true
  },
  resourceDescription: {
    type: String,
    required: true
  },
  resourcePhoto: {
    type: String,
    required: false
  }
});

export default mongoose.model('ShipResources', ResourceSchema);