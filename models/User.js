import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  platform: { type: String, enum: ['google'], default: 'google' },
  role: { type: String, enum: ['student', 'teacher', 'admin'], required: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
