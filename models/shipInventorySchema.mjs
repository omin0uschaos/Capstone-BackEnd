import mongoose from 'mongoose';

const shipInventorySchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    required: true,
  },
  itemQuantity: {
    type: Number,
    required: true,
  },
  itemPhoto: {
    type: String,
    required: false,
  },
  itemDescription: {
    type: String,
    required: true,
  },
  canSynthesize: {
    type: Boolean,
    required: true,
  },
  synthRecipe: [{
      type: String,
      ref: 'ShipResources',
  }]
});

export default mongoose.model('ShipInventory', shipInventorySchema);