import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`MongoDB connected\nHost is ${connection.connection.host}`);
  } catch (error) {
    console.error("Error connecting to database", error);
    throw new Error("Error connecting to database");
  }
};

export default connectDB;