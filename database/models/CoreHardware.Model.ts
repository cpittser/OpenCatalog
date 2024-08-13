import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICoreHardware extends Document {
  manufacturer: string;
  productLine: string;
  partNumber: string;
  upc: string;
  category: string;
}

const coreSchema: Schema<ICoreHardware> = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: [true, "Manufacturer Required"],
  },
  productLine: {
    type: String,
  },
  partNumber: {
    type: String,
    required: [true, "Part Number is required"],
  },
  upc: {
    type: String,
  },
  category: {
    type: String,
    required: [true, "Entry must have a core categorization"],
  },
});

const coreHardwareModel: Model<ICoreHardware> = mongoose.model(
  "coreHardwareData",
  coreSchema
);
export default coreHardwareModel;
