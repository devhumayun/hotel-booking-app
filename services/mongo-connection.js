import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(String(process.env.MONGO_URL));
    return connection;
  } catch (error) {
    console.error(error);
  }
};
