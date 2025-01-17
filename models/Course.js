import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true } // e.g., '6 months'
  }, { timestamps: true });
  
  const Course = mongoose.model('Courses', courseSchema);
  
export default  Course;
  