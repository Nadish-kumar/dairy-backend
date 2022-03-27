import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  userid : String,
  image: String,
  desc: String,
  date: Date,
});
export default mongoose.model("Lemons", postSchema);
