import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
  departmentName: {
    type: String,
    required: true,
    unique: true,
  },
  departmentDescription: {
    type: String,
    required: true,
  },
  departmentSymbol: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Department', departmentSchema);