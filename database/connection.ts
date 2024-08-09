import mongoose from "mongoose";
require("dotenv").config();

const dbUri: string = process.env.DB_URI || "";
const dbUrl: string = process.env.DB_URL || "";
const operDB: string = process.env.Operational_DB || "";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUri, {
      dbName: operDB,
    });
    console.log(dbUrl);
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
