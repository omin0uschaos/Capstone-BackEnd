import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  portrait: String,
  isAdmin: Boolean,
  rank: {
    type: String,
    enum: ['SUPCOM', 'FA', 'VA', 'RA', 'CAPT', 'CDR', 'LCDR', 'LT', 'ENS', 'WO', 'CPO', 'PO', 'SN', 'No Rank'],
  },
  clearanceLevel: {
    type: String,
    enum: ['I', 'II', 'III', 'IV', 'No Rank'],
  },
  department: {
    type: String,
    enum: ['CMD', 'XO', 'OPS', 'ENG', 'COMMS', 'MED', 'INT', 'SEC', 'SCI', 'NAV','LOG','SPC','ENL', 'No Job'],
  },
  title: String,
  credits: Number,
  taskList: [{
    taskname: String,
    taskDetail: String,
    taskComplete: Boolean,
  }],
  personalinfo: {
    first: String,
    last: String,
    nickname: String,
    age: Number,
    dob: String,
    enlistDate: String,
    marital: String,
    homeplanet: {
      type: String,
      enum: ['Earth', 'Luna Prime', 'Enceladus', 'Mars', 'Europa', 'Ganymede', 'Titan'],
    },
    military: {
      type: String,
      enum: ['EDF', 'LSC', 'EUF', 'MSG', 'JV', 'TS', 'Non-Military'],
    },
    education: String,
    favFood: String,
    favSport: String,
    officialRecord: [{
      incidentId: Number,
      incidentDate: String,
      incidentDetails: String,
    }],
  },
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password') || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('Users', userSchema);