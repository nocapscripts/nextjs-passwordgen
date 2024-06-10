import mongoose, { Mongoose } from "mongoose";

let cachedConnection: Mongoose | null = null;

export async function dbConnect() {
  if (cachedConnection) {
    console.log("Connected from previous");
    return cachedConnection;
  } else {
    try {
      const conString = process.env.MONGODB_URI;
      const conn = await mongoose.connect(conString!, {
        autoIndex: true,
      });

      cachedConnection = conn;
      console.log("Newly connected");
      return conn;
    } catch (error) {
      console.error("Error connecting to the database:", error);
      throw new Error("Database connection failed");
    }
  }
}
