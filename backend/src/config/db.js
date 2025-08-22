import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected: ", connection.connection.host);
  } catch (err) {
    console.log("failed to connect to MongoDB");
    console.log("error: ", err);
    process.exit(1);
  }
};

export default connectDB;
