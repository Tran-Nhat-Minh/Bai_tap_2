import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nhatminhtran2611_db_user:SihNA0uvvhbkBYqZ@cluster0.vwfbl8h.mongodb.net/node_fulltask?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("✅ Connected to MongoDB Atlas successfully!");
  } catch (error) {
    console.error("❌ MongoDB Atlas connection failed:", error.message);
  }
};

export default connectDB;
