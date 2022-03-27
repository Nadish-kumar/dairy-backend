import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
});

export default mongoose.model("mens", userSchema);
